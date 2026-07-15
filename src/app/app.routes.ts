import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint').then(m => m.ImprintComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.PrivacyComponent)
  },
  { path: '**', redirectTo: '' }
];
