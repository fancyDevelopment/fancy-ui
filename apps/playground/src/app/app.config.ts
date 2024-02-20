import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideIcons({heroUsers})
  ],
};
