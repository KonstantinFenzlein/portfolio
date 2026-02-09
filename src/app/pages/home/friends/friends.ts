import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.html',
  styleUrl: './friends.scss'
})
export class Friends {


  testimonials = [
    {
      name: 'Beispiel Name',
      project: 'Projekt Join',
      text: 'Konstantin ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt übersichtlichen Code. Ich kann ihn als Kollegen wärmstens empfehlen.'
    },
    {
      name: 'Balu Bär',
      project: 'Projekt Pokedex',
      text: 'Konstantin ist ein zuverlässiger Teamplayer und kann mit Stress umgehen. Strukturiertes Arbeiten und übersichtlicher Code.'
    },
    {
      name: 'Tim Tom',
      project: 'Project Pollo Loco',
      text: 'Konstantin hat in Zusammenarbeit mit dem Team Inhalte entwickelt, formatiert und geliefert. Er ist eine zuverlässige und freundliche Person.'
    }
  ];

}
