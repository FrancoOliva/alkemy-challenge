import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { Result } from '../../interfaces/response.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-detalles-heroe',
  templateUrl: './detalles-heroe.component.html',
  styleUrls: ['./detalles-heroe.component.css']
})
export class DetallesHeroeComponent implements OnInit {

  detallesHeroe!: Result;
  cargando: boolean = false;
  mostrar: boolean = false;

  

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.cargando = true;

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.buscarHeroeID(id) )
    )
    .subscribe( heroe => {

      this.detallesHeroe = heroe;
      this.cargando = false;
      this.mostrar = true;

      console.log(this.detallesHeroe);
    });


  }

  agregar(){
    console.log('agregar al equipo');
  }

}
