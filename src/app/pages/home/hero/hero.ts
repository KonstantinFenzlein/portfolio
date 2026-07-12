import { Component } from '@angular/core';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(public i18n: I18nService) {}
}
