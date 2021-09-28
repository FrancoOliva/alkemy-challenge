import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  // 

  getHeroe():Observable<Heroe>{
    return this.http.get<Heroe>('https://superheroapi.com/api/2029331647243669/4');
  }
}
