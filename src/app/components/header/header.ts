import { Component, HostListener } from '@angular/core'; // HostListener hinzufügen
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // CommonModule wichtig für ngClass
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  isHidden = false; // Steuert, ob der Header weg ist
  lastScrollTop = 0; // Merkt sich die letzte Position

  activeLang = 'DE'; //Standardmäßig auf 'DE' setzen

// NEU: Funktion zum Umschalten (später für Übersetzung wichtig)
  switchLanguage(lang: string) {
    this.activeLang = lang;
    // Hier könnte später stehen: translateService.use(lang);
  }
  
  // Dieser "Zuhörer" feuert jedes Mal, wenn gescrollt wird
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Wenn wir weiter als 100px unten sind UND nach unten scrollen -> Verstecken
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isHidden = true;
    } else {
      // Wenn wir nach oben scrollen -> Zeigen
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Negative Werte verhindern
  }
}
