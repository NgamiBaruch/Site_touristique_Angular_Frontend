import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation-component/navigation-component";
import { FooterComponent } from "./footer-component/footer-component";
import { MiddleComponent } from "./middle-component/middle-component";
import { CardComponent } from "./card-component/card-component";
import { StaReservationComponentComponent } from "./sta-reservation-component/sta-reservation-component.component";



@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FooterComponent, MiddleComponent, CardComponent, StaReservationComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DEMOANGULAR');
}
