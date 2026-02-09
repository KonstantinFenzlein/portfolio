import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- DEINE IMPORTS ---
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { SkillsComponent } from './skills/skills'; // Das hatten wir schon gefixt
import { Friends } from './friends/friends';
import { Contact } from './contact/contact';

// --- HIER IST DIE KORREKTUR ---
// FALSCH: import { Portfolio } from ...
// RICHTIG:
import { PortfolioComponent } from './portfolio/portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    AboutMe,
    SkillsComponent,
    Friends,
    PortfolioComponent, // <--- Auch hier unten den Namen anpassen!
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
