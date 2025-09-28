import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser, CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // Importation des données de locale française
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
    CurrencyPipe // Assurez-vous que CurrencyPipe est disponible pour le template
 ],
 templateUrl: './accueil-admin-component.component.html',
 styleUrls: ['./accueil-admin-component.component.css']
})
export class AccueilAdminComponentComponent implements OnInit {
 isBrowser: boolean;
 dashboardStats: DashboardStats | null = null;

 constructor(
   @Inject(PLATFORM_ID) private platformId: Object,
   private countService: CountService,
    private cdr: ChangeDetectorRef // Injection du ChangeDetectorRef
 ) {
 this.isBrowser = isPlatformBrowser(platformId);
 }

 ngOnInit(): void {
 // CORRECTION SSR : N'appeler l'API que si nous sommes dans le navigateur (après l'hydratation)
 if (this.isBrowser) {
 this.fetchDashboardStats();
 }
 }

 fetchDashboardStats(): void {
 this.countService.getDashboardStats().subscribe({
 next: (data) => {
 this.dashboardStats = data;
 this.updateChartData(); // Update charts after fetching data

        // CORRECTION NG0100 : Décaler la détection de changement au prochain cycle
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 0);
 },
 error: (error) => {
 console.error('Error fetching dashboard stats:', error);
 // Handle error (e.g., display a message to the user)
 }
 });
 }

 // Properties for charts - initialize with empty or default values
 pieChartData: ChartConfiguration<'pie'>['data'] = {
 labels: ['Clients', 'Agents', 'Réservations'],
 datasets: [{ data: [], backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }]
 };

 pieChartOptions: ChartConfiguration<'pie'>['options'] = {
 responsive: true,
 plugins: { legend: { position: 'top' } }
 };

 // Method to update chart data dynamically
 updateChartData(): void {
 if (this.dashboardStats) {
 // Mise à jour des données du graphique avec les valeurs du backend
 this.pieChartData = {
 labels: ['Clients', 'Agents', 'Réservations'],
 datasets: [{
 data: [
 this.dashboardStats.totalClients,
 this.dashboardStats.totalAgents,
 this.dashboardStats.totalReservations
 ],
 backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
 }]
 };
 }
 }
}