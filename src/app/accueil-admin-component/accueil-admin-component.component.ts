import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-accueil-admin-component',
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './accueil-admin-component.component.html',
  styleUrl: './accueil-admin-component.component.css'
})
export class AccueilAdminComponentComponent {

}
