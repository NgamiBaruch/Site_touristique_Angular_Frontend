import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-service-component',
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css'
})
export class ServiceComponent {

}
