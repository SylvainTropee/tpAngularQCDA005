import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarbonFootprint} from './components/carbon-footprint/carbon-footprint';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarbonFootprint, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tpAngularQCDA005');
}
