import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './../Model/Contact_Model/Contact.Model';
import { environment } from 'src/Environement';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl =environment.AddContact;
  constructor(private http: HttpClient) { }

  createContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.apiUrl}/Contact/PostContact`, contact);
}
}
