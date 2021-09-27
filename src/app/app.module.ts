import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './heroes/pages/home/home.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HeroesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
