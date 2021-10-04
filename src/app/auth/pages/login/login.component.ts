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

  loginForm: FormGroup = this.fb.group({
    email: ['franco@ejemplo.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]]
  });

  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }

  ingresar(){

    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    
    if( email == 'franco@ejemplo.com' && password == "12345678"){


      // Esto debería ir dentro de la petición http
      // si el usuario es correcto
      this.router.navigate(['/heroes/']);

    } else {
      console.log('El usuario ingresado no existe.');

     
    }

  }

}
