import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  miEquipo!: Result[]; 
  mostrar:boolean = true;

  

  constructor( private heroesService: HeroesService) {

    if( localStorage.getItem('equipo') ){

      this.miEquipo = JSON.parse( localStorage.getItem('equipo')! );      


    } else {
      this.miEquipo = [];
    }
    
   }

  ngOnInit(): void {

    
    
  }

  heroeEliminado(event:boolean){
    if(event){
      this.miEquipo = JSON.parse( localStorage.getItem('equipo')! );
    }
  }

}
