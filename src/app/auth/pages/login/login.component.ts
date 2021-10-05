import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorApi: string = '';

  mensajeError: string = '';

  alertEmail: boolean = false;
  alertPassword: boolean = false;
  alertApi: boolean = false;

  cargando: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: ['challenge@alkemy.org', Validators.required],
    password: ['react', Validators.required ]
  });

  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {

    

  }

  ingresar(){

    this.escribiendo();

    if( this.loginForm.status == "VALID" ){

      this.cargando = true;
      
      this.authService.login(this.loginForm).toPromise().then( resp =>{


        if( resp.token ){
          
          this.router.navigate(['/heroes/']);
        }

      }).catch( HttpErrorResponse => {

        // console.log(HttpErrorResponse);
        // console.log(HttpErrorResponse.error.error);

        this.errorApi = HttpErrorResponse.error.error;

        this.mensajeError = this.errorApi;
        this.alertApi = true;

        this.cargando = false;
        
      });

    } 

    if( this.loginForm.status == "INVALID" ){

      let errorEmail = this.loginForm.controls['email'].errors;
      let errorPassword = this.loginForm.controls['password'].errors;

      if( errorEmail && errorPassword ){
        this.mensajeError = 'Los campos email y password deben estar completos.'
        this.alertPassword = true;
      } else if( errorEmail ){
        this.mensajeError = 'Ingrese un email.'
        this.alertEmail = true;
      } else {
        this.mensajeError = 'Ingrese un password.'
        this.alertPassword = true;
      }
    }
    
     

  }

  escribiendo(){
    this.alertEmail = false;
    this.alertPassword = false;
    this.alertApi = false;
  }

}
