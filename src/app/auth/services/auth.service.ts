import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Token } from '../interface/token.interface';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: Token | undefined;

  get token(){
    return {...this._token}
  }

  constructor( private http: HttpClient) { }

  verificarToken():Observable<boolean>{

    if( !localStorage.getItem('token') ){
      return of(false);
    }

    return of(true);

  }


  
  login(formLogin: FormGroup):Observable<Token>{

    let usuario: any = {
      email: formLogin.controls['email'].value,
      password: formLogin.controls['password'].value
    }
    
    
    // FUNCIONA - Estaba mal la clave del PDF
    // usuario: 'challenge@alkemy.org'
    // password: 'react'
   return this.http.post<Token>( 'http://challenge-react.alkemy.org', usuario )
          .pipe(
            tap( tokenApi => this._token = tokenApi ),
            tap( tokenApi => localStorage.setItem('token', tokenApi.token) )
          );

  }

  logout(){
    this._token = undefined;
    localStorage.removeItem('token');
  }
}
