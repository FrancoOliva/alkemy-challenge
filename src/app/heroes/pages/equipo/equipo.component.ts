import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/response.interface';
import { HeroesService } from '../../services/heroes.service';





@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  miEquipo!: Result; 
  mostrar:boolean = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    // this.heroesService.getHeroe().subscribe( heroe => {

      

    //   console.log( heroe );
      
    // });
    
  }

}
