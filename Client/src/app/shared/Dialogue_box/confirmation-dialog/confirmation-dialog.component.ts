import { Component,Inject,ViewChild  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef ,MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @ViewChild('myModalContent') myModalContent: any;
 

  constructor( public dialogRef: MatDialogRef<ConfirmationDialogComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any ) {}

    // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //   this.dialog.open(ConfirmationDialogComponent, {
    //     width: '250px',
    //     enterAnimationDuration,
    //     exitAnimationDuration,
    //   });
    // }
    // openModal(content: any) {
    //   this.modalService.open(content, { ariaLabelledBy: 'modal-title', centered: true });
    // }
    
    // openModal(content: any) {
    //   this.modalService.open(content); // Utilisez le service pour ouvrir le modèle
    // }
     onConfirm(): void {
    this.dialogRef.close(true);
    }
    

     onCancel(): void {
       this.dialogRef.close(false);
     }

}
