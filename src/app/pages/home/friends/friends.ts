import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.html',
  styleUrl: './friends.scss'
})
export class Friends {

  constructor(public i18n: I18nService) {}

  testimonials = [
    {
      name: 'Dein Name',
      project: 'Dein Projekt',
      text: 'Hier kannst du eine Empfehlung von einem Kollegen einfügen.'
    }
  ];

}
