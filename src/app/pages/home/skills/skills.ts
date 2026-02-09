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
    { name: 'CSS', icon: 'images/skills/css.png' },


  ];

}
