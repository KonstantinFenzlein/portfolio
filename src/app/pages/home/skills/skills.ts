import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Wichtig für Schleifen

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {

  // Das ist unsere Liste an Fähigkeiten.
  // Wenn ich später eine neue Fähigkeit lerne, füge ich sie einfach hier hinzu!
  skills = [
    { name: 'Angular', icon: 'images/skills/angular.png' },
    { name: 'TypeScript', icon: 'images/skills/typescript.png' },
    { name: 'JavaScript', icon: 'images/skills/javascript.png' },
    { name: 'HTML', icon: 'images/skills/html.png' },
    { name: 'Scrum', icon: 'images/skills/scrum.png' },
    { name: 'Firebase', icon: 'images/skills/firebase.png' },
    { name: 'Git', icon: 'images/skills/git.png' },
    { name: 'CSS', icon: 'images/skills/css.png' },
    { name: 'REST-API', icon: 'images/skills/rest-api.png' },
    { name: 'Material Design', icon: 'images/skills/material.png' },
  ];

}
