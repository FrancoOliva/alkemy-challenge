import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';
import { Estadisticas } from './interface/estadisticas.interface';




@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styles: [
  ]
})
export class PowerstatsComponent implements OnInit,OnChanges {

  

  @Input() equipoPowerstats!: Result[];

  equipoTipo: string = 'Desconocido';

  combat : number = 0;
  power : number = 0;
  durability : number = 0;
  speed : number = 0;
  intelligence : number = 0;
  strength : number = 0;
  peso: number = 0;
  altura: number = 0;

  acumulativo: Estadisticas[] = [];

  promedio: Estadisticas[] = [];

  constructor() { 

    
  }
  
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.combat        = 0;
    this.power         = 0;
    this.durability    = 0;
    this.speed         = 0;
    this.intelligence  = 0;
    this.strength      = 0;
    this.peso          = 0;
    this.altura        = 0;

    for( let i = 0; i < this.equipoPowerstats.length; i++){
      
      this.combat += parseInt(this.equipoPowerstats[i].powerstats.combat);
      this.power += parseInt(this.equipoPowerstats[i].powerstats.power);
      this.durability += parseInt(this.equipoPowerstats[i].powerstats.durability);
      this.speed += parseInt(this.equipoPowerstats[i].powerstats.speed);
      this.intelligence += parseInt(this.equipoPowerstats[i].powerstats.intelligence);
      this.strength += parseInt(this.equipoPowerstats[i].powerstats.strength);
      this.peso += parseInt(this.equipoPowerstats[i].appearance.weight[1]);
      this.altura += parseInt(this.equipoPowerstats[i].appearance.height[1]);
    }

    this.acumulativo = [
      {
        tipo: 'Combate',
        valor: this.combat
      },
      {
        tipo: 'Poder',
        valor: this.power
      },
      {
        tipo: 'Durabilidad',
        valor: this.durability
      },
      {
        tipo: 'Velocidad',
        valor: this.speed
      },
      {
        tipo: 'Inteligencia',
        valor: this.intelligence
      },
      {
        tipo: 'Fuerza',
        valor: this.strength
      }
    ];

    this.promedio = [
      {
        tipo: 'Peso promedio',
        valor: this.peso / this.equipoPowerstats.length
      },
      {
        tipo: 'Altura promedio',
        valor: this.altura / this.equipoPowerstats.length
      }
    ]

    this.acumulativo.sort( ( a:Estadisticas , b:Estadisticas ) => {

      if( a.valor < b.valor ){
        return 1;
      } else if (a.valor > b.valor ){
        return -1;
      } else {
        return 0;
      }

    });

    this.equipoTipo = this.acumulativo[0].tipo;

  }

  

}
