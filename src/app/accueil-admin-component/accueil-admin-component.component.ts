import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser, CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; 
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { CountService, DashboardStats } from '../services/count.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './accueil-admin-component.component.html',
  styleUrls: ['./accueil-admin-component.component.css']
})
export class AccueilAdminComponent implements OnInit {
  
  isBrowser: boolean;
  dashboardStats: DashboardStats | null = null;

  // État des modales
  showAgentModal = false;
  showSiteModal = false;

  agentForm!: FormGroup;   // Formulaire agent
  siteForm!: FormGroup;    // Formulaire site

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private countService: CountService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // N’appeler l’API que côté navigateur
    if (this.isBrowser) {
      this.fetchDashboardStats();
    }

    // Création du formulaire agent
    this.agentForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      telephone: ['', Validators.required],
      agence: ['', Validators.required],
      role: ['ROLE_AGENT']
    });

    // Création du formulaire site
    this.siteForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      localisation: ['', Validators.required],
      photo: [null, Validators.required],
      climat: ['', Validators.required],
    });
  }

  // Soumission du formulaire agent
  submitAgent(): void {
    if (this.agentForm.invalid) {
      console.log('Formulaire agent invalide');
      return;
    }

    this.http.post("http://localhost:8083/api/agent/create", this.agentForm.value)
      .subscribe({
        next: (res) => {
          console.log("Agent créé avec succès:", res);
          this.closeAgentModal();
          this.agentForm.reset();
        },
        error: (err) => {
          console.error("Erreur lors de la création de l’agent:", err);
        }
      });
  }

  // Soumission du formulaire site
  submitSite(): void {
    if (this.siteForm.invalid) {
      console.log("Formulaire site invalide");
      return;
    }

    this.http.post("http://localhost:8083/api/admin/site/create", this.siteForm.value)
      .subscribe({
        next: (res) => {
          console.log("Site créé avec succès:", res);
          this.closeSiteModal();
          this.siteForm.reset();
        },
        error: (err) => {
          console.error("Erreur lors de la création du site:", err);
        }
      });
  }

  // Récupération des stats
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

  // Données du graphique
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

  // Mise à jour du graphique après fetch
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

  // Méthodes modale agent
  openAgentModal(): void {
    this.showAgentModal = true;
  }

  closeAgentModal(): void {
    this.showAgentModal = false;
  }

  // Méthodes modale site
  openSiteModal(): void {
    this.showSiteModal = true;
  }
  
  closeSiteModal(): void {
    this.showSiteModal = false;
  }
}
