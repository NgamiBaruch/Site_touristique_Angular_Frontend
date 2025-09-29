import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser, CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; 
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { CountService, DashboardStats } from '../services/count.service';

// Enregistrement global de la locale 'fr' pour le pipe currency
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-accueil-admin',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    BaseChartDirective,
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './accueil-admin-component.component.html',
  styleUrls: ['./accueil-admin-component.component.css']
})
export class AccueilAdminComponent implements OnInit {
  
  isBrowser: boolean;
  dashboardStats: DashboardStats | null = null;

  // État de la modale
  showAgentModal = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private countService: CountService,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    //  N’appeler l’API que côté navigateur
    if (this.isBrowser) {
      this.fetchDashboardStats();
    }
  }

  //  Récupération des stats
  fetchDashboardStats(): void {
    this.countService.getDashboardStats().subscribe({
      next: (data) => {
        this.dashboardStats = data;
        this.updateChartData();

        // Correction NG0100 : décaler la détection de changement
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des stats:', error);
      }
    });
  }

  //  Données du graphique
  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Clients', 'Agents', 'Réservations'],
    datasets: [
      { 
        data: [], 
        backgroundColor: ['#42A5F5', '#257554', '#FFA726'] 
      }
    ]
  };

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } }
  };

  //  Mise à jour du graphique après fetch
  updateChartData(): void {
    if (this.dashboardStats) {
      this.pieChartData = {
        labels: ['Clients', 'Agents', 'Réservations'],
        datasets: [{
          data: [
            this.dashboardStats.totalClients,
            this.dashboardStats.totalAgents,
            this.dashboardStats.totalReservations
          ],
          backgroundColor: ['#42A5F5', '#257554', '#FFA726']
        }]
      };
    }
  }

  // Méthodes modale
  openAgentModal(): void {
    this.showAgentModal = true;
  }

  closeAgentModal(): void {
    this.showAgentModal = false;
  }
}
