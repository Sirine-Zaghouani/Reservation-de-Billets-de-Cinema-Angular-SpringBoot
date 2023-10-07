import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { Projection } from 'src/app/models/projection';
import { ProjectionService } from 'src/app/services/projection.service';

@Component({
  selector: 'app-projection-list',
  templateUrl: './projection-list.component.html',
  styleUrls: ['./projection-list.component.css']
})
export class ProjectionListComponent implements OnInit {

  constructor(private _projection: ProjectionService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  projection: Projection = new Projection;
  message: string = "";
  errors: any = [];
  projections: Projection[] = [];
  selectedProjection !: Projection;
  loading : boolean = true;

 

}
