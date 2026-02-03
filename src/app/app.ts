import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// selbstgebaute Komponente
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // Header und Footer benutzen
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
