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
  
  login(formLogin: FormGroup){

    let usuario: any = {
      email: formLogin.controls['email'].value,
      password: formLogin.controls['password'].value
    }
    
    
    // FUNCIONA - Estaba mal la clave del PDF
    // usuario: 'challenge@alkemy.org'
    // password: 'react'
   return this.http.post( 'http://challenge-react.alkemy.org', usuario );

  }
}
