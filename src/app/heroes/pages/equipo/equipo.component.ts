import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroe().subscribe( heroe => console.log(heroe) );
    
  }

}
