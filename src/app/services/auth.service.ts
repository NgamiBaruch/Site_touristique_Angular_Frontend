// src/app/services/auth.service.ts
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8083/api/auth';
  private userRole: string | null = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object // Injection du PLATFORM_ID
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          if (response && response.token) {
            // Ne pas accéder à localStorage si on n'est pas sur un navigateur
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('username', response.username);
            }
            this.decodeTokenAndStoreRole(response.token);
          }
        })
      );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    // Vérifier si on est sur un navigateur avant d'accéder à localStorage
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (token) {
        this.decodeTokenAndStoreRole(token);
        return true;
      }
    }
    return false;
  }

  getToken(): string | null {
    // Vérifier si on est sur un navigateur avant d'accéder à localStorage
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null; // Retourner null si on est sur le serveur
  }

  hasRole(role: string): boolean {
    if (isPlatformBrowser(this.platformId) && !this.userRole) {
      const token = this.getToken();
      if (token) {
        this.decodeTokenAndStoreRole(token);
      }
    }
    return this.userRole === role;
  }

  private decodeTokenAndStoreRole(token: string): void {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const decoded: any = jwtDecode(token);
        this.userRole = decoded.roles[0].authority;
      }
    } catch (error) {
      console.error('Erreur lors du décodage du token :', error);
      this.userRole = null;
    }
  }
}