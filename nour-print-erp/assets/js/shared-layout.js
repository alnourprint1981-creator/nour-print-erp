/* shared-layout.js — المكوّن المشترك الوحيد (Sidebar + Header + Breadcrumbs)
   يطبّق FR-UI-03 و FR-UI-08 ومبدأ عدم التكرار */
(function () {
  var NAV = [
    { section: "الرئيسية" },
    { page: "dashboard",  label: "لوحة التحكم",        href: "dashboard.html" },
    { section: "المبيعات والعملاء" },
    { page: "customers",  label: "العملاء",             href: "customers.html" },
    { page: "quotations", label: "عروض الأسعار",        href: "quotations.html" },
    { page: "pricing",    label: "التسعير",             href: "pricing.html" },
    { page: "jobs",       label: "أوامر التشغيل",       href: "jobs.html" },
    { section: "المنتجات والإنتاج" },
    { page: "products",   label: "المنتجات والموديلات", href: "products.html" },
    { page: "production", label: "الإنتاج",             href: "production.html" },
    { page: "printing",   label: "الطباعة",             href: "printing.html" },
    { page: "finishing",  label: "التشطيبات",           href: "finishing.html" },
    { page: "hardcover",  label: "الهارد كوفر",         href: "hardcover.html" },
    { section: "المخزون" },
    { page: "materials",  label: "الخامات",             href: "materials.html" },
    { page: "inventory",  label: "المخزون",             href: "inventory.html" },
    { page: "suppliers",  label: "الموردون",            href: "suppliers.html" },
    { section: "المالية والتقارير" },
    { page: "invoices",   label: "الفواتير",            href: "invoices.html" },
    { page: "expenses",   label: "المصروفات",           href: "expenses.html" },
    { page: "reports",    label: "التقارير",            href: "reports.html" },
    { section: "النظام" },
    { page: "users",      label: "المستخدمون",          href: "users.html" },
    { page: "settings",   label: "الإعدادات",           href: "settings.html" }
  ];

  window.renderAppShell = function (options) {
    options = options || {};
    var active = options.activePage || "";
    var crumbs = options.breadcrumbs || ["الرئيسية"];

    // Header
    var header = document.createElement("header");
    header.id = "app-header";
    header.innerHTML =
      '<button id="menu-toggle" aria-label="القائمة">☰</button>' +
      '<div class="logo"><img src="assets/img/logo.png" alt="مطبعة النور"><span>نظام إدارة مطبعة النور</span></div>' +
      '<div class="search"><input type="search" placeholder="بحث عام: عميل، منتج، عرض سعر، أمر تشغيل، خامة، مورد، فاتورة..." data-fr="FR-UI-04"></div>' +
      '<div class="user">مرحبًا، <b>أحمد</b> — مدير النظام</div>';
    document.body.insertBefore(header, document.body.firstChild);

    // Sidebar
    var aside = document.createElement("aside");
    aside.id = "app-sidebar";
    var html = "";
    NAV.forEach(function (item) {
      if (item.section) { html += '<div class="nav-section">' + item.section + '</div>'; }
      else {
        html += '<a href="' + item.href + '"' + (item.page === active ? ' class="active"' : "") +
                ' data-page="' + item.page + '"><span>•</span><span>' + item.label + '</span></a>';
      }
    });
    aside.innerHTML = html;

    // Overlay لإغلاق القائمة على الموبايل
    var overlay = document.createElement("div");
    overlay.id = "sidebar-overlay";
    document.body.appendChild(overlay);

    // زر القائمة (☰) للموبايل
    var toggle = header.querySelector("#menu-toggle");
    function closeSidebar(){ aside.classList.remove("open"); overlay.classList.remove("show"); }
    if (toggle) {
      toggle.addEventListener("click", function () {
        aside.classList.toggle("open");
        overlay.classList.toggle("show");
      });
    }
    overlay.addEventListener("click", closeSidebar);
    aside.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeSidebar();
    });

    document.body.insertBefore(aside, header.nextSibling);

    // Breadcrumbs
    var nav = document.createElement("div");
    nav.id = "breadcrumbs";
    nav.innerHTML = crumbs.map(function (c, i) {
      return i === crumbs.length - 1 ? "<b>" + c + "</b>" : "<span>" + c + "</span><span>‹</span>";
    }).join("");
    var content = document.getElementById("page-content");
    if (content) document.body.insertBefore(nav, content);

    // CSS
    var link = document.createElement("link");
    link.rel = "stylesheet"; link.href = "assets/css/style.css";
    document.head.appendChild(link);
  };
})();
