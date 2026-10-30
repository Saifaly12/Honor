import { Phone } from '../types';

export const PHONES: Phone[] = [
  {
    id: 'magic-7-pro',
    name: 'Honor Magic 7 Pro',
    nameAr: 'هونر ماجيك 7 برو',
    tag: 'قمة الفئة الرائدة',
    tagColor: 'blue',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_7_pro.png',
    summarySpec: 'معالج Snapdragon 8 Elite • عدسة تليفوتو...',
    specTags: ['16GB + 512GB', 'بطارية 5850mAh', 'شحن 100W'],
    price: 1099,
    originalPrice: 1249,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'الهاتف الرائد الخارق لعام 2025 المزود بأقوى معالج في العالم ونظام كاميرات فالكون المدعوم بالذكاء الاصطناعي وبطارية كربون سيليكون.',
    colors: [
      { name: 'رمادي الليزر (Laser Gray)', code: '#3e4146' },
      { name: 'أبيض ثلجي (Snow White)', code: '#f4f5f7' },
      { name: 'أسود مخملي (Black)', code: '#1a1a1a' }
    ],
    variants: [
      { storage: '512GB', ram: '16GB', price: 1099, originalPrice: 1249 },
      { storage: '1TB', ram: '16GB', price: 1249, originalPrice: 1399 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Elite (3nm)',
      screen: '6.8 بوصة LTPO OLED 120Hz مع سطوع 5000 nits',
      battery: '5850mAh كربون-سيليكون',
      charging: 'شحن فائق 100W سلكي + 80W لاسلكي',
      mainCamera: '50MP رئيسية متغيرة + 200MP تليفوتو + 50MP عريضة',
      selfieCamera: '50MP بدقة 4K + مستشعر 3D ToF',
      durability: 'معيار مزدوج IP68 و IP69',
      os: 'MagicOS 9.0 مبني على Android 15',
      aiFeatures: ['Magic Portal 2.0', 'مساعد YOYO AI', 'محرك فالكون الذكي']
    }
  },
  {
    id: 'magic-7',
    name: 'Honor Magic 7',
    nameAr: 'هونر ماجيك 7',
    tag: 'إصدار حديث 2025',
    tagColor: 'blue',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_7.png',
    summarySpec: 'كاميرا فالكون ثلاثية 50MP • شاشة LTPO مريحة...',
    specTags: ['12GB + 256GB', 'بطارية 5650mAh', 'مقاومة IP68/69'],
    price: 899,
    originalPrice: 999,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'توليفة مثالية من التصميم المريح فائق الرشاقة، أداء المعالجة الصاروخي، وشاشة حماية العين الأكثر تطوراً في فئتها.',
    colors: [
      { name: 'ذهبي شروق الشمس (Gold)', code: '#e5cbb0' },
      { name: 'رمادي قمري (Lunar Gray)', code: '#4b4d52' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 899, originalPrice: 999 },
      { storage: '512GB', ram: '16GB', price: 999, originalPrice: 1099 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Elite (3nm)',
      screen: '6.78 بوصة مسطحة LTPO OLED 120Hz',
      battery: '5650mAh كربون-سيليكون',
      charging: '100W سلكي + 80W لاسلكي',
      mainCamera: 'ثلاثية 50MP مع تقريب بصري',
      selfieCamera: '50MP واسعة',
      durability: 'IP68 / IP69',
      os: 'MagicOS 9.0',
      aiFeatures: ['تعديل الصور الذكي بالمسح', 'تلخيص المكالمات الفوري']
    }
  },
  {
    id: 'magic-v3',
    name: 'Honor Magic V3',
    nameAr: 'هونر ماجيك V3',
    tag: 'أنحف فولد بالعالم',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_v3.png',
    summarySpec: 'سماكة قياسية 9.2 مم • مفصل التيتانيوم المقوى',
    specTags: ['16GB + 512GB', 'Snapdragon 8 Gen 3', '5150mAh سيليكون'],
    price: 1799,
    originalPrice: 1999,
    category: 'foldables',
    categoryLabel: 'الهواتف القابلة للطي Foldables',
    description: 'الهاتف القابل للطي الأرفع في العالم بسماكة 9.2 مم فقط عند الإغلاق وبنية ألياف فضائية فائقة القوة ومفصل تيتانيوم.',
    colors: [
      { name: 'جلد أحمر ملكي (Red Leather)', code: '#9e2a2b' },
      { name: 'أسود مخملي (Black)', code: '#1f1f1f' }
    ],
    variants: [
      { storage: '512GB', ram: '16GB', price: 1799, originalPrice: 1999 },
      { storage: '1TB', ram: '16GB', price: 1999, originalPrice: 2199 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 3',
      screen: 'داخلية 7.92 بوصة قابلة للطي + خارجية 6.43 بوصة 120Hz LTPO',
      battery: '5150mAh كربون-سيليكون',
      charging: 'سلكي 66W + لاسلكي 50W',
      mainCamera: '50MP رئيسية + 50MP بيريسكوب تليفوتو + 40MP عريضة',
      selfieCamera: 'كاميرتان سيلفي 20MP',
      durability: 'مقاومة الماء IPX8 وزجاج درع مضاد للخدش',
      os: 'MagicOS 8.0.1',
      aiFeatures: ['مترجم الشاشتين المزدوج', 'حذف الأشخاص التوليدي']
    }
  },
  {
    id: 'honor-200-pro',
    name: 'Honor 200 Pro',
    nameAr: 'هونر 200 برو',
    tag: 'سيد البورتريه Studio',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200_pro.png',
    summarySpec: 'محرك بورتريه ستوديو هاركورت • شحن 100W...',
    specTags: ['12GB + 512GB', 'Snapdragon 8s Gen 3', '5200mAh'],
    price: 649,
    originalPrice: 749,
    category: 'studio',
    categoryLabel: 'سلسلة الرقمية Studio',
    description: 'ابتكار فوتوغرافي بالشراكة مع استوديو هاركورت باريس الأسطوري لتقديم صور بورتريه احترافية بجودة الاستوديوهات العالمية.',
    colors: [
      { name: 'أزرق محيطي (Ocean Cyan)', code: '#4fa8b5' },
      { name: 'أبيض قمري (White)', code: '#f0f3f6' }
    ],
    variants: [
      { storage: '512GB', ram: '12GB', price: 649, originalPrice: 749 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8s Gen 3',
      screen: '6.78 بوصة AMOLED منحنية 1.5K 120Hz',
      battery: '5200mAh كربون-سيليكون',
      charging: 'سلكي 100W + لاسلكي 66W',
      mainCamera: '50MP هاركورت OIS + 50MP تليفوتو + 12MP ماكرو',
      selfieCamera: '50MP بورتريه مزدوجة',
      durability: 'مقاومة الرذاذ IP65',
      os: 'MagicOS 8.0',
      aiFeatures: ['محاكي إضاءة ستوديو هاركورت', 'محرك البورتريه المزدوج']
    }
  },
  {
    id: 'magic-vs3',
    name: 'Honor Magic Vs3',
    nameAr: 'هونر ماجيك Vs3',
    tag: 'قيمة استثنائية للفولد',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_vs3.png',
    summarySpec: 'سماكة 9.8 مم • شاشة OLED داخلية مزدوجة...',
    specTags: ['12GB + 256GB', 'Snapdragon 8 Gen 2', '5000mAh'],
    price: 1299,
    originalPrice: 1450,
    category: 'foldables',
    categoryLabel: 'الهواتف القابلة للطي Foldables',
    description: 'تجربة طي رفيعة ومرنة للغاية توفر أداءً فائقاً وتقنيات شاشة رائدة بسعر استثنائي في فئة الهواتف القابلة للطي.',
    colors: [
      { name: 'أسود مخملي (Black)', code: '#1e1e1e' },
      { name: 'أخضر زمردي (Green)', code: '#1e382b' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 1299, originalPrice: 1450 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 2',
      screen: 'داخلية 7.92 بوصة 120Hz + خارجية 6.43 بوصة',
      battery: '5000mAh كربون-سيليكون',
      charging: 'شحن 66W سلكي + 50W لاسلكي',
      mainCamera: '50MP OIS + 8MP تليفوتو بيريسكوب + 40MP عريضة',
      selfieCamera: '16MP مزدوجة',
      durability: 'مفصل متين معتمد خفيف الوزن 229g',
      os: 'MagicOS 8.0.1',
      aiFeatures: ['النوافذ المتعددة العائمة', 'المشاركة السريعة بالسحب']
    }
  },
  {
    id: 'magic-6-pro',
    name: 'Honor Magic 6 Pro',
    nameAr: 'هونر ماجيك 6 برو',
    tag: 'تليفوتو 180MP',
    tagColor: 'blue',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_6_pro.png',
    summarySpec: 'كاميرا فالكون مع زوم بيريسكوب 180MP وشحن...',
    specTags: ['12GB + 512GB', 'Snapdragon 8 Gen 3', '5600mAh'],
    price: 849,
    originalPrice: 1099,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'بطل التصوير الرياضي والحركي بكاميرا بيريسكوبية خارقة بدقة 180 ميجابكسل وشاشة درع النانو كريستال الأكثر تحملاً للصدمات.',
    colors: [
      { name: 'أخضر جلدي (Epi Green)', code: '#3a5f43' },
      { name: 'أسود ليلي (Black)', code: '#1a1a1a' }
    ],
    variants: [
      { storage: '512GB', ram: '12GB', price: 849, originalPrice: 1099 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 3',
      screen: '6.8 بوصة LTPO OLED 1-120Hz سطوع 5000 nits',
      battery: '5600mAh كربون-سيليكون',
      charging: '80W سلكي + 66W لاسلكي',
      mainCamera: '50MP متغيرة + 180MP بيريسكوب + 50MP عريضة',
      selfieCamera: '50MP + 3D Face Unlock',
      durability: 'زجاج نانو كريستال مقاوم للسقوط + IP68',
      os: 'MagicOS 8.0',
      aiFeatures: ['التقاط الحركة الرياضية الذكي', 'Magic Capsule']
    }
  },
  {
    id: 'honor-200',
    name: 'Honor 200',
    nameAr: 'هونر 200',
    tag: 'الأكثر طلباً',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200.png',
    summarySpec: 'مستشعر Sony IMX906 المخصص مع خوارزمي...',
    specTags: ['12GB + 256GB', 'Snapdragon 7 Gen 3', '5200mAh'],
    price: 479,
    originalPrice: 549,
    category: 'studio',
    categoryLabel: 'سلسلة الرقمية Studio',
    description: 'الهاتف الأنيق الخفيف بتأثيرات بورتريه استوديو هاركورت المتميزة وشاشة 120Hz لحماية العين طوال اليوم.',
    colors: [
      { name: 'أبيض ضوء القمر (White)', code: '#f5f5f7' },
      { name: 'أسود أنيق (Black)', code: '#212121' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 479, originalPrice: 549 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 7 Gen 3',
      screen: '6.7 بوصة AMOLED 120Hz 1.5K',
      battery: '5200mAh',
      charging: '100W سلكي فائق',
      mainCamera: '50MP سوني IMX906 OIS + 50MP تليفوتو + 12MP عريضة',
      selfieCamera: '50MP عريضة',
      durability: 'هيكل نحيف 7.7 مم خفيف ومقاوم',
      os: 'MagicOS 8.0',
      aiFeatures: ['أنماط ستوديو هاركورت', 'حذف التشويش الذكي']
    }
  },
  {
    id: 'honor-x9b-5g',
    name: 'Honor X9b 5G',
    nameAr: 'هونر X9b 5G',
    tag: 'ملك مقاومة الصدمات 360°',
    tagColor: 'orange',
    badgeStatus: 'متوفر',
    image: '/phones/honor_x9b_5g.png',
    summarySpec: 'شاشة مضادة للكسر بالكامل • بطارية ماراثونية...',
    specTags: ['12GB + 256GB', 'كاميرا 108MP', 'شاشة منحنية 1.5K'],
    price: 339,
    originalPrice: 399,
    category: 'x_series',
    categoryLabel: 'سلسلة X المتينة',
    description: 'الهاتف الأقوى تحملاً للصدمات والسقوط بزاوية 360 درجة بفضل تقنية شاشة Ultra-Bounce مع بطارية ضخمة تدوم 3 أيام.',
    colors: [
      { name: 'برتقالي جلدي (Orange)', code: '#e66827' },
      { name: 'أخضر زمردي (Green)', code: '#1a4332' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 339, originalPrice: 399 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 6 Gen 1',
      screen: '6.78 بوصة AMOLED 1.5K مقاومة للسقوط 5 نجوم',
      battery: '5800mAh تدوم 3 أيام',
      charging: '35W شحن سريع',
      mainCamera: '108MP رئيسية + 5MP عريضة + 2MP ماكرو',
      selfieCamera: '16MP',
      durability: 'حماية 360 درجة ضد السقوط و IP53',
      os: 'MagicOS 7.2',
      aiFeatures: ['التعرف على النصوص السريع', 'توفير الطاقة الذكي']
    }
  },
  {
    id: 'magic-7-rsr',
    name: 'Honor Magic 7 RSR Porsche Design',
    nameAr: 'هونر ماجيك 7 بورش ديزاين',
    tag: 'إصدار فاخر حصري',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_7_pro.png',
    summarySpec: 'تصميم بورش ديزاين الفاخر • Snapdragon 8 Elite...',
    specTags: ['24GB + 1TB', 'سيراميك فاخر', 'شحن 100W'],
    price: 1999,
    originalPrice: 2299,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'تحفة فنية تم ابتكارها بالتعاون مع استوديو بورش ديزاين العالمي، وتجمع بين خامات السيراميك الفاخرة وأعلى عتاد رقمي في العالم.',
    colors: [
      { name: 'عقيق أرجواني (Provence Purple)', code: '#5b4a6d' },
      { name: 'رمادي العقيق (Agate Gray)', code: '#474a51' }
    ],
    variants: [
      { storage: '1TB', ram: '24GB', price: 1999, originalPrice: 2299 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Elite',
      screen: '6.8 بوصة LTPO OLED 120Hz نانو كريستال سيراميك',
      battery: '5850mAh',
      charging: '100W سلكي + 80W لاسلكي',
      mainCamera: '50MP رئيسية + 200MP بيريسكوب + 50MP عريضة',
      selfieCamera: '50MP + 3D ToF',
      durability: 'سيراميك مقوى + IP68 / IP69',
      os: 'MagicOS 9.0 Porsche Custom Edition',
      aiFeatures: ['واجهة بورش الحصرية', 'محرك فالكون الرياضي للسيارات']
    }
  },
  {
    id: 'magic-v-flip',
    name: 'Honor Magic V Flip',
    nameAr: 'هونر ماجيك V فليب',
    tag: 'أكبر شاشة خارجية فليب',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_vs3.png',
    summarySpec: 'شاشة غطاء 4.0 بوصة • كاميرا 50MP سوني...',
    specTags: ['12GB + 512GB', 'بطارية 4800mAh', 'شحن 66W'],
    price: 1099,
    originalPrice: 1250,
    category: 'foldables',
    categoryLabel: 'الهواتف القابلة للطي Foldables',
    description: 'أجمل هاتف قابل للطي صدفي مع أكبر شاشة خارجية في العالم بمقاس 4.0 بوصة تدعم تشغيل التطبيقات مباشرة دون الحاجة لفتح الهاتف.',
    colors: [
      { name: 'أخضر كاميليا (Camellia Green)', code: '#83a890' },
      { name: 'أبيض بلوري (Crystal White)', code: '#f7f7f9' }
    ],
    variants: [
      { storage: '512GB', ram: '12GB', price: 1099, originalPrice: 1250 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8+ Gen 1',
      screen: 'داخلية 6.8 بوصة OLED 120Hz + خارجية 4.0 بوصة LTPO',
      battery: '4800mAh سيليكون-كربون فائق',
      charging: '66W شحن فائق',
      mainCamera: '50MP Sony IMX906 OIS + 12MP فائقة العرض',
      selfieCamera: '50MP مخصصة للسيلفي',
      durability: 'مفصل قطرة الماء الفولاذي فائق القوة',
      os: 'MagicOS 8.0',
      aiFeatures: ['سيلفي فائق الجودة بالهاتف مغلق', 'خلفيات تفاعلية للشاشة الخارجية']
    }
  },
  {
    id: 'magic-v2',
    name: 'Honor Magic V2',
    nameAr: 'هونر ماجيك V2',
    tag: 'رائد الهواتف القابلة للطي',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_v3.png',
    summarySpec: 'سماكة 9.9 مم • بطارية 5000mAh كربون...',
    specTags: ['16GB + 512GB', 'Snapdragon 8 Gen 2', 'شحن 66W'],
    price: 1399,
    originalPrice: 1599,
    category: 'foldables',
    categoryLabel: 'الهواتف القابلة للطي Foldables',
    description: 'الهاتف الأيقوني الذي كسر حاجز الـ 10 مم للهواتف القابلة للطي مع مفصل تيتانيوم ثلاثي الأبعاد وشاشتين مريحتين للعين.',
    colors: [
      { name: 'جلد أسود كلاسيكي (Black)', code: '#1a1a1a' },
      { name: 'بنفسجي حريري (Silk Purple)', code: '#6c5c77' }
    ],
    variants: [
      { storage: '512GB', ram: '16GB', price: 1399, originalPrice: 1599 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 2',
      screen: '7.92 بوصة OLED داخلية + 6.43 بوصة خارجية 120Hz',
      battery: '5000mAh',
      charging: '66W SuperCharge',
      mainCamera: '50MP OIS + 20MP تليفوتو + 50MP عريضة',
      selfieCamera: '16MP مزدوجة',
      durability: 'مفصل التيتانيوم المقوى',
      os: 'MagicOS 7.2',
      aiFeatures: ['نوافذ العمل المنقسمة الذكية', 'شريط الأدوات السريع']
    }
  },
  {
    id: 'magic-vs2',
    name: 'Honor Magic Vs2',
    nameAr: 'هونر ماجيك Vs2',
    tag: 'فولد فائق الخفة',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_vs3.png',
    summarySpec: 'وزن خفيف 229 غرام • شاشتان 120Hz LTPO...',
    specTags: ['12GB + 256GB', 'مفصل سبيكة المغنيسيوم', '5000mAh'],
    price: 1199,
    originalPrice: 1350,
    category: 'foldables',
    categoryLabel: 'الهواتف القابلة للطي Foldables',
    description: 'أخف هاتف قابل للطي أفقي بفضل سبائك المغنيسيوم الفضائية وشاشات حماية العين بمعدل تعتيم عالي.',
    colors: [
      { name: 'أزرق جليدي (Glacier Blue)', code: '#9fbcd4' },
      { name: 'أسود منتصف الليل (Black)', code: '#1f1f1f' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 1199, originalPrice: 1350 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8+ Gen 1',
      screen: 'داخلية 7.92 بوصة + خارجية 6.43 بوصة',
      battery: '5000mAh',
      charging: '66W سلكي',
      mainCamera: '50MP رئيسية + 20MP تليفوتو + 12MP فائقة العرض',
      selfieCamera: '16MP',
      durability: 'هيكل مغنيسيوم خفيف الوزن',
      os: 'MagicOS 7.2',
      aiFeatures: ['تقسيم المهام السريع']
    }
  },
  {
    id: 'honor-200-lite',
    name: 'Honor 200 Lite',
    nameAr: 'هونر 200 لايت',
    tag: 'سيلفي 50MP استثنائي',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200.png',
    summarySpec: 'سماكة 6.78 مم • كاميرا 108MP وسيلفي 50MP...',
    specTags: ['8GB + 256GB', 'وزن 166g فائق الخفة', 'AMOLED'],
    price: 279,
    originalPrice: 329,
    category: 'studio',
    categoryLabel: 'سلسلة الرقمية Studio',
    description: 'هاتف فائق النحافة والرشاقة بوزن 166 غراماً وكاميرا سيلفي 50MP مع ضوء فلاش مخصص لصور البورتريه الليلية.',
    colors: [
      { name: 'سماوي بحري (Starry Blue)', code: '#7ba9c4' },
      { name: 'أسود منتصف الليل (Midnight Black)', code: '#1b1b1b' }
    ],
    variants: [
      { storage: '256GB', ram: '8GB', price: 279, originalPrice: 329 }
    ],
    fullSpecs: {
      processor: 'MediaTek Dimensity 6080 (6nm)',
      screen: '6.7 بوصة AMOLED مع حواف فائقة النحافة',
      battery: '4500mAh',
      charging: '35W شحن سريع',
      mainCamera: '108MP فائقة الوضوح + 5MP عريضة + 2MP ماكرو',
      selfieCamera: '50MP مع فلاش LED أمامي للبورتريه',
      durability: 'مقاومة السقوط اليومي بمعيار SGS 5 نجوم',
      os: 'MagicOS 8.0',
      aiFeatures: ['كبسولة Magic Capsule', 'محرك البورتريه السريع']
    }
  },
  {
    id: 'honor-200-smart',
    name: 'Honor 200 Smart 5G',
    nameAr: 'هونر 200 سمارت',
    tag: 'متانة وبطارية تدوم',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200.png',
    summarySpec: 'شاشة 120Hz مقاومة للصدمات • بطارية 5200mAh...',
    specTags: ['4GB + 256GB', 'مقاومة الماء IP64', 'Snapdragon 4 Gen 2'],
    price: 219,
    originalPrice: 249,
    category: 'studio',
    categoryLabel: 'سلسلة الرقمية Studio',
    description: 'الهاتف العملي الذكي المزود باتصال 5G فائق السرعة، ومكبرات صوت استريو ثلاثية الأبعاد، وهيكل متين يتحمل الصدمات.',
    colors: [
      { name: 'أخضر غابات (Forest Green)', code: '#345543' },
      { name: 'أسود ناصع (Midnight Black)', code: '#181818' }
    ],
    variants: [
      { storage: '256GB', ram: '4GB', price: 219, originalPrice: 249 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 4 Gen 2 (4nm)',
      screen: '6.8 بوصة 120Hz مريحة للعين',
      battery: '5200mAh',
      charging: '35W SuperCharge',
      mainCamera: '50MP رئيسية عالية الدقة',
      selfieCamera: '5MP',
      durability: 'مقاومة السقوط ورذاذ الماء IP64',
      os: 'MagicOS 8.0',
      aiFeatures: ['مكبر صوت 300% فائق العلو']
    }
  },
  {
    id: 'honor-90-pro',
    name: 'Honor 90 Pro',
    nameAr: 'هونر 90 برو',
    tag: 'كاميرا 200MP خارقة',
    tagColor: 'teal',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200_pro.png',
    summarySpec: 'كاميرا 200MP • شاشة 3840Hz بدون وميض...',
    specTags: ['16GB + 512GB', 'Snapdragon 8+ Gen 1', 'شحن 90W'],
    price: 519,
    originalPrice: 599,
    category: 'studio',
    categoryLabel: 'سلسلة الرقمية Studio',
    description: 'أحد أشهر هواتف هونر الفوتوغرافية مع مستشعر 200 ميجابكسل وشاشة تعتيم PWM غير مسبوقة لحماية العين.',
    colors: [
      { name: 'فضي ماسي (Diamond Silver)', code: '#d4d8dd' },
      { name: 'أزرق طاووسي (Peacock Blue)', code: '#295b77' }
    ],
    variants: [
      { storage: '512GB', ram: '16GB', price: 519, originalPrice: 599 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8+ Gen 1',
      screen: '6.78 بوصة AMOLED 120Hz 1.5K',
      battery: '5000mAh',
      charging: '90W سلكي فائق',
      mainCamera: '200MP رئيسية + 32MP تليفوتو + 12MP عريضة',
      selfieCamera: '50MP مزدوجة بدقة 4K',
      durability: 'تصميم زجاجي فاخر بحواف منحنية',
      os: 'MagicOS 7.1',
      aiFeatures: ['وضع تصوير البورتريه الديناميكي']
    }
  },
  {
    id: 'magic-6-rsr',
    name: 'Honor Magic 6 RSR Porsche Design',
    nameAr: 'هونر ماجيك 6 بورش ديزاين',
    tag: 'فخامة هندسة بورش',
    tagColor: 'purple',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_6_pro.png',
    summarySpec: 'زجاج كريستال ألماسي • تليفوتو بيريسكوب 180MP...',
    specTags: ['24GB + 1TB', 'حماية NanoCrystal Diamond', 'شحن 80W'],
    price: 1799,
    originalPrice: 2099,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'إصدار بورش ديزاين الحصري المستوحى من خطوط سيارة تايكان، والمزود بزجاج ألماسي فائق الصلابة ونظام تصوير فالكون.',
    colors: [
      { name: 'رمادي مثلج (Frozen Berry)', code: '#9d7c86' },
      { name: 'رمادي العقيق (Agate Gray)', code: '#4b4e54' }
    ],
    variants: [
      { storage: '1TB', ram: '24GB', price: 1799, originalPrice: 2099 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 3',
      screen: '6.8 بوصة LTPO OLED درع الماس النانو',
      battery: '5600mAh',
      charging: '80W سلكي + 66W لاسلكي',
      mainCamera: '50MP متغيرة H9800 + 180MP تليفوتو + 50MP عريضة',
      selfieCamera: '50MP + 3D ToF',
      durability: 'مقاومة الخدش الألماسي + IP68',
      os: 'MagicOS 8.0 Porsche Edition',
      aiFeatures: ['التقاط الحركة الرياضية فائق الدقة']
    }
  },
  {
    id: 'magic-6-ultimate',
    name: 'Honor Magic 6 Ultimate',
    nameAr: 'هونر ماجيك 6 التيميت',
    tag: 'إصدار النخبة الفائق',
    tagColor: 'blue',
    badgeStatus: 'متوفر',
    image: '/phones/honor_magic_6_pro.png',
    summarySpec: 'مستشعر H9800 بنطاق ديناميكي فائق • ظهر جلدي...',
    specTags: ['16GB + 512GB', 'تركيز ليزر LiDAR', 'IP68'],
    price: 1199,
    originalPrice: 1399,
    category: 'magic',
    categoryLabel: 'سلسلة Magic الرائدة',
    description: 'إصدار النخبة مع وحدة كاميرا هندسية فريدة مستوحاة من الساعات السويسرية الفاخرة مع نظام تركيز ليزري مصفوفي LiDAR.',
    colors: [
      { name: 'أسود جلدي نباتي (Black Leather)', code: '#1c1c1c' },
      { name: 'أرجواني جلدي (Sky Purple)', code: '#7b6882' }
    ],
    variants: [
      { storage: '512GB', ram: '16GB', price: 1199, originalPrice: 1399 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 8 Gen 3',
      screen: '6.8 بوصة OLED LTPO 120Hz',
      battery: '5600mAh',
      charging: '80W سلكي + 66W لاسلكي',
      mainCamera: '50MP H9800 + 180MP بيريسكوب + 50MP عريضة + LiDAR',
      selfieCamera: '50MP + 3D Face Unlock',
      durability: 'IP68 وزجاج نانو فائق المقاومة',
      os: 'MagicOS 8.0',
      aiFeatures: ['تتبع الأهداف فائق السرعة']
    }
  },
  {
    id: 'honor-x9c-5g',
    name: 'Honor X9c 5G',
    nameAr: 'هونر X9c 5G',
    tag: 'عملاق الصدمات المطور 2025',
    tagColor: 'orange',
    badgeStatus: 'متوفر',
    image: '/phones/honor_x9b_5g.png',
    summarySpec: 'شاشة معززة لمقاومة السقوط حتى 2 متر • بطارية 6600mAh...',
    specTags: ['12GB + 256GB', 'بطارية 6600mAh عملاقة', 'شحن 66W'],
    price: 379,
    originalPrice: 429,
    category: 'x_series',
    categoryLabel: 'سلسلة X المتينة',
    description: 'الجيل الأحدث من سلسلة المتانة الشهيرة مع بطارية عملاقة غير مسبوقة 6600mAh ومقاومة السقوط حتى ارتفاع مترين.',
    colors: [
      { name: 'تيتانيوم أسود (Titanium Black)', code: '#232428' },
      { name: 'تيتانيوم أرجواني (Titanium Purple)', code: '#695775' }
    ],
    variants: [
      { storage: '256GB', ram: '12GB', price: 379, originalPrice: 429 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 6 Gen 1',
      screen: '6.78 بوصة AMOLED 120Hz مقاومة للصدمات الشديدة',
      battery: '6600mAh كربون-سيليكون الجيل الأحدث',
      charging: '66W SuperCharge',
      mainCamera: '108MP مع تثبيت بصري OIS + 5MP عريضة',
      selfieCamera: '16MP',
      durability: 'مقاومة السقوط بدرجة 5 نجوم معتمدة من SGS + IP65M',
      os: 'MagicOS 8.0',
      aiFeatures: ['تحسين التبريد الذكي', 'وضع السقوط الآمن']
    }
  },
  {
    id: 'honor-x8b',
    name: 'Honor X8b',
    nameAr: 'هونر X8b',
    tag: 'تصميم نحيف وكاميرا 108MP',
    tagColor: 'orange',
    badgeStatus: 'متوفر',
    image: '/phones/honor_200.png',
    summarySpec: 'شاشة AMOLED مريحة • كبسولة Magic Capsule...',
    specTags: ['8GB + 512GB', 'كاميرا 108MP', 'سماكة 6.78mm'],
    price: 229,
    originalPrice: 269,
    category: 'x_series',
    categoryLabel: 'سلسلة X المتينة',
    description: 'هاتف أنيق جداً بنقشة جلدية كلاسيكية مع شاشة AMOLED بدون حواف وكاميرا سيلفي 50MP بضوء ناعم.',
    colors: [
      { name: 'أخضر ساحر جلدي (Glamorous Green)', code: '#2b583f' },
      { name: 'فضي تيتانيوم (Titanium Silver)', code: '#cbcfd4' }
    ],
    variants: [
      { storage: '512GB', ram: '8GB', price: 229, originalPrice: 269 }
    ],
    fullSpecs: {
      processor: 'Snapdragon 680',
      screen: '6.7 بوصة AMOLED سطوع 2000 nits',
      battery: '4500mAh',
      charging: '35W شحن سريع',
      mainCamera: '108MP رئيسية + 5MP عريضة + 2MP ماكرو',
      selfieCamera: '50MP مع مصباح سيلفي',
      durability: 'مقاومة السقوط اليومي 5 نجوم',
      os: 'MagicOS 7.2',
      aiFeatures: ['Magic Capsule التفاعلية']
    }
  },
  {
    id: 'honor-x7b',
    name: 'Honor X7b 5G',
    nameAr: 'هونر X7b 5G',
    tag: 'بطارية 6000mAh ماراثونية',
    tagColor: 'orange',
    badgeStatus: 'متوفر',
    image: '/phones/honor_x9b_5g.png',
    summarySpec: 'بطارية ضخمة 6000mAh • مكبرات استريو مزدوجة...',
    specTags: ['8GB + 256GB', 'بطارية 6000mAh', 'كاميرا 108MP'],
    price: 189,
    originalPrice: 219,
    category: 'x_series',
    categoryLabel: 'سلسلة X المتينة',
    description: 'الهاتف الاقتصادي المتين مع أكبر بطارية تدوم حتى 4 أيام استخدام متواصل ومكبر صوت مزدوج بقوة 200%.',
    colors: [
      { name: 'فضي كريستالي (Crystal Silver)', code: '#d7dade' },
      { name: 'أسود منتصف الليل (Midnight Black)', code: '#1a1a1a' }
    ],
    variants: [
      { storage: '256GB', ram: '8GB', price: 189, originalPrice: 219 }
    ],
    fullSpecs: {
      processor: 'MediaTek Dimensity 6020 5G',
      screen: '6.8 بوصة 90Hz بدقة FHD+',
      battery: '6000mAh تدوم حتى 4 أيام',
      charging: '35W شحن سريع',
      mainCamera: '108MP رئيسية + 2MP عمق + 2MP ماكرو',
      selfieCamera: '8MP',
      durability: 'هيكل مقاوم للصدمات العرضية',
      os: 'MagicOS 7.2',
      aiFeatures: ['مكبر صوت استريو مضاعف 200%']
    }
  }
];

export const CATEGORIES = [
  { id: 'all' as const, label: 'جميع الأجهزة' },
  { id: 'magic' as const, label: 'سلسلة Magic الرائدة' },
  { id: 'studio' as const, label: 'سلسلة الرقمية Studio' },
  { id: 'x_series' as const, label: 'سلسلة X المتينة' },
  { id: 'foldables' as const, label: 'الهواتف القابلة للطي Foldables' }
];
