import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://challenge-react.alkemy.org';

  constructor( private http: HttpClient) { }





  // ERROR 401 UNAUTHORIZED 
  // VER QUÉ ESTOY HACIENDO MAL - COMPROBAR DATOS
  
  login(){

    let body: any = {
      email: 'challenge@alkemy.org', password: 'angular'
    }

    return this.http.get( 'http://challenge-react.alkemy.org' , body    );

  }
}
