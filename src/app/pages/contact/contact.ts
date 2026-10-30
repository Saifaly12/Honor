import { Component } from '@angular/core';
import {
  LucideCircleCheck,
  LucideClock,
  LucideMail,
  LucideMapPin,
  LucideMessageSquare,
  LucidePhone,
  LucideShieldCheck,
} from '@lucide/angular';

@Component({
  selector: 'app-contact',
  imports: [
    LucideCircleCheck,
    LucideClock,
    LucideMail,
    LucideMapPin,
    LucideMessageSquare,
    LucidePhone,
    LucideShieldCheck,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = 'mahmoudsaad32@gmail.com';
  phoneDisplay = '+20 10 28535623';

  showrooms = [
    {
      city: 'القاهرة - المقر الرئيسي وصالة العرض الكبرى',
      address: 'التجمع الخامس، شارع التسعين الشمالي - مركز التوزيع والوكالة المعتمدة',
      hours: 'السبت - الخميس: 10:00 ص - 11:00 م | الجمعة: 2:00 م - 11:00 م',
      phone: '+20 10 28535623',
      services: 'صالة بيع معتمدة، تسليم فوري، فحص مجاني، استبدال معتمد',
    },
    {
      city: 'الإسكندرية - صالة العرض وخدمة العملاء',
      address: 'طريق الكورنيش، لوران - صالة عرض هونر المعتمدة',
      hours: 'يومياً: 10:00 ص - 10:30 م',
      phone: '+20 10 28535623',
      services: 'خدمة عملاء VIP، تبديل شاشات معتمد، استلام الطلبات المباشرة',
    },
    {
      city: 'الرياض - فرع التوزيع الإقليمي للخليج',
      address: 'طريق الملك فهد، برج الفيصلية',
      hours: 'يومياً: 10:00 ص - 11:00 م',
      phone: '+20 10 28535623',
      services: 'توصيل إقليمي مؤمن لكافة دول الخليج والشرق الأوسط',
    },
  ];
}
