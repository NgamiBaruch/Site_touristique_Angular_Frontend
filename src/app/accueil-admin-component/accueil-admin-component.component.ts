import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-accueil-admin',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    BaseChartDirective,
    CommonModule
  ],
  templateUrl: './accueil-admin-component.component.html',
  styleUrls: ['./accueil-admin-component.component.css']
})
export class AccueilAdminComponentComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Clients', 'Agents', 'Réservations'],
    datasets: [{ data: [1250, 85, 780], backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }]
  };

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } }
  };
}
