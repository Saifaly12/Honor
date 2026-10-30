import { Component, DestroyRef, inject, output, signal } from '@angular/core';
import {
  LucideArrowDown,
  LucideBox,
  LucideCircleCheck,
  LucideShield,
  LucideShieldCheck,
} from '@lucide/angular';

@Component({
  selector: 'app-hero',
  imports: [LucideArrowDown, LucideBox, LucideCircleCheck, LucideShield, LucideShieldCheck],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // الأحداث اللي بتطلع للصفحة الأم (بديل الـ props اللي كانت بتبقى دوال في React)
  scrollToCatalog = output<void>();
  quickOrder = output<void>();

  phrases = [
    'بابتكارات 2025',
    'بأقوى أداء',
    'بأنحف فولد',
    'بأحدث الكاميرات',
    'بشاشات خيالية',
    'بأعلى متانة',
  ];

  // النص اللي بيتكتب على الشاشة
  displayedText = signal('');

  private phraseIndex = 0;
  private isDeleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.tick();
    // لما الكومبوننت يتقفل نوقف المؤقت
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  private tick() {
    const target = this.phrases[this.phraseIndex];
    const text = this.displayedText();
    let delay = 85;

    if (!this.isDeleting) {
      if (text.length < target.length) {
        // مرحلة الكتابة: حرف جديد
        this.displayedText.set(target.slice(0, text.length + 1));
      } else {
        // وقفة قبل المسح
        this.isDeleting = true;
        delay = 1800;
      }
    } else {
      if (text.length > 0) {
        // مرحلة المسح: حرف أقل (أسرع)
        this.displayedText.set(target.slice(0, text.length - 1));
        delay = 40;
      } else {
        // ننتقل للعبارة التالية
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}
