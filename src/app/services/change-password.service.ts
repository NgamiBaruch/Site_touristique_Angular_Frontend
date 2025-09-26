// src/app/services/change-password.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

// Interface pour la requête (pour la sécurité des types)
export interface ChangePasswordRequest {
  username: string;
  currentPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  private apiUrl = 'http://localhost:8083/api/auth/change-password';

  constructor(private http: HttpClient) {}

  /**
   * Envoie la requête de changement de mot de passe au backend.
   * NOTE: Le contrôleur Spring utilise @RequestParam, nous utilisons donc HttpParams.
   * Il est FORTEMENT recommandé de changer le backend pour utiliser un @RequestBody DTO.
   */
  changePassword(request: ChangePasswordRequest): Observable<any> {
    
    // Création des paramètres HTTP pour correspondre aux @RequestParam du backend
    let params = new HttpParams()
      .set('username', request.username)
      .set('currentPassword', request.currentPassword)
      .set('newPassword', request.newPassword);
      
    // Envoi d'une requête POST avec les paramètres dans l'URL (via la configuration d'Angular)
    // NOTE: Le corps de la requête est vide, les données sont dans les paramètres d'URL.
    return this.http.post<any>(this.apiUrl, null, { params });
  }
}