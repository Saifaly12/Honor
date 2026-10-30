import { Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideBuilding,
  LucideCheck,
  LucideCircleCheck,
  LucideCopy,
  LucideCreditCard,
  LucideMessageSquare,
  LucideTruck,
  LucideX,
} from '@lucide/angular';
import { OrderFormData, Phone } from '../../types';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-order-modal',
  imports: [
    FormsModule,
    DecimalPipe,
    LucideBuilding,
    LucideCheck,
    LucideCircleCheck,
    LucideCopy,
    LucideCreditCard,
    LucideMessageSquare,
    LucideTruck,
    LucideX,
  ],
  templateUrl: './order-modal.html',
  styleUrl: './order-modal.css',
})
export class OrderModal {
  state = inject(AppState);

  phone = input.required<Phone>();

  // اختيارات الطلب
  selectedColor = linkedSignal(() => this.phone().colors[0]);
  selectedVariant = linkedSignal(() => this.phone().variants[0]);
  quantity = signal(1);

  fullName = signal('');
  phoneNumber = signal('');
  city = signal('القاهرة');
  address = signal('');
  paymentMethod = signal<OrderFormData['paymentMethod']>('cod_inspection');

  copied = signal(false);
  orderConfirmed = signal(false);
  orderNumber = signal('');

  totalPrice = computed(() => this.selectedVariant().price * this.quantity());

  // نص رسالة الواتساب
  whatsappMessage = computed(() => {
    const phone = this.phone();
    const variant = this.selectedVariant();
    return `السلام عليكم، أرغب في طلب:
📱 الجهاز: ${phone.name}
🎨 اللون: ${this.selectedColor().name}
💾 السعة والذاكرة: ${variant.storage} + ${variant.ram}
🔢 الكمية: ${this.quantity()}
💰 الإجمالي: $${this.totalPrice().toLocaleString()}`;
  });

  close() {
    this.state.selectedPhoneForOrder.set(null);
  }

  increase() {
    this.quantity.update((q) => q + 1);
  }

  decrease() {
    this.quantity.update((q) => Math.max(1, q - 1));
  }

  sendWhatsApp() {
    const msg = encodeURIComponent(this.whatsappMessage());
    window.open(`https://api.whatsapp.com/send?phone=201028535623&text=${msg}`, '_blank');
  }

  confirmOrder() {
    if (!this.fullName() || !this.phoneNumber()) {
      alert('يرجى كتابة الاسم ورقم الهاتف لإتمام تسجيل الطلب الرسمي');
      return;
    }
    this.orderNumber.set(`HN-${Math.floor(100000 + Math.random() * 900000)}`);
    this.orderConfirmed.set(true);
  }

  copyOrderText() {
    navigator.clipboard.writeText(this.whatsappMessage());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
