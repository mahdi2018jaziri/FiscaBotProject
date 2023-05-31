import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Material.Module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';
import { RessourceLegaleComponent } from './components/ressource-legale/ressource-legale.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationDialogComponent } from './shared/Dialogue_box/confirmation-dialog/confirmation-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RevueFiscaleEyComponent } from './components/Revue_Fiscale/revue-fiscale-ey/revue-fiscale-ey.component'; 







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    ScrollButtonComponent,
    RessourceLegaleComponent,
    ConfirmationDialogComponent,
    RevueFiscaleEyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
