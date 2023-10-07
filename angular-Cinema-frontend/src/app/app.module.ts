import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/z/topbar/topbar.component';
import { SearchMedecinComponent } from './components/z/search-medecin/search-medecin.component';
import { FormsModule } from '@angular/forms';
import { SearchLaboratoireComponent } from './components/z/search-laboratoire/search-laboratoire.component';
import { SearchLaboratoireResultComponent } from './components/search-laboratoire-result/search-laboratoire-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DossierMedicalComponent } from './components/z/dossier-medical/dossier-medical.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ResumeComponent } from './components/z/resume/resume.component';
import { MaladiesComponent } from './components/z/maladies/maladies.component';
import { GroupeSanguinComponent } from './components/z/groupe-sanguin/groupe-sanguin.component';
import { AnalysesComponent } from './components/z/analyses/analyses.component';
import { ChirugiesComponent } from './components/z/chirugies/chirugies.component';
import { TraitementsComponent } from './components/z/traitements/traitements.component';
import { MedecinsTraitantsComponent } from './components/z/medecins-traitants/medecins-traitants.component';
import { VaccinationsComponent } from './components/z/vaccinations/vaccinations.component';
import { ExamensRadiologuesComponent } from './components/z/examens-radiologues/examens-radiologues.component';
import { HabitudesComponent } from './components/z/habitudes/habitudes.component';
import { AllergiesComponent } from './components/z/allergies/allergies.component';
import { AntecedantsFamiliauxComponent } from './components/z/antecedants-familiaux/antecedants-familiaux.component';
import { GeneralSettingsComponent } from './components/edit-profile-user/general-settings/general-settings.component';
import { PasswordSettingsComponent } from './components/edit-profile-user/password-settings/password-settings.component';
import { RegisterPraticientComponent } from './components/z/register-praticient/register-praticient.component';
import { AddLaboratoireComponent } from './components/edit-profile-user/add-laboratoire/add-laboratoire.component';
import { SearchMedecinResultComponent } from './components/search-medecin-result/search-medecin-result.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPharmacieComponent } from './components/z/search-pharmacie/search-pharmacie.component';
import { SearchPharmacieResultComponent } from './components/search-pharmacie-result/search-pharmacie-result.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { GestionSalleComponent } from './components/dashboard-admin/gestion-salle/gestion-salle.component';
import { GestionUsersComponent } from './components/dashboard-admin/gestion-users/gestion-users.component';
import { GestionPraticiensComponent } from './components/z/gestion-praticiens/gestion-praticiens.component';
import { DashboardComponent } from './components/dashboard-admin/dashboard/dashboard.component';
import { GestionLabosComponent } from './components/z/gestion-labos/gestion-labos.component';
import { GestionPharmacyComponent } from './components/z/gestion-pharmacy/gestion-pharmacy.component';
import { PriseRDVComponent } from './components/z/prise-rdv/prise-rdv.component';
import { EspaceRdvComponent } from './components/z/espace-rdv/espace-rdv.component';
import { GestionRDVByDoctorComponent } from './components/z/gestion-rdvby-doctor/gestion-rdvby-doctor.component';
import { FichePatientComponent } from './components/z/fiche-patient/fiche-patient.component';
import { GestionHoraireComponent } from './components/dashboard-admin/gestion-horaire/gestion-horaire.component';
import { GestionCategoryComponent } from './components/dashboard-admin/gestion-category/gestion-category.component';
import { GestionFilmComponent } from './components/dashboard-admin/gestion-film/gestion-film.component';
import { GestionProjectionComponent } from './components/dashboard-admin/gestion-projection/gestion-projection.component';
import { GestionReservationComponent } from './components/dashboard-admin/gestion-reservation/gestion-reservation.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmCategoryMenuComponent } from './components/film-category-menu/film-category-menu.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProjectionListComponent } from './components/projection-list/projection-list.component';
import { MesReservationsComponent } from './components/mes-reservations/mes-reservations.component';
import { FilmCategoryComponent } from './components/film-category/film-category.component';
import { SearchFilmComponent } from './components/search-film/search-film.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    SearchMedecinResultComponent,
    SearchMedecinComponent,
    SearchLaboratoireComponent,
    SearchLaboratoireResultComponent,
    LoadingComponent,
    DossierMedicalComponent,
    LoginComponent,
    RegisterUserComponent,
    EditProfileUserComponent,
    ResumeComponent,
    MaladiesComponent,
    GroupeSanguinComponent,
    AnalysesComponent,
    ChirugiesComponent,
    TraitementsComponent,
    MedecinsTraitantsComponent,
    VaccinationsComponent,
    ExamensRadiologuesComponent,
    HabitudesComponent,
    AllergiesComponent,
    AntecedantsFamiliauxComponent,
    GeneralSettingsComponent,
    PasswordSettingsComponent,
    RegisterPraticientComponent,
    AddLaboratoireComponent,
    SearchPharmacieComponent,
    SearchPharmacieResultComponent,
    DashboardAdminComponent,
    GestionSalleComponent,
    GestionUsersComponent,
    GestionPraticiensComponent,
    DashboardComponent,
    GestionLabosComponent,
    GestionPharmacyComponent,
    PriseRDVComponent,
    EspaceRdvComponent,
    GestionRDVByDoctorComponent,
    FichePatientComponent,
    GestionHoraireComponent,
    GestionCategoryComponent,
    GestionFilmComponent,
    GestionProjectionComponent,
    GestionReservationComponent,
    FilmListComponent,
    FilmCategoryMenuComponent,
    FilmDetailsComponent,
    SearchComponent,
    ProjectionListComponent,
    MesReservationsComponent,
    FilmCategoryComponent,
    SearchFilmComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
