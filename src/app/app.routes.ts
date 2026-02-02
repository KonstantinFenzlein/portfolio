import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ImprintComponent } from './pages/imprint/imprint';
import { PrivacyComponent } from './pages/privacy/privacy';

export const routes: Routes = [
  // Wenn die URL leer ist (Startseite), zeige HomeComponent
  { path: '', component: HomeComponent },

  // Wenn URL .../imprint ist, zeige ImprintComponent
  { path: 'imprint', component: ImprintComponent },

  // Wenn URL .../privacy ist, zeige PrivacyComponent
  { path: 'privacy', component: PrivacyComponent },

  // Wenn irgendein Quatsch eingegeben wird, leite zur Startseite um
  { path: '**', redirectTo: '' }
];
