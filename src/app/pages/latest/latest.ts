import { Component, inject } from '@angular/core';
import { LucideArrowLeft, LucideSparkles } from '@lucide/angular';
import { PHONES } from '../../data/phones';
import { Phone } from '../../types';
import { AppState } from '../../services/app-state';

const findPhone = (id: string) => PHONES.find((p) => p.id === id)!;

@Component({
  selector: 'app-latest',
  imports: [LucideArrowLeft, LucideSparkles],
  templateUrl: './latest.html',
  styleUrl: './latest.css',
})
export class Latest {
  state = inject(AppState);

  // الهاتف الرئيسي في الكارت الكبير
  magic7Pro = findPhone('magic-7-pro');

  // الكارتين الصغيرين
  highlights = [
    {
      phone: findPhone('magic-v3'),
      badge: 'إنجاز هندسي عالمي',
      badgeClass:
        'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800',
      note: 'سماكة 9.2 مم فقط',
      title: 'Honor Magic V3',
      description:
        'أنحف وأخف هاتف فولد في التاريخ. يمنحك تجربة شاشة حاسوب لوحي عملاقة في جيبك بوزن وسماكة الهواتف التقليدية تماماً.',
    },
    {
      phone: findPhone('honor-200-pro'),
      badge: 'سيد البورتريه العالمي',
      badgeClass:
        'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800',
      note: 'استوديو هاركورت باريس',
      title: 'Honor 200 Pro',
      description:
        'كاميرا استثنائية تم تطويرها بالشراكة مع أشهر استوديو بورتريه فرنسي لإنتاج صور سينمائية بظلال ساحرة وضوء مثالي.',
    },
  ];

  openOrder(phone: Phone) {
    this.state.selectedPhoneForOrder.set(phone);
  }

  openDetail(phone: Phone) {
    this.state.selectedPhoneForDetail.set(phone);
  }
}
