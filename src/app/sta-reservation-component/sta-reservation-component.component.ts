import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sta-reservation-component',
  imports: [NavigationComponent, FooterComponent, RouterLink],
  templateUrl: './sta-reservation-component.component.html',
  styleUrl: './sta-reservation-component.component.css'
})
export class StaReservationComponentComponent {

}
