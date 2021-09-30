import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';

@Component({
  selector: 'app-busqueda-card',
  templateUrl: './busqueda-card.component.html',
  styleUrls: ['./busqueda-card.component.css']
})
export class BusquedaCardComponent implements OnInit {

  @Input() heroe!: Result;

  equipo: Result[] = [];

  constructor( ) { }

  ngOnInit(): void {
    
  }

  agregar(heroe: Result){
    console.log('Agregar al equipo');
    console.log(heroe);
    console.log(this.equipo.length);
  }


}
