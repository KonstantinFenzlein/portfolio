import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../services/i18n.service';

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
      image: '/images/join.png',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionDE: 'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      descriptionEN: 'Task manager inspired by the Kanban system. Create and organize tasks via drag & drop, assign users and categories.',
      githubLink: 'https://github.com/KonstantinFenzlein/join'
    },
    {
      title: 'Pollo Loco',
      image: '/images/polo-loco.png',
      techStack: 'JavaScript | HTML | CSS',
      descriptionDE: 'Springen, rennen und werfen – ein objektorientiertes Spiel. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um die verrückte Henne zu besiegen.',
      descriptionEN: 'Jump, run and throw – an object-oriented game. Help Pepe find coins and tabasco sauce to defeat the crazy chicken.',
      githubLink: 'https://github.com/KonstantinFenzlein/pollo-loco'
    }
  ];

  constructor(public i18n: I18nService) {}
}
