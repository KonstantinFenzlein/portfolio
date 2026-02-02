import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// selbstgebaute Komponente
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  // Header und Footer benutzen
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
