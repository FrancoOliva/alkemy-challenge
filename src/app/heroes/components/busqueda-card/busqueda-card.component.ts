import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { Result } from '../../interfaces/response.interface';

@Component({
  selector: 'app-busqueda-card',
  templateUrl: './busqueda-card.component.html',
  styleUrls: ['./busqueda-card.component.css']
})
export class BusquedaCardComponent implements OnInit {

  @Input() heroe!: Result;

  constructor() { }

  ngOnInit(): void {
  }

  agregar(heroe: Result){
    console.log('Agregar al equipo');
    console.log(heroe);
  }

  // detalles(name: string){
  //   console.log('Mostrar detalles del héroe', name);
  // }

}
