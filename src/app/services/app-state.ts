import { Injectable, signal, computed, effect } from '@angular/core';
import { Phone } from '../types';

@Injectable({ providedIn: 'root' })
export class AppState {
  comparedPhones = signal<Phone[]>([]);
  compareCount = computed(() => this.comparedPhones().length);
  isCompareOpen = signal(false);

  selectedPhoneForDetail = signal<Phone | null>(null);
  selectedPhoneForOrder = signal<Phone | null>(null);

  isDarkMode = signal<boolean>(this.loadTheme());

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('honor_theme', dark ? 'dark' : 'light');
    });
  }

  private loadTheme(): boolean {
    const saved = localStorage.getItem('honor_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleDarkMode() {
    this.isDarkMode.update((v) => !v);
  }

  toggleCompare(phone: Phone) {
    const list = this.comparedPhones();
    if (list.some((p) => p.id === phone.id)) {
      this.comparedPhones.set(list.filter((p) => p.id !== phone.id));
    } else if (list.length >= 3) {
      alert('يمكنك مقارنة حتى 3 أجهزة كحد أقصى في نفس الوقت');
    } else {
      this.comparedPhones.set([...list, phone]);
    }
  }

  removeFromCompare(phoneId: string) {
    this.comparedPhones.update((list) => list.filter((p) => p.id !== phoneId));
  }

  openQuickOrder(firstPhone: Phone) {
    this.selectedPhoneForOrder.set(firstPhone);
  }
}
