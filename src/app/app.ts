import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideMessageSquare, LucideMoon, LucideSun } from '@lucide/angular';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { AppState } from './services/app-state';
import { ProductDetailModal } from './components/product-detail-modal/product-detail-modal';
import { CompareModal } from './components/compare-modal/compare-modal';
import { OrderModal } from './components/order-modal/order-modal';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    LucideMessageSquare,
    LucideMoon,
    LucideSun,
    ProductDetailModal,
    CompareModal,
    OrderModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  state = inject(AppState);
}
