import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://challenge-react.alkemy.org';

  constructor( private http: HttpClient) { }





  // ERROR 401 UNAUTHORIZED 
  // VER QUÉ ESTOY HACIENDO MAL - COMPROBAR DATOS
  
  login(form: FormGroup){

    

   // return this.http.get( 'http://challenge-react.alkemy.org' );

  }
}
