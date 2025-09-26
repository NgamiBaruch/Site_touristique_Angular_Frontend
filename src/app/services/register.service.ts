import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface pour le corps de la requête que le backend UserRequestDTO attend
// Ces noms doivent correspondre aux propriétés attendues par le backend
export interface UserRegistrationRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  preference: string; 
  role: string;
  // ou tout autre champ que le backend attend
  // Note: Si le backend attend un champ pour le rôle ou autre, ajoutez-le ici.
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // Assurez-vous que le port correspond à votre application Spring Boot
  private apiUrl = 'http://localhost:8083/api/auth/register'; 

  constructor(private http: HttpClient) { }

  /**
   * Envoie les données d'inscription au backend.
   * Le backend attend un corps JSON (UserRequestDTO) et renvoie un UserResponseDTO.
   */
  register(request: UserRegistrationRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }
}