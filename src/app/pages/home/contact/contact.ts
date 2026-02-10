import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Wichtig für input Felder
import { RouterLink } from '@angular/router'; // Für den Link zum Datenschutz

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  // Variablen für das Formular (können wir später für E-Mail-Versand nutzen)
  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  };

  // Funktion für den Pfeil nach oben
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
