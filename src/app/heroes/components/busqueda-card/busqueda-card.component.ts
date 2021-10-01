import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';

@Component({
  selector: 'app-busqueda-card',
  templateUrl: './busqueda-card.component.html',
  styleUrls: ['./busqueda-card.component.css']
})
export class BusquedaCardComponent implements OnInit {


  @Input() resultadoBusqueda!: Result[];

  equipo: Result[] = [];

  buenos: number = 0;
  malos: number = 0;

  constructor( ) { 
    
    if( localStorage.getItem('equipo') ){      

      this.equipo = JSON.parse(localStorage.getItem('equipo')!);

    } else {
      this.equipo = [];
    }
  }

  ngOnInit(): void {

    
    
  }

  agregar(heroe: Result){
    

    // Validaciones
    // Max 6 jugadores: 3 buenos 3 malos
    if( this.equipo.length < 6){

      if(heroe.biography.alignment == "good"){

        if( this.buenos < 3){
          this.buenos++;
          this.equipo.push(heroe);

        } else {
          console.log('Solo se permiten 3 héroes buenos por equipo.');
        }

        
      } else if(heroe.biography.alignment == "bad"){

        if( this.malos < 3){

          this.malos++;
          this.equipo.push(heroe);
    
        } else {
          console.log('Solo se permiten 3 héroes malos por equipo.');
        }  
        
      }        
        
    } else {
      console.log('Solo se permiten 6 héroes por equipo.');
    }


    localStorage.setItem('equipo', JSON.stringify(this.equipo) );
    
    
  }


}
