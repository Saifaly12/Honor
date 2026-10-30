export type CategoryType = 
  | 'all'
  | 'magic'
  | 'studio'
  | 'x_series'
  | 'foldables';

export interface PhoneVariant {
  storage: string;
  ram: string;
  price: number;
  originalPrice: number;
}

export interface PhoneColor {
  name: string;
  code: string;
  image?: string;
}

export interface Phone {
  id: string;
  name: string;
  nameAr?: string;
  tag: string;
  tagColor: 'blue' | 'purple' | 'teal' | 'orange' | 'emerald';
  badgeStatus: string;
  image: string;
  summarySpec: string;
  specTags: string[];
  price: number;
  originalPrice: number;
  category: CategoryType;
  categoryLabel: string;
  description: string;
  colors: PhoneColor[];
  variants: PhoneVariant[];
  fullSpecs: {
    processor: string;
    screen: string;
    battery: string;
    charging: string;
    mainCamera: string;
    selfieCamera: string;
    durability: string;
    os: string;
    aiFeatures: string[];
  };
}

export interface OrderItem {
  phone: Phone;
  selectedColor: PhoneColor;
  selectedVariant: PhoneVariant;
  quantity: number;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
  paymentMethod: 'cod_inspection' | 'card' | 'bank_transfer';
}
