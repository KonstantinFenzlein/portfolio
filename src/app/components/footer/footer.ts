import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- WICHTIG

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // <--- Hier anmelden
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {}
