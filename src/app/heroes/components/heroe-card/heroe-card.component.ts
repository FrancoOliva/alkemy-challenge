import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() miEquipo!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

  detalles() {
    console.log('Mostrar detalles del heroe');
  }

  eliminar(){
    console.log('Eliminar heroe del equipo');
  }

}
