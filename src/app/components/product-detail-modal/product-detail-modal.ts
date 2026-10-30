import { Component, inject, input, linkedSignal } from '@angular/core';
import {
  LucideBatteryCharging,
  LucideCamera,
  LucideCpu,
  LucideShieldCheck,
  LucideShoppingBag,
  LucideSparkles,
  LucideTv,
  LucideX,
} from '@lucide/angular';
import { Phone } from '../../types';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-product-detail-modal',
  imports: [
    LucideBatteryCharging,
    LucideCamera,
    LucideCpu,
    LucideShieldCheck,
    LucideShoppingBag,
    LucideSparkles,
    LucideTv,
    LucideX,
  ],
  templateUrl: './product-detail-modal.html',
  styleUrl: './product-detail-modal.css',
})
export class ProductDetailModal {
  state = inject(AppState);

  phone = input.required<Phone>();

  // اللون والسعة المختارين. أول ما الهاتف يتغير بيرجعوا لأول اختيار
  activeColor = linkedSignal(() => this.phone().colors[0]);
  activeVariant = linkedSignal(() => this.phone().variants[0]);

  close() {
    this.state.selectedPhoneForDetail.set(null);
  }

  orderNow() {
    const phone = this.phone();
    this.close();
    this.state.selectedPhoneForOrder.set(phone);
  }
}
