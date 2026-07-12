import { Component } from '@angular/core';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  constructor(public i18n: I18nService) {}
}
