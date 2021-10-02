import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';
import { HeroesService } from '../../services/heroes.service';

interface estadistica {
  tipo: string;
  valor: number;
}


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  miEquipo!: Result[]; 
  mostrar:boolean = true;

  equipoTipo: string = 'Desconocido';

  combat : number = 0;
  power : number = 0;
  durability : number = 0;
  speed : number = 0;
  intelligence : number = 0;
  strength : number = 0;

  acumulativo: estadistica[] = [
    {
      tipo: 'Combate',
      valor: 0
    },
    {
      tipo: 'Poder',
      valor: 0
    },
    {
      tipo: 'Durabilidad',
      valor: 0
    },
    {
      tipo: 'Velocidad',
      valor: 0
    },
    {
      tipo: 'Inteligencia',
      valor: 0
    },
    {
      tipo: 'Fuerza',
      valor: 0
    }
  ];  

  constructor( private heroesService: HeroesService) {

    if( localStorage.getItem('equipo') ){
      this.miEquipo = JSON.parse( localStorage.getItem('equipo')! )

      for( let i = 0; i < this.miEquipo.length; i++){
        this.combat += parseInt(this.miEquipo[i].powerstats.combat);
        this.power += parseInt(this.miEquipo[i].powerstats.power);
        this.durability += parseInt(this.miEquipo[i].powerstats.durability);
        this.speed += parseInt(this.miEquipo[i].powerstats.speed);
        this.intelligence += parseInt(this.miEquipo[i].powerstats.intelligence);
        this.strength += parseInt(this.miEquipo[i].powerstats.strength);
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

      this.acumulativo.sort( ( a:estadistica , b:estadistica ) => {

        if( a.valor < b.valor ){
          return 1;
        } else if (a.valor > b.valor ){
          return -1;
        } else {
          return 0;
        }

      });

      this.equipoTipo = this.acumulativo[0].tipo;


    } else {
      this.miEquipo = [];
    }
    
   }

  ngOnInit(): void {

    

    

    
    console.log(this.acumulativo);
    
  }

}
