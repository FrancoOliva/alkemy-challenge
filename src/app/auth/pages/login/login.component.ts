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

  loginForm: FormGroup = this.fb.group({
    email: ['challenge@alkemy.org', Validators.required],
    password: ['react', Validators.required ]
  });

  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {

    console.log(this.loginForm);

  }

  ingresar(){

    if( this.loginForm.valid ){
      
      this.authService.login(this.loginForm).toPromise().then( resp =>{

        if( resp.token ){
          //console.log(resp.token);
          this.router.navigate(['/heroes/']);
        }


      }).catch( HttpErrorResponse => {

        // console.log(HttpErrorResponse);
        // console.log(HttpErrorResponse.error.error);

        this.errorApi = HttpErrorResponse.error.error;

        console.log('Error: ', this.errorApi);
        
      });

      

      

    } else if( this.loginForm.invalid && this.loginForm.touched ) {

      if( this.loginForm.controls['email'].errors ){
        console.log('COMPLETAR CAMPO EMAIL');
      } else if( this.loginForm.controls['password'].errors ){
        console.log('Completar campo password');
      }
    } else {
      console.log('Error: Campos incompletos.');
    }

    

     

  }

}
