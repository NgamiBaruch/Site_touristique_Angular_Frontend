import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navigation-component.html',
  styleUrls: ['./navigation-component.css']
})
export class NavigationComponent {
    isCollapsed = true;
    onLinkClick() {
    this.isCollapsed = true;
    console.log(this.isCollapsed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }