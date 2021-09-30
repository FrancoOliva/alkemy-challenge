import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://challenge-react.alkemy.org/';

  constructor( private http: HttpClient) { }




  // ERRORES AL INTENTAR PETICIÓN POST
  // PENDIENTE BUSCAR FALLO
  login(){

    
  }
}
