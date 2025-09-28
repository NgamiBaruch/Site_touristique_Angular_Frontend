import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the structure of the response map for better type safety
export interface DashboardStats {
  totalUtilisateurs: number;
  totalClients: number;
  totalAgents: number;
  totalAdmins: number;
  totalSites: number;
  totalServices: number;
  totalReservations: number;
  totalPaiements: number;
  totalRevenus: number;
}

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private apiUrl = 'http://localhost:8083/api/admin/dashboard'; // Adjust the base URL if necessary

  constructor(private http: HttpClient) { }

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(this.apiUrl);
  }
}