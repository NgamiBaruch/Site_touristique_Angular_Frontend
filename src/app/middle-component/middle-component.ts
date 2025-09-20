import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";


@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.html',
  styleUrl: './middle-component.css',
  imports: [NavigationComponent, FooterComponent]
})
export class MiddleComponent {

}
