import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path: 'mi-equipo',
        component: EquipoComponent
      },
      {
        path: 'heroe-detalles',
        component: HeroeComponent
      },
      {
        path: 'buscar-heroe',
        component: BuscarComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
