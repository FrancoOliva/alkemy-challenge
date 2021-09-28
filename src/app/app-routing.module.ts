import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
