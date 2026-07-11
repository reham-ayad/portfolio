import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { Navbar } from './core/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
