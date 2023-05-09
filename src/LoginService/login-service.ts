import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../LoginModel/login-model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

   constructor(private http: HttpClient) { }
   login(loginViewModel: LoginModel): Observable<any>
   {
    const url = 'https://localhost:7056/api/Account/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, loginViewModel);
  } 
}
