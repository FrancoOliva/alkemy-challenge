import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DetallesHeroeComponent } from './pages/detalles-heroe/detalles-heroe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mi-equipo',
        component: EquipoComponent
      },
      {
        path: 'buscar-heroe',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: DetallesHeroeComponent
      },
      {
        path: '**',
        redirectTo: 'mi-equipo'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
