import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Gardez l'importation de AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PiesComponent } from './pies/pies.component';
import { AllComponent } from './all/all.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PromosComponent } from './promos/promos.component';
import { CheeseCakeComponent } from './cheese-cake/cheese-cake.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    PiesComponent,
    AllComponent,
    MenuComponent,
    FooterComponent,
    PromosComponent,
    CheeseCakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Utilisez uniquement AppRoutingModule pour gérer le routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
