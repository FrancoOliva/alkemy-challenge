import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  // 

  getHeroe(){
    return this.http.get('https://superheroapi.com/api/2029331647243669/4');
  }
}
