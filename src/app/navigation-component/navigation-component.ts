import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-component.html',
  styleUrls: ['./navigation-component.css']
})
export class NavigationComponent { }