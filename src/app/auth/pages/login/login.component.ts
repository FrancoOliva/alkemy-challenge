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
    email: ['challenge@alkemy.org', Validators.required],
    password: ['react', Validators.required ]
  });

  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }

  ingresar(){

    if( this.loginForm.valid ){
      
      this.authService.login(this.loginForm).subscribe( console.log );

      // Esto debería ir dentro de la petición http
      // si el usuario es correcto
      //this.router.navigate(['/heroes/']);

    }


  }

}
