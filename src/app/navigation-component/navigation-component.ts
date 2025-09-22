import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-component.html',
  styleUrls: ['./navigation-component.css']
})
export class NavigationComponent {
   constructor(public authService: AuthService) {} // Rendez authService public
    isCollapsed = true;
    onLinkClick() {
    this.isCollapsed = true;
    console.log(this.isCollapsed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }