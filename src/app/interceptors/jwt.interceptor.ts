// src/app/interceptors/jwt.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core'; // CORRECTION : 'inject' vient de @angular/core
import { AuthService } from '../services/auth.service'; // Importez le service

// Liste des URLS pour lesquelles le token NE DOIT PAS être ajouté
const EXCLUDED_URLS = [
    'http://localhost:8083/api/auth/login', 
    'http://localhost:8083/api/auth/register' 
];

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
    // Injecter l'AuthService (disponible avec HttpInterceptorFn)
    const authService = inject(AuthService);
    
    // Utiliser la méthode getToken() du service pour une récupération compatible SSR
    const token = authService.getToken(); 
    
    // 💡 1. VÉRIFICATION : Si l'URL fait partie des URLS exclues
    const isExcluded = EXCLUDED_URLS.some(url => req.url.includes(url));

    // 💡 2. LOGIQUE : N'ajouter le token que s'il existe ET que l'URL n'est PAS exclue
    if (token && !isExcluded) {
        // Log de succès : Ceci confirmera que le token est maintenant trouvé.
        console.log('JwtInterceptor: Token trouvé via AuthService. Ajout de l\'en-tête Authorization.');
        
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    } else if (!isExcluded) {
        // Log d'échec : Si vous voyez toujours 'false', le token n'est pas dans localStorage.
        console.log(`JwtInterceptor: PAS d\'en-tête ajouté. Token présent: ${!!token}, Exclue: ${isExcluded}`);
    }
    
    return next(req);
};
