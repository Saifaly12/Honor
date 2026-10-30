import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideScale } from '@lucide/angular';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, LucideScale],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  state = inject(AppState);

  links = [
    { path: '/', label: 'الرئيسية' },
    { path: '/latest', label: 'الجديد لدينا' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  desktopActive = 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs';
  desktopIdle = 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white';
  mobileActive = 'bg-black text-white dark:bg-white dark:text-black';
  mobileIdle =
    'text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700';
}
