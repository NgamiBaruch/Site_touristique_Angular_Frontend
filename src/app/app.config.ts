import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// 1. Importez withInterceptors ici
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'; 

import { routes } from './app.routes';
// 2. Importez la fonction d'intercepteur
import { JwtInterceptor } from './interceptors/jwt.interceptor'; 

export const appConfig: ApplicationConfig = {

 providers: [
  provideBrowserGlobalErrorListeners(),
  provideZonelessChangeDetection(),
  provideRouter(routes), 
  provideClientHydration(withEventReplay()),
  // 3. Enregistrez l'intercepteur dans provideHttpClient
  provideHttpClient(withFetch(), withInterceptors([JwtInterceptor]))
 ]

};
