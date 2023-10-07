import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { User } from 'src/app/models/User';
import { Film } from 'src/app/models/film';
import { FilmCategory } from 'src/app/models/film-category';
import { Projection } from 'src/app/models/projection';
import { FilmService } from 'src/app/services/film.service';
import { FilmService1 } from 'src/app/services/film1.service';
import { ProjectionService } from 'src/app/services/projection.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film = new Film();
  category? : FilmCategory ;
  projections: Projection[] = [];
  loading : boolean = true;
  res: Reservation= new Reservation();
  user: User = new User();
  projection: Projection = new Projection();
  message = "";
  errors: string[] = [];

  proj:any
  constructor(private filmService:FilmService,  private _film: FilmService1,  private _projection: ProjectionService, private _reservation: ReservationService ,
    private route: ActivatedRoute,private _userService: UserService) { }
    authenticatedUser = this._userService.authenticatedUser;

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleFilmDetails();
    })
    
  }
  handleFilmDetails() {
   // get the "id" param string. convert string to a number using the "+" symbol
   const theFilmId: number = +this.route.snapshot.paramMap.get('id')!;

   this._film.getById(theFilmId).subscribe(
     data => {
       this.film = data;
     }
   )

   this._projection.getAllByFilm(theFilmId).subscribe(
    (data: any) => {
      this.loading = false;
      this.projections = data;
      console.log(this.projections)
    }
  )
 }
 saveReservation() {
  console.log(this.proj)
  if (this.user &&  this.res && this.res.nbPlace > 0) {
    // Assurez-vous que les utilisateurs, les projections et le nombre de places sont définis et valides.

   this.res.user = this.user;
   this.res.projection = this.proj;
   /* this.projection.map((i:any)=>{
      if(i.id== this.proj){
        this.res.projection = i
      }
    })*/
    console.log("New reservation", this.res);

    this._reservation.save(this.res).subscribe(
      () => {
        this.message = "Réservation ajoutée avec succès !";
      },
      (error) => {
        this.message = "";
        if (error.error.errors == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = error.error.errors;
        }
      }
    );
  } else {
    // Gérez le cas où les informations nécessaires ne sont pas définies ou valides.
    this.message = "Veuillez fournir des informations valides pour la réservation.";
  }
}



}

