import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import { LoginService } from 'src/LoginService/login-service';
import { Observer } from 'rxjs/internal/types';
import { LoginModel } from '../../LoginModel/login-model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent   {
  loginModel: LoginModel ;

  constructor(private authService: LoginService, private router: Router) { 
    this.loginModel = {
      email: '',
      password: '',
      rememberMe: false
    };
  }

  onSubmit() {
    this.authService.login(this.loginModel)
      .subscribe(data => {
        // Stockez le token retourné dans le local storage ou dans un service
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
        console.log("test");
      }, error => {
        // Gérer l'erreur
      });
      // Si les informations d'identification sont valides, naviguer vers le composant d'accueil
  }
  
}

