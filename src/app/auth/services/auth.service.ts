import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://challenge-react.alkemy.org';

  constructor( private http: HttpClient) { }





  // ERROR 401 UNAUTHORIZED
  // VER SI ESTOY HACIENDO MAL EL POST - COMPROBAR DATOS
  
  login(){

    return this.http.post( 'http://challenge-react.alkemy.org' , { email:'challenge@alkemy.org', password: 'angular' } );

  }
}
