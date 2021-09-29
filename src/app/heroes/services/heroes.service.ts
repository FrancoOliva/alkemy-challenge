import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { Response } from '../interfaces/response.interface';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {



  constructor( private http: HttpClient ) { }


  buscarHeroeID(idHeroe: string):Observable<Heroe>{
    return this.http.get<Heroe>('https://superheroapi.com/api/2029331647243669/'+ idHeroe);
  }

  buscarHeroe(nombre: string){
    return this.http.get<Response>('https://superheroapi.com/api/2029331647243669/search/'+ nombre);
  }

  
}
