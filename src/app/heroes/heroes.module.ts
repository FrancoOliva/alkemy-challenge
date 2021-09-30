import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaCardComponent } from './components/busqueda-card/busqueda-card.component';
import { DetallesHeroeComponent } from './pages/detalles-heroe/detalles-heroe.component';


@NgModule({
  declarations: [
    HomeComponent,
    EquipoComponent,
    BuscarComponent,
    HeroeCardComponent,
    BusquedaCardComponent,
    DetallesHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
