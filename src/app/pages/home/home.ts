import { Component, inject } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Catalog } from '../../components/catalog/catalog';
import { AppState } from '../../services/app-state';
import { PHONES } from '../../data/phones';

@Component({
  selector: 'app-home',
  imports: [Hero, Catalog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  state = inject(AppState);

  scrollToCatalog() {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  quickOrder() {
    this.state.openQuickOrder(PHONES[0]);
  }
}
