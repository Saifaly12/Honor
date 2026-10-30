import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Latest } from './pages/latest/latest';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'latest', component: Latest },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
