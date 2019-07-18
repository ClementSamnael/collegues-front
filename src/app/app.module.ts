import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercherParNomComponent,
    AjouterCollegueComponent
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
