import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroeComponent,
    EquipoComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
