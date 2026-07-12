import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {

  skills = [
    { name: 'Angular', icon: '/images/skills/angular.png' },
    { name: 'TypeScript', icon: '/images/skills/typescript.png' },
    { name: 'JavaScript', icon: '/images/skills/javascript.png' },
    { name: 'HTML', icon: '/images/skills/html.png' },
    { name: 'CSS', icon: '/images/skills/css.png' },
  ];

  constructor(public i18n: I18nService) {}
}
