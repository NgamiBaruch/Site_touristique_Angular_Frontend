// src/app/interceptors/jwt.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';

// Liste des URLS pour lesquelles le token NE DOIT PAS être ajouté
// Attention: Ces URLS doivent être les ENDPOINTS API, PAS les routes Angular
const EXCLUDED_URLS = [
    'http://localhost:8083/api/auth/login', 
    'http://localhost:8083/api/auth/register' 
    // Ajoutez d'autres URLs publiques si nécessaire
];

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');
    
    // 💡 1. VÉRIFICATION : Si l'URL fait partie des URLS exclues
    const isExcluded = EXCLUDED_URLS.some(url => req.url.includes(url));

    // 💡 2. LOGIQUE : N'ajouter le token que s'il existe ET que l'URL n'est PAS exclue
    if (token && !isExcluded) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    
    return next(req);
};