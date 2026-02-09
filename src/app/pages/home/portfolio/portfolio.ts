import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {

  projects = [
    {
      title: 'Join',
      image: 'images/join.png',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      githubLink: 'https://github.com/KonstantinFenzlein/join' // Mein echter Link
    },
    {
      title: 'Pollo Loco',
      image: 'images/polo-loco.png',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Springen, rennen und werfen – ein objektorientiertes Spiel. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um die verrückte Henne zu besiegen.',
      githubLink: 'https://github.com/KonstantinFenzlein/pollo-loco'
    }
  ];

}
