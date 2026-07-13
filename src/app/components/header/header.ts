import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnDestroy {

  isHidden = false;
  lastScrollTop = 0;
  private scrollTimeout: any;

  constructor(public i18n: I18nService) {}

  switchLanguage(lang: 'DE' | 'EN') {
    this.i18n.setLanguage(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }

      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, 50);
  }

  ngOnDestroy() {
    clearTimeout(this.scrollTimeout);
  }
}
