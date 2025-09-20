import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));