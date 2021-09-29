import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-busqueda-card',
  templateUrl: './busqueda-card.component.html',
  styleUrls: ['./busqueda-card.component.css']
})
export class BusquedaCardComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    console.log('Agregar al equipo');
  }

  detalles(){
    console.log('Mostrar detalles del héroe');
  }

}
