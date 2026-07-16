import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { Navbar } from './core/components/navbar/navbar';
import { About } from './features/home/about/about';
import { Skills } from './features/home/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero,Navbar,About,Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
