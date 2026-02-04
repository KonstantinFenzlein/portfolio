import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { Friends } from './friends/friends';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    AboutMe,
    Skills,
    Portfolio,
    Friends,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
