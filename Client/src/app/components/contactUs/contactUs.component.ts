import { Component } from '@angular/core';
import { Contact } from 'src/Model/Contact_Model/Contact.Model';
import { ContactService } from 'src/Service/contact.service';
import { State } from 'src/Model/Contact_Model/State.Enum';

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})
export class ContactUsComponent {
  public contact: Contact;
   
  constructor(private contactService: ContactService) {
    this.contact = new Contact('', '', '', '',State.UnArchived); 

   
  }

  createContact() {
    this.contact.state = State.UnArchived; // affecter la valeur de state 
    this.contactService.createContact(this.contact).subscribe(
      response => {
        console.log(this.contact.state);
        console.log(response); // Gérez la réponse de l'API
      },
      error => {
        console.error(error); // Gérez l'erreur de l'API
      }
    );
  }


}
