// ════════════════════════════════════════════════
// CLINIC DATA — Yuvia Clinic
// ════════════════════════════════════════════════

const CLINIC = {
  name:        'YUVIA',
  nameSub:     'AESTHETICS · NUTRITION · WELLNESS',
  city:        'Cairo',
  country:     'Egypt',
  logoFile:    'yuvia_logo.png',
  heroImage:   'Hero.JPEG',
  heroVideo:   '',
  trust: {
    stat1: { num: '500+', labelKey: 'trust1' },
    stat2: { num: '3+',   labelKey: 'trust2' },
    stat3: { num: '98%',  labelKey: 'trust3' },
  },
  phone1:      '01101003121',
  phone2:      '',
  whatsapp:    'https://wa.me/201101003121',
  callLink:    'tel:+201101003121',
  locationEn:  'Cairo, Egypt',
  locationAr:  'القاهرة، مصر',
  hoursEn:     'Sunday – Thursday: 10:00 AM – 8:00 PM<br>Saturday: 10:00 AM – 4:00 PM',
  hoursAr:     'الأحد – الخميس: 10:00 ص – 8:00 م<br>السبت: 10:00 ص – 4:00 م',
  social: {
    instagram: 'https://www.instagram.com/yuviaclinic',
    whatsapp:  'https://wa.me/201101003121',
    snapchat:  '',
  },
  footerServices: ['Skin Boosters', 'Aqua Facial', 'OxyGeneo', 'RF Treatments', 'Brazilian Butt Re-shaping', 'Dermapen PDRN'],
  footerLocation: 'Cairo, Egypt',
  copyright:   '© 2025 Yuvia Clinic. All rights reserved.',
  copyrightAr: '© 2025 يوفيا كلينيك. جميع الحقوق محفوظة.',
  adminUser: 'admin',
  adminPass: 'admin123',
};

const FOUNDER = {
  id:       'yuvia-team',
  name:     'Yuvia Clinic Team',
  nameAr:   'فريق يوفيا كلينيك',
  role:     'Aesthetics · Nutrition · Wellness',
  roleAr:   'جماليات · تغذية · عافية',
  img:      'Hero.JPEG',
  credsEn:  [
    'Holistic approach to timeless beauty and vitality',
    'Advanced aesthetic treatments & skin science',
    'Medical-grade devices: OxyGeneo, NuEra Tight, Dermapen',
    'Nutrition consulting for inside-out wellness',
    'Glow from the inside out',
  ],
  credsAr:  [
    'نهج شامل لجمال خالد وحيوية دائمة',
    'علاجات جمالية متقدمة وعلم البشرة',
    'أجهزة طبية متطورة: OxyGeneo، NuEra Tight، Dermapen',
    'استشارات تغذية لعافية من الداخل للخارج',
    'أضيئي من الداخل إلى الخارج',
  ],
  bioEn: [
    'Yuvia Clinic was built on one belief: true beauty is holistic. It lives at the intersection of aesthetics, nutrition, and wellness — all working together to help you glow from the inside out.',
    'Our team of specialists combines cutting-edge aesthetic treatments with personalized wellness and nutrition plans. Whether you\'re seeking radiant skin, body contouring, or a complete rejuvenation, every treatment at Yuvia is tailored to your unique goals.',
    'Elegance. Expertise. Excellence. These aren\'t just words — they\'re the standard we hold ourselves to with every client, every treatment, every result.',
  ],
  bioAr: [
    'بنيت يوفيا كلينيك على اعتقاد واحد: الجمال الحقيقي شامل. يعيش عند تقاطع الجماليات والتغذية والعافية — كلها تعمل معاً لمساعدتك على التألق من الداخل إلى الخارج.',
    'يجمع فريقنا من المتخصصين أحدث العلاجات الجمالية مع خطط العافية والتغذية المخصصة. سواء كنت تبحثين عن بشرة متألقة أو نحت الجسم أو تجديد كامل، كل علاج في يوفيا مصمم خصيصاً لأهدافك.',
    'الأناقة. الخبرة. التميز. هذه ليست مجرد كلمات — إنها المعيار الذي نلتزم به مع كل عميل، كل علاج، كل نتيجة.',
  ],
};

const DOCTORS = [
  {
    id:      'yuvia-team',
    name:    'Yuvia Clinic',
    nameAr:  'يوفيا كلينيك',
    role:    'Aesthetics · Nutrition · Wellness',
    roleAr:  'جماليات · تغذية · عافية',
    img:     'Hero.JPEG',
    founder: true,
  },
  {
    id:      'omar-ali',
    name:    'Dr. Omar Ali',
    nameAr:  'د. عمر علي',
    role:    'Aesthetic Physician',
    roleAr:  'طبيب جماليات',
    img:     '',
    founder: false,
  },
  {
    id:      'malak',
    name:    'Dr. Malak',
    nameAr:  'د. ملك',
    role:    'Aesthetic & Wellness Specialist',
    roleAr:  'أخصائية جماليات وعافية',
    img:     'dr_malak.jpg',
    founder: false,
  },
];

const BA_IMAGES = [
  { img: 'service_eye_revive.jpg',   doctorName: 'Yuvia Clinic', treatmentEn: 'Lip Booster',           treatmentAr: 'منشط الشفاه',       badge: 'Before & After' },
  { img: 'ba_skin_booster_face.jpg', doctorName: 'Yuvia Clinic', treatmentEn: 'Hydra-Plus Facial',     treatmentAr: 'فيشل هايدرا بلس', badge: 'Before & After' },
  { img: 'service_biopentxt.jpg',    doctorName: 'Yuvia Clinic', treatmentEn: 'Neck Skin Booster',     treatmentAr: 'منشط بشرة الرقبة', badge: 'Before & After' },
  { img: 'service_facials.jpg',      doctorName: 'Yuvia Clinic', treatmentEn: 'Skin Booster',          treatmentAr: 'منشط البشرة',       badge: 'Before & After' },
  { img: 'service_bbb.jpg',          doctorName: 'Yuvia Clinic', treatmentEn: 'Dermapen Salmon PDRN',  treatmentAr: 'ديرمابن سالمون',   badge: 'Before & After' },
];

const REVIEWS = [
  { stars: 5, text: 'The OxyGeneo treatment at Yuvia completely transformed my skin. I walked out glowing — the results were immediate and lasted for weeks. This clinic is on a completely different level.', name: 'Nour A.', sub: 'OxyGeneo Patient' },
  { stars: 5, text: 'I tried the Hydra-Plus facial and it was the best skin decision I\'ve ever made. The team was so professional and the clinic felt incredibly luxurious. I\'m a client for life.', name: 'Layla K.', sub: 'Hydra-Plus Facial Patient' },
  { stars: 5, text: 'The skin booster treatment was painless and the results speak for themselves. My skin looks smoother, plumper, and more youthful than it has in years. Absolutely recommend Yuvia.', name: 'Sara M.', sub: 'Skin Booster Patient' },
];
const REVIEWS_AR = [
  { stars: 5, text: 'علاج OxyGeneo في يوفيا غيّر بشرتي بالكامل. خرجت متألقة — النتائج كانت فورية وامتدت لأسابيع. هذه العيادة على مستوى مختلف تماماً.', name: 'نور أ.', sub: 'مريضة OxyGeneo' },
  { stars: 5, text: 'جربت فيشل هايدرا بلس وكان أفضل قرار اتخذته لبشرتي. الفريق محترف جداً والعيادة فاخرة بشكل لا يصدق. أصبحت عميلة للأبد.', name: 'ليلى خ.', sub: 'مريضة فيشل هايدرا بلس' },
  { stars: 5, text: 'علاج منشط البشرة كان غير مؤلم والنتائج تتحدث عن نفسها. بشرتي أكثر نعومة وحيوية وشباباً مما كانت عليه منذ سنوات. أوصي بيوفيا بشدة.', name: 'سارة م.', sub: 'مريضة منشط البشرة' },
];

const FAQS = [
  { q: 'What treatments does Yuvia Clinic offer?',  a: 'Yuvia Clinic offers a comprehensive range of aesthetic treatments including Skin Boosters, Aqua Facial, OxyGeneo, Hydra-Plus Facial, RF Treatments (Face, Neck, Hands), Eye Revive, Bio Pen, Peeling, Dermapen Salmon PDRN, and Brazilian Butt Re-shaping. We also offer Nutrition and Wellness consulting.' },
  { q: 'What is the Eid 20% OFF offer?',            a: 'Yuvia Clinic is currently offering 20% OFF on ALL services as a special Eid promotion. This is a limited-time offer — book now to secure your discounted appointment. Contact us via WhatsApp or call 0110 1003121 to reserve your spot.' },
  { q: 'How long do results last?',                 a: 'Results vary by treatment. Skin Boosters typically last 6–9 months, OxyGeneo maintains a glow for 4–6 weeks per session, RF treatments show progressive tightening over 2–3 months, and Dermapen PDRN results improve over 4–6 weeks.' },
  { q: 'Are treatments painful?',                   a: 'Patient comfort is our priority. Topical numbing cream is applied before all injectable and needling treatments. Most patients describe procedures as mild pressure rather than pain. OxyGeneo and facial treatments are entirely non-invasive and deeply relaxing.' },
  { q: 'How do I book an appointment?',             a: 'You can book directly through this website using the Book Now button, via WhatsApp at 0110 1003121, or by calling the clinic. We are available Sunday through Thursday 10AM–8PM and Saturday 10AM–4PM.' },
  { q: 'What should I avoid before treatment?',     a: 'For injectable and needling treatments, avoid blood thinners (aspirin, ibuprofen), alcohol, and vitamin E supplements for 48 hours prior. For facial treatments, arrive with a clean face if possible.' },
];
const FAQS_AR = [
  { q: 'ما هي علاجات يوفيا كلينيك؟',              a: 'تقدم يوفيا كلينيك مجموعة شاملة تشمل منشطات البشرة، أكوا فيشل، OxyGeneo، هايدرا بلس فيشل، علاجات RF، إحياء العيون، بايو بن، تقشير، ديرمابن سالمون PDRN، وإعادة تشكيل البرازيلي.' },
  { q: 'ما هو عرض العيد 20% خصم؟',               a: 'تقدم يوفيا كلينيك خصم 20% على جميع الخدمات بمناسبة العيد. هذا عرض محدود المدة — احجزي الآن لتأمين موعدك بالسعر المخفض. تواصلي معنا عبر واتساب أو اتصلي على 0110 1003121.' },
  { q: 'كم تدوم النتائج؟',                        a: 'تتفاوت النتائج حسب العلاج. منشطات البشرة عادةً 6-9 أشهر، OxyGeneo يحافظ على التألق 4-6 أسابيع لكل جلسة، علاجات RF تظهر تحسناً تدريجياً خلال 2-3 أشهر.' },
  { q: 'هل العلاجات مؤلمة؟',                      a: 'راحة المريضة أولويتنا. يُطبق كريم تخدير قبل جميع علاجات الحقن والإبر. معظم المريضات يصفن الإجراءات بضغط خفيف وليس ألماً.' },
  { q: 'كيف أحجز موعداً؟',                        a: 'يمكنك الحجز عبر هذا الموقع، أو واتساب على 0110 1003121، أو بالاتصال بالعيادة. نحن متاحون الأحد – الخميس 10ص-8م والسبت 10ص-4م.' },
  { q: 'ماذا يجب تجنبه قبل العلاج؟',              a: 'لعلاجات الحقن والإبر، تجنبي مضادات التخثر والكحول وفيتامين E لمدة 48 ساعة قبل العلاج. للعلاجات التجميلية، احضري بوجه نظيف إن أمكن.' },
];

const AVAILABILITY = {
  0: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
  1: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
  2: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
  3: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
  4: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
  5: [],
  6: ['10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'],
};

const SERVICES_DEFAULT = [
  { id: 'skin-boosters',  cat: 'Injectables',    catAr: 'حقن',               name: 'Skin Boosters',            nameAr: 'منشطات البشرة',          img: 'ba_skin_booster_lips.jpg',  desc: 'Deep hydration injections that restore plumpness, elasticity, and a luminous glow — Standard and Advanced options available.', descAr: 'حقن ترطيب عميق تستعيد الامتلاء والمرونة والتألق — خيارات قياسية ومتقدمة.', duration: '30–45 min', durationMin: 45, price: 'Contact Clinic' },
  { id: 'aqua-facial',    cat: 'Facials',         catAr: 'فيشل',              name: 'Aqua Facial',              nameAr: 'أكوا فيشل',              img: 'ba_lip_booster.jpg',        desc: 'Deep cleansing and hydration treatment that unclogs pores, removes impurities, and leaves skin radiant and refreshed.', descAr: 'علاج تنظيف عميق وترطيب يفتح المسام ويزيل الشوائب ويترك البشرة متألقة.', duration: '60 min', durationMin: 60, price: 'Contact Clinic' },
  { id: 'oxygeneo',       cat: 'Facials',         catAr: 'فيشل',              name: 'OxyGeneo',                 nameAr: 'أوكسيجينيو',             img: 'service_rf.jpg',            desc: '3-in-1 super facial for exfoliation, oxygenation, and infusion. Your skin, fully alive.', descAr: 'فيشل ثلاثي في واحد للتقشير والأكسجين والتغذية. بشرتك، حية بالكامل.', duration: '60–75 min', durationMin: 75, price: 'Contact Clinic' },
  { id: 'hydra-plus',     cat: 'Facials',         catAr: 'فيشل',              name: 'Hydra-Plus Facial',        nameAr: 'فيشل هايدرا بلس',       img: 'ba_neck_booster.jpg',       desc: 'Intensive multi-step facial for ultimate glow — deep cleansing, hydration, and skin renewal.', descAr: 'فيشل متعدد المراحل للتألق الأقصى — تنظيف عميق وترطيب وتجديد البشرة.', duration: '75–90 min', durationMin: 90, price: 'Contact Clinic' },
  { id: 'rf-treatments',  cat: 'Body & Face',     catAr: 'الجسم والوجه',     name: 'RF Treatments',            nameAr: 'علاجات RF',              img: 'ba_dermapen.jpg',           desc: 'RF Face or Neck (skin tightening & contouring), RF Hands (rejuvenation), or Advance RF with Mesotherapy.', descAr: 'RF الوجه أو الرقبة (شد وتنحيف)، RF اليدين (تجديد)، أو RF متقدم مع ميزوثيرابي.', duration: '45–60 min', durationMin: 60, price: 'Contact Clinic' },
  { id: 'eye-revive',     cat: 'Eye Care',        catAr: 'العناية بالعيون',  name: 'Eye Revive',               nameAr: 'إحياء العيون',           img: 'service_oxygeneo.jpg',      desc: 'Basic: refreshing treatment for the delicate eye area. Advance: Basic + Dermapen application under the eye.', descAr: 'أساسي: علاج منعش لمنطقة العيون. متقدم: الأساسي مع ديرمابن تحت العين.', duration: '30–45 min', durationMin: 45, price: 'Contact Clinic' },
  { id: 'bio-pen',        cat: 'Skin Science',    catAr: 'علم البشرة',       name: 'Bio Pen',                  nameAr: 'بايو بن',                img: 'service_skin_boosters.jpg', desc: 'Standard treatment using the Bio Pen device for enhanced product absorption and skin rejuvenation.', descAr: 'علاج قياسي باستخدام جهاز Bio Pen لتعزيز امتصاص المنتجات وتجديد البشرة.', duration: '30–45 min', durationMin: 45, price: 'Contact Clinic' },
  { id: 'peeling',        cat: 'Skin Science',    catAr: 'علم البشرة',       name: 'Peeling',                  nameAr: 'تقشير',                  img: 'service_peeling.jpg',       desc: 'Professional chemical peeling: face or neck, hands, elbow or knees, bikini or underarms.', descAr: 'تقشير كيميائي احترافي: الوجه أو الرقبة، اليدين، الكوع أو الركبتين، البيكيني أو الإبط.', duration: '30–45 min', durationMin: 45, price: 'Contact Clinic' },
  { id: 'dermapen-pdrn',  cat: 'Skin Science',    catAr: 'علم البشرة',       name: 'Dermapen Salmon PDRN',     nameAr: 'ديرمابن سالمون PDRN',   img: 'ba_hydrafacial.jpg',        desc: 'Advanced microneedling with Salmon PDRN for skin regeneration, pore minimizing, and remarkably smooth skin.', descAr: 'حقن إبر متقدمة مع PDRN سالمون لتجديد البشرة وتصغير المسام.', duration: '45–60 min', durationMin: 60, price: 'Contact Clinic' },
  { id: 'bbb',            cat: 'Body Sculpting',  catAr: 'نحت الجسم',        name: 'Brazilian Butt Re-shaping', nameAr: 'إعادة تشكيل البرازيلي', img: 'ba_hydrafacial.jpg',        desc: 'Non-surgical body sculpting: fat stimulation & distribution, cellulite reduction, body contouring.', descAr: 'نحت الجسم غير الجراحي: تحفيز وتوزيع الدهون، تقليل السيلوليت، تنحيف الجسم.', duration: '45–60 min', durationMin: 60, price: 'Contact Clinic' },
];
