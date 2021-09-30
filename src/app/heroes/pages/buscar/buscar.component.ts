import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Result } from '../../interfaces/response.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  busqueda!: Result[];

  buscarForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  mensajeError: string = '';
  mostrarAlert: boolean = false;
  cargando: boolean = false;

  constructor( private heroesService: HeroesService, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }

  buscar(){

     this.busqueda = [];
     let nombre: string = '';

     this.cargando = true;
    
     if( this.buscarForm.invalid ){
       
       this.mensajeError = 'Completar todos los campos.'
       this.mostrarAlert = true;
       this.cargando = false;
     } else {
            
      nombre = this.buscarForm.controls['nombre'].value;

      this.heroesService.buscarHeroe(nombre).subscribe( resultado => {


        if(resultado.response == 'success'){          

          resultado.results.forEach( r => { 
            this.busqueda.push(r);
          });

          this.cargando = false;

        } else if(resultado.response == 'error'){          

          if(resultado.error == 'character with given name not found'){
      
            this.mensajeError = 'No se encontraron héroes con ese nombre.';
            this.mostrarAlert = true;
            this.cargando = false;
          }

        }
      });

      
     }
  }

  escribiendo(){
    this.mensajeError = '';
    this.mostrarAlert = false;
  }

}
