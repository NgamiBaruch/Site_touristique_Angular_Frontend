import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-apropos-component',
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './apropos-component.component.html',
  styleUrl: './apropos-component.component.css'
})
export class AproposComponentComponent {

}
