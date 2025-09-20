import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { ServiceComponent } from "../service-component/service-component";


@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.html',
  styleUrl: './middle-component.css',
  imports: [NavigationComponent, FooterComponent, ServiceComponent]
})
export class MiddleComponent {

}
