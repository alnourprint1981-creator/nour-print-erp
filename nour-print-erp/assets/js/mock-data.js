/* mock-data.js — بيانات تجريبية ثابتة تحاكي قاعدة البيانات المستقبلية
   كل الأسعار قيم افتراضية قابلة للتعديل مستقبلًا من لوحة الإدارة (CON-06) */

var customers = [
  { id: 1, code: "C-001", name: "شركة النور للتجارة", company: "النور للتجارة", type: "شركة", phone: "01001234567", whatsapp: "01001234567", email: "info@alnoor.com", address: "القاهرة - مدينة نصر", notes: "عميل دائم" },
  { id: 2, code: "C-002", name: "مصنع الحياة للأغذية", company: "الحياة فود", type: "مصنع", phone: "01112223334", whatsapp: "01112223334", email: "sales@elhayat.com", address: "العاشر من رمضان", notes: "" },
  { id: 3, code: "C-003", name: "متجر روز للعطور", company: "روز", type: "متجر", phone: "01223334445", whatsapp: "01223334445", email: "rose@shop.com", address: "المعادي", notes: "يهتم بعلب العطور الفاخرة" },
  { id: 4, code: "C-004", name: "أ/ محمد سمير", company: "—", type: "فرد", phone: "01005556677", whatsapp: "01005556677", email: "m.samir@mail.com", address: "الجيزة", notes: "" },
  { id: 5, code: "C-005", name: "شركة لمسة للتجميل", company: "لمسة", type: "متجر إلكتروني", phone: "01556667788", whatsapp: "01556667788", email: "contact@lamsa.com", address: "التجمع الخامس", notes: "عميل جديد" }
];

/* الموديلات التأسيسية: HC-01، HC-02 (المرجعي للتسعير)، AC-01 — مقاساتها تُدخل حسب الطلب (FR-MODEL-03) */
var products = [
  { code: "HC-01", name: "قاع وغطاء هارد كوفر",   category: "هارد كوفر", description: "موديل قاع وغطاء فقط" },
  { code: "HC-02", name: "قاع وغطاء وقاعدة هارد كوفر", category: "هارد كوفر", description: "الموديل المرجعي للتسعير" },
  { code: "AC-01", name: "Large Custom Box",      category: "علب مخصصة", description: "علب كبيرة حسب الطلب" }
];

var materials = [
  { code: "M-001", name: "كرتون مقوى 2مم",   type: "كرتون",        unit: "ورقة", purchasePrice: 30,  avgCost: 30, minStock: 50,  currentStock: 480, supplier: "مؤسسة الورق الحديث", location: "مخزن رئيسي" },
  { code: "M-002", name: "ورق كوشيه 300جم", type: "ورق",          unit: "ورقة", purchasePrice: 8,   avgCost: 8,  minStock: 200, currentStock: 1500, supplier: "مؤسسة الورق الحديث", location: "مخزن رئيسي" },
  { code: "M-003", name: "ورق نباتي",        type: "ورق نباتي",    unit: "كجم",  purchasePrice: 120, avgCost: 120,minStock: 10,  currentStock: 85,  supplier: "شركة النيل للورق",  location: "مخزن رئيسي" },
  { code: "M-004", name: "ورق أبيض مقوى",    type: "ورق أبيض",     unit: "ورقة", purchasePrice: 12,  avgCost: 12, minStock: 100, currentStock: 90,  supplier: "شركة النيل للورق",  location: "مخزن 2" },
  { code: "M-005", name: "غراء حراري",       type: "غراء",         unit: "كجم",  purchasePrice: 90,  avgCost: 90, minStock: 5,   currentStock: 20,  supplier: "مكتب الخامات",      location: "مخزن 2" },
  { code: "M-006", name: "مخمل أحمر",        type: "مخمل",         unit: "متر",  purchasePrice: 45,  avgCost: 45, minStock: 20,  currentStock: 110, supplier: "مكتب الخامات",      location: "مخزن رئيسي" },
  { code: "M-007", name: "إسفنج 3مم",       type: "إسفنج",        unit: "متر",  purchasePrice: 25,  avgCost: 25, minStock: 20,  currentStock: 12,  supplier: "مكتب الخامات",      location: "مخزن 2" },
  { code: "M-008", name: "فويل ذهبي",        type: "فويل",         unit: "رول",  purchasePrice: 350, avgCost: 350,minStock: 3,   currentStock: 15,  supplier: "شركة النيل للورق",  location: "مخزن رئيسي" },
  { code: "M-009", name: "سلوفان شفاف",      type: "سلوفان",       unit: "رول",  purchasePrice: 280, avgCost: 280,minStock: 3,   currentStock: 8,   supplier: "شركة النيل للورق",  location: "مخزن رئيسي" },
  { code: "M-010", name: "مغناطيس شريط",     type: "مغناطيس",      unit: "متر",  purchasePrice: 60,  avgCost: 60, minStock: 10,  currentStock: 40,  supplier: "مكتب الخامات",      location: "مخزن 2" }
];

/* القيم الافتراضية للتسعير — تُعدَّل مستقبلًا من شاشة الإعدادات فقط، لا تُثبَّت في الكود (CON-06) */
var pricingDefaults = {
  cardboardSheetPrice: 30,   // سعر ورقة الكرتون
  paperSheetPrice: 8,        // سعر ورقة الورق
  printingPerBox: 1,         // تكلفة طباعة الوحدة
  laborPerBox: 5,            // عمالة الوحدة
  electricityPerBox: 0.5,    // كهرباء وتشغيل الوحدة
  gluePerBox: 0.5,           // غراء الوحدة
  spongeVelvetPerBox: 5,     // إسفنج ومخمل الوحدة
  dieCuttingMachineCost: 1000, // تكلفة السكينة (تُوزع على الكمية)
  breakingCost: 200,         // تكلفة التكسير للأمر كاملًا
  miscExpenses: 100,         // مصروفات متنوعة للأمر
  wastePercentDefault: 5,    // نسبة الهالك الافتراضية %
  profitMarginDefault: 25    // هامش الربح الافتراضي %
};

var machines = [
  { name: "هيدلبرج سبيد ماستر 4 ألوان", type: "أوفست",   section: "الطباعة",   capacity: "8000 ورقة/ساعة", opCost: 300, status: "تعمل" },
  { name: "ماكينة قص بولار",           type: "قص",      section: "التشطيب",   capacity: "—",              opCost: 80,  status: "تعمل" },
  { name: "ماكينة تكسير يدوية",        type: "تكسير",   section: "التشطيب",   capacity: "—",              opCost: 50,  status: "صيانة" },
  { name: "ماكينة لصق هارد كوفر",      type: "لصق",     section: "الهارد كوفر", capacity: "—",            opCost: 100, status: "تعمل" },
  { name: "ماكينة هوت فويل",           type: "فويل",    section: "التشطيب",   capacity: "—",              opCost: 150, status: "متوقفة" }
];

var quotations = [
  { id: "Q-2026-001", customer: "شركة النور للتجارة", product: "HC-02", qty: 100, total: 8150,  status: "مقبول",      date: "2026-09-01" },
  { id: "Q-2026-002", customer: "متجر روز للعطور",   product: "AC-01", qty: 500, total: 26000, status: "قيد الانتظار", date: "2026-09-03" },
  { id: "Q-2026-003", customer: "مصنع الحياة للأغذية", product: "HC-01", qty: 300, total: 14200, status: "مرسل للعميل", date: "2026-09-04" },
  { id: "Q-2026-004", customer: "شركة لمسة للتجميل", product: "AC-01", qty: 200, total: 11900, status: "مسودة",       date: "2026-09-05" },
  { id: "Q-2026-005", customer: "أ/ محمد سمير",       product: "HC-02", qty: 50,  total: 4800,  status: "منتهي",       date: "2026-08-20" }
];

var jobs = [
  { id: "J-2026-010", customer: "شركة النور للتجارة", product: "HC-02", qty: 100, priority: "عاجل جدًا", stage: 4, stages: ["التصميم","ما قبل الطباعة","الطباعة","التشطيب","القص/التكسير","التجميع","الجودة","التعبئة","التسليم"], machine: "هيدلبرج 4 ألوان", due: "2026-09-10", status: "جاري التنفيذ" },
  { id: "J-2026-011", customer: "مصنع الحياة للأغذية", product: "HC-01", qty: 300, priority: "عاجل", stage: 2, stages: ["التصميم","ما قبل الطباعة","الطباعة","التشطيب","القص/التكسير","التجميع","الجودة","التعبئة","التسليم"], machine: "هيدلبرج 4 ألوان", due: "2026-09-14", status: "جاري التنفيذ" },
  { id: "J-2026-012", customer: "شركة لمسة للتجميل", product: "AC-01", qty: 200, priority: "عادي", stage: 0, stages: ["التصميم","ما قبل الطباعة","الطباعة","التشطيب","القص/التكسير","التجميع","الجودة","التعبئة","التسليم"], machine: "—", due: "2026-09-18", status: "لم يبدأ" },
  { id: "J-2026-013", customer: "متجر روز للعطور", product: "AC-01", qty: 500, priority: "عادي", stage: 8, stages: ["التصميم","ما قبل الطباعة","الطباعة","التشطيب","القص/التكسير","التجميع","الجودة","التعبئة","التسليم"], machine: "هيدلبرج 4 ألوان", due: "2026-09-06", status: "جاهز للتسليم" }
];

var suppliers = [
  { name: "مؤسسة الورق الحديث", phone: "01000001111", whatsapp: "01000001111", address: "القاهرة", items: "كرتون، ورق", lastPrice: 30,  lastPurchase: "2026-08-28", totalPurchases: 45000 },
  { name: "شركة النيل للورق",   phone: "01111112222", whatsapp: "01111112222", address: "6 أكتوبر", items: "ورق نباتي، فويل، سلوفان", lastPrice: 350, lastPurchase: "2026-08-30", totalPurchases: 62000 },
  { name: "مكتب الخامات",       phone: "01222223333", whatsapp: "01222223333", address: "العتبة", items: "غراء، مخمل، إسفنج، مغناطيس", lastPrice: 90, lastPurchase: "2026-09-02", totalPurchases: 18000 }
];

var users = [
  { name: "أحمد", role: "مدير",   permissions: "صلاحية كاملة" },
  { name: "سارة", role: "مبيعات", permissions: "العملاء، عروض الأسعار، الطلبات" },
  { name: "محمود", role: "إنتاج", permissions: "أوامر التشغيل، الإنتاج، المراحل" },
  { name: "خالد", role: "مخزن",   permissions: "المخزون، الصرف، الاستلام" },
  { name: "منى",  role: "محاسب",  permissions: "الفواتير، المصروفات، التقارير المالية" },
  { name: "كريم", role: "مصمم",   permissions: "التصميم، الملفات، الاعتماد" }
];


/* ============ حفظ تعديلات الخامات محليًا (Session persistence) ============
   التعديلات/الإضافات/الحذف تُحفظ في localStorage فتبقى بعد إعادة فتح الصفحات،
   وتُقرأ تلقائيًا هنا قبل استخدام أي صفحة للمصفوفة (تنعكس على التسعير أيضًا).
   عند الحاجة لاسترجاع البيانات الأصلية: امسح مفتاح nour_materials_v1 من إعدادات المتصفح. */
(function () {
  var KEY = "nour_materials_v1";
  try {
    var stored = localStorage.getItem(KEY);
    if (stored) { materials = JSON.parse(stored); }
  } catch (e) { /* localStorage غير متاح (وضع خاص مثلًا) — نكمل بالبيانات الافتراضية */ }
  window.saveMaterials = function () {
    try { localStorage.setItem(KEY, JSON.stringify(materials)); return true; }
    catch (e) { alert("تعذّر الحفظ المحلي في هذا المتصفح — ستبقى التعديلات لهذه الجلسة فقط"); return false; }
  };
  window.resetMaterials = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  };
})();
