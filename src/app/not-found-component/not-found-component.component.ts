import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-not-found-component',
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './not-found-component.component.html',
  styleUrl: './not-found-component.component.css'
})
export class NotFoundComponentComponent {

}
