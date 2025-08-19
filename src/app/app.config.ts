import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LOCALE_ID } from '@angular/core';

// 1. Importar los datos de localización para 'es'
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// 2. Registrar los datos de localización
registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // 3. Provee el LOCALE_ID para que la aplicación use el formato español
    { provide: LOCALE_ID, useValue: 'es' }
  ]
};
