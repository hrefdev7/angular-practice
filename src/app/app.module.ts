//Ce module AppModule utilise la librairie Angular @angular/core qui lui permet d'utiliser le mot clé NgModule.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// # Le code pour importer un module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProduitComponent } from './produit/produit.component';
//Ce fichier effectue le lancement ou Bootstrapping du module root --appcomponet.ts.

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ServicesComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// # Le code pour exporter un module
export class AppModule { }
