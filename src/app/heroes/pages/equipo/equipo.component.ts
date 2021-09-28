import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  miEquipo!: Heroe;
  mostrar:boolean = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroe().subscribe( heroe => {

      this.miEquipo = heroe;

      console.log('miEquipo ->' , this.miEquipo);
      this.mostrar = true;
    });
    
  }

}
