import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,

      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Das sorgt dafür, dass man bei neuer Seite (z.B. Impressum) immer OBEN startet.

        anchorScrolling: 'enabled', // Das sorgt dafür, dass Links wie "Home -> #contact" weich zum Abschnitt scrollen.
      }),
    ),
  ],
};
