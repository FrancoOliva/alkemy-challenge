import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  desconectar(){
    
    this.authService.logout();
    this.router.navigate(['./login']);
    
  }

}
