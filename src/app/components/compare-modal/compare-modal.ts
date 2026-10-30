import { Component, computed, inject } from '@angular/core';
import { LucideShoppingBag, LucideTrash2, LucideX } from '@lucide/angular';
import { Phone } from '../../types';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-compare-modal',
  imports: [LucideShoppingBag, LucideTrash2, LucideX],
  templateUrl: './compare-modal.html',
  styleUrl: './compare-modal.css',
})
export class CompareModal {
  state = inject(AppState);

  phones = this.state.comparedPhones;

  // عدد الأعمدة = عدد الهواتف + عمود العناوين
  gridCols = computed(() => `repeat(${this.phones().length + 1}, minmax(0, 1fr))`);

  // الصفوف البسيطة (نص واحد لكل هاتف)
  rows: { label: string; key: 'processor' | 'screen' | 'mainCamera' | 'durability' }[] = [
    { label: 'المعالج (Processor)', key: 'processor' },
    { label: 'الشاشة والعرض', key: 'screen' },
    { label: 'الكاميرا الرئيسية', key: 'mainCamera' },
    { label: 'المتانة ومقاومة الماء', key: 'durability' },
  ];

  close() {
    this.state.isCompareOpen.set(false);
  }

  orderNow(phone: Phone) {
    this.close();
    this.state.selectedPhoneForOrder.set(phone);
  }
}
