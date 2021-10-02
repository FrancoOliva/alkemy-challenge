import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/response.interface';



@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() miEquipo!: Result[];

  @Output() heroeEliminado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private router: Router) {
    

  }

  ngOnInit(): void {
  }

  detalles(heroe: Result) {
    
    this.router.navigate(['/heroes/', heroe.id]);

  }

  eliminar(index: number){
    
    this.miEquipo.splice(index,1);

    localStorage.setItem('equipo', JSON.stringify(this.miEquipo) );

    this.heroeEliminado.emit(true);
  }

}
