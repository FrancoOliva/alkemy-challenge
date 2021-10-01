import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() alertError  : EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Output() mensajeError: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { 
    
    if( localStorage.getItem('equipo') ){      

      this.equipo = JSON.parse(localStorage.getItem('equipo')!);

      for(let i = 0; i < this.equipo.length; i++){
        if( this.equipo[i].biography.alignment == "good"){
          this.buenos++;
        } else if( this.equipo[i].biography.alignment == "bad"){
          this.malos++;
        }
      }

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
          
          this.mensajeError.emit('Solo se permiten 3 héroes buenos por equipo.');
          this.alertError.emit(true);
        }

        
      } else if(heroe.biography.alignment == "bad"){

        if( this.malos < 3){

          this.malos++;
          this.equipo.push(heroe);
    
        } else {
          
          this.mensajeError.emit('Solo se permiten 3 héroes malos por equipo.');
          this.alertError.emit(true);

          
        }  
        
      }        
        
    } else {
      this.mensajeError.emit('Solo se permiten 6 héroes por equipo.');
      this.alertError.emit(true);
    }


    localStorage.setItem('equipo', JSON.stringify(this.equipo) );
    
    
  }


}
