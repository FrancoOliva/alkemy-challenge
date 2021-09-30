import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response, Result } from '../interfaces/response.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {



  constructor( private http: HttpClient ) { }

  


  buscarHeroeID(idHeroe: string):Observable<Result>{
    return this.http.get<Result>('https://superheroapi.com/api/2029331647243669/'+ idHeroe);
  }

  buscarHeroe(nombre: string){
    return this.http.get<Response>('https://superheroapi.com/api/2029331647243669/search/'+ nombre);
  }

  
}
