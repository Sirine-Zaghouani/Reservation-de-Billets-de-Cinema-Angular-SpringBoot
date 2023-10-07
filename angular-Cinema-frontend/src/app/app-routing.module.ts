import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenticatedUserGuard } from './guard/authenticated-user.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { GeneralSettingsComponent } from './components/edit-profile-user/general-settings/general-settings.component';
import { PasswordSettingsComponent } from './components/edit-profile-user/password-settings/password-settings.component';
import { AddLaboratoireComponent } from './components/edit-profile-user/add-laboratoire/add-laboratoire.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { AdminGuard } from './guard/admin.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { GestionSalleComponent } from './components/dashboard-admin/gestion-salle/gestion-salle.component';
import { GestionUsersComponent } from './components/dashboard-admin/gestion-users/gestion-users.component';
import { GestionHoraireComponent } from './components/dashboard-admin/gestion-horaire/gestion-horaire.component';
import { GestionCategoryComponent } from './components/dashboard-admin/gestion-category/gestion-category.component';
import { GestionFilmComponent } from './components/dashboard-admin/gestion-film/gestion-film.component';
import { GestionProjectionComponent } from './components/dashboard-admin/gestion-projection/gestion-projection.component';
import { GestionReservationComponent } from './components/dashboard-admin/gestion-reservation/gestion-reservation.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { MesReservationsComponent } from './components/mes-reservations/mes-reservations.component';
import { FilmCategoryComponent } from './components/film-category/film-category.component';
import { SearchFilmComponent } from './components/search-film/search-film.component';
import { DashboardComponent } from './components/dashboard-admin/dashboard/dashboard.component';
import { RegisterPraticientComponent } from './components/z/register-praticient/register-praticient.component';
import { PraticientGuard } from './guard/praticient.guard';

const routes: Routes = [
  //public routes

  { path: "", component: FilmListComponent },
  { path: "films", component: FilmListComponent },
  {path: 'films/:id',component: FilmDetailsComponent},
  {path: 'search/:keyword',component: SearchFilmComponent},
  {path: 'category/:id',component: FilmCategoryComponent},
  {path:'category', component: FilmListComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterUserComponent },
  { path: "register-praticien", component: RegisterPraticientComponent },
  //user profile routes
  {
    path: "account/user", component: EditProfileUserComponent, canActivate: [AuthenticatedUserGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent },
      { path: "add-laboratoire", component: AddLaboratoireComponent },
    ]
  },
  {path:"mes-reservations" , component: MesReservationsComponent,canActivate: [AuthenticatedUserGuard || AdminGuard]},
  

  //praticien after auth routes
  {
    path: "account/praticien", component: EditProfileUserComponent, canActivate: [PraticientGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent },

    ]
  },

  //praticien profile routes


  /* admin routes */

  {
    path: "account/admin", component: EditProfileUserComponent, canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent }]
  }, {
    path: "admin-dashboard", component: DashboardAdminComponent, canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "salle", pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "salle", component: GestionSalleComponent },
      { path: "category", component: GestionCategoryComponent },
      { path: "film", component: GestionFilmComponent },
      { path: "projection", component: GestionProjectionComponent },
      { path: "reservation", component: GestionReservationComponent },
      { path: "horaire", component: GestionHoraireComponent },
      { path: "users", component: GestionUsersComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
