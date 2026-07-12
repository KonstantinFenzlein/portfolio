import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { SkillsComponent } from './skills/skills';
import { Friends } from './friends/friends';
import { Contact } from './contact/contact';
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
    PortfolioComponent,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
