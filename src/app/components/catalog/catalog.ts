import { Component, computed, signal } from '@angular/core';
import { LucideSearch, LucideX } from '@lucide/angular';
import { CATEGORIES, PHONES } from '../../data/phones';
import { CategoryType } from '../../types';
import { ProductCard } from '../product-card/product-card';

type SortOption = 'featured' | 'price-asc' | 'price-desc';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard, LucideSearch, LucideX],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  categories = CATEGORIES;

  // الحالة: الفئة والبحث والترتيب
  selectedCategory = signal<CategoryType>('all');
  searchQuery = signal('');
  sortBy = signal<SortOption>('featured');

  // النتيجة بتتحسب لوحدها كل ما واحدة من التلاتة تتغير
  filteredPhones = computed(() => {
    const category = this.selectedCategory();
    const q = this.searchQuery().toLowerCase().trim();
    const sort = this.sortBy();

    return PHONES.filter((phone) => {
      const matchesCategory = category === 'all' || phone.category === category;

      const matchesSearch =
        !q ||
        phone.name.toLowerCase().includes(q) ||
        (phone.nameAr?.toLowerCase().includes(q) ?? false) ||
        phone.summarySpec.toLowerCase().includes(q) ||
        phone.tag.toLowerCase().includes(q) ||
        phone.specTags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });
  });

  onSortChange(value: string) {
    this.sortBy.set(value as SortOption);
  }

  resetFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('all');
  }
}
