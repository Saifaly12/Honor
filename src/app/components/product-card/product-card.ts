import { Component, computed, inject, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LucideCheck, LucideEye, LucideScale, LucideShoppingBag } from '@lucide/angular';
import { Phone } from '../../types';
import { AppState } from '../../services/app-state';

const TAG_STYLES: Record<Phone['tagColor'], string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/80',
  purple:
    'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/80',
  teal: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/80',
  orange:
    'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/80',
  emerald:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/80',
};

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe, LucideCheck, LucideEye, LucideScale, LucideShoppingBag],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  state = inject(AppState);

  // الهاتف بييجي من الكومبوننت الأب
  phone = input.required<Phone>();

  // هل الهاتف ده مختار للمقارنة؟ بتتحسب لوحدها
  isCompared = computed(() => this.state.comparedPhones().some((p) => p.id === this.phone().id));

  // لون الشارة حسب نوع الهاتف
  tagStyle = computed(() => TAG_STYLES[this.phone().tagColor]);
}
