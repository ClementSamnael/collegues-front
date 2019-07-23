import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import {GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { CollegueSelectionnerComponent } from './collegue-selectionner/collegue-selectionner.component';
import { ConnexionComponent } from './connexion/connexion.component';

const ROUTES: Routes = [
 
  {path: 'accueil', component:AccueilComponent},
  {path: 'galerie', component:GalerieComponent},
  {path: 'apropos', component:AproposComponent},
  {path: 'galerie/:matricule', component:CollegueSelectionnerComponent},

  {path: '', pathMatch: 'full', redirectTo: 'connexion' },

];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercherParNomComponent,
    AjouterCollegueComponent,
    MenuComponent,
    AccueilComponent,
    GalerieComponent,
    AproposComponent,
    CollegueSelectionnerComponent,
    ConnexionComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
