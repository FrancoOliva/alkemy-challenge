import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  // 

  getHeroe(idHeroe: string):Observable<Heroe>{
    return this.http.get<Heroe>('https://superheroapi.com/api/2029331647243669/'+ idHeroe);
  }

  buscarHeroe(nombre: string):Observable<Search>{
    return this.http.get<Search>('https://superheroapi.com/api/2029331647243669/search/'+ nombre);
  }

  
}
