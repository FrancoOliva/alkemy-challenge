import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  busqueda!: Heroe[];

  buscarForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor( private heroesService: HeroesService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  buscar(){

    this.busqueda = [];
    
    if( this.buscarForm.invalid ){
      console.log('Formulario invalido');
      console.log(this.buscarForm);
    } else {

      console.log('Formulario válido', this.buscarForm.controls['nombre'].value);      
      let nombre = this.buscarForm.controls['nombre'].value;

      this.heroesService.buscarHeroe(nombre).subscribe( busqueda => {

        //console.log('Busquda OK');
        
        
        busqueda.results.forEach( r => {
          //console.log(r.id)

          let idHeroe: string = r.id;

          this.heroesService.getHeroe(idHeroe).subscribe( h =>{
            this.busqueda.push(h);
          });

        });

        //console.log('Fin foreach', this.busqueda);

      });

      
    }
  }

}
