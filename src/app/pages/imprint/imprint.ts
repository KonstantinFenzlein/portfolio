import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss'
})
export class ImprintComponent {
  // Wir brauchen hier erstmal keine Logik
  // (Standardmäßig scrollt der Browser beim Seitenwechsel aber nicht immer nach oben.
  // Das fixen wir gleich global für die ganze App, wenn du magst.)
}
