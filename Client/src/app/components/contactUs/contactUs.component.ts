import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/Model/Contact_Model/Contact.Model';
import { ContactService } from 'src/Service/contact.service';
import { State } from 'src/Model/Contact_Model/State.Enum';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationDialogComponent } from 'src/app/shared/Dialogue_box/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})
export class ContactUsComponent {
  public contact: Contact;
  isLoading: boolean = false;

  constructor(private contactService: ContactService, private dialog: MatDialog) {
    this.contact = new Contact('', '', '', '', State.UnArchived);
    

  }
  // openConfirmationDialog(): void {
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     width: '250px',
  //     data: { message: 'Confirmez-vous l\'ajout de ces données ?' }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       this.isLoading = true;

  //       // Effectuez ici votre logique d'ajout des données

  //       // Après l'ajout, vous pouvez arrêter le spinner
  //       this.isLoading = false;
  //     }
  //   });
  // }

  createContact() {
    this.contact.state = State.UnArchived; // affecter la valeur de state 
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Confirmez-vous l\'ajout de ces données ?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.isLoading = true;
        this.contactService.createContact(this.contact).subscribe(
          response => {
            console.log(this.contact.state);
            console.log(response); // Gérez la réponse de l'API

            // Après l'ajout,arrêter le spinner
            this.isLoading = false;
          },
          error => {
            console.error(error); // Gérez l'erreur de l'API
            this.isLoading = false;

          }
        );
      }
    });

  }
}
