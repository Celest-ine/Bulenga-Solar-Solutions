/* =========================================================
   Bulenga Solar Solutions — script.js
   Shared layout (header/footer/WhatsApp float), icon set,
   product rendering helpers and quote/contact form handling.

   OFFICIAL CONTACT DETAILS — do not change:
   Phone:    +254 717202777
   WhatsApp: +256 771 032301
   Email:    adminteam@bulengaenergysolutions.co.ke
   ========================================================= */

const COMPANY = {
  name: "Bulenga Solar Solutions",
  phone: "+254 717202777",
  phoneHref: "tel:+254717202777",
  whatsapp: "+256 771 032301",
  whatsappNumber: "256771032301",
  email: "adminteam@bulengaenergysolutions.co.ke"
};

const QUOTE_WEBHOOK_URL = "https://formspree.io/f/xgaeddpk";

/* ---------------------------------------------------------
   ICONS (inline SVG, stroke-based, currentColor)
   --------------------------------------------------------- */
const ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" stroke-linecap="round"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5" stroke-linecap="round"/><path d="M3 17.5l9 5 9-5" stroke-linecap="round"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><rect x="14" y="14" width="7" height="7" rx="1.2"/></svg>',
  battery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="16" height="10" rx="2"/><path d="M21.5 10v4"/><path d="M8 12h4"/></svg>',
  plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 3v4"/><path d="M6 7h12v4a6 6 0 0 1-12 0V7z"/><path d="M12 17v4"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5c0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a2.5 2.5 0 0 0-.8 1.9c0 1.1.8 2.2 1 2.4.1.1 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1s.2-.9.1-1c0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6.5l9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10.5c0 6-8 11.5-8 11.5s-8-5.5-8-11.5a8 8 0 1 1 16 0z"/><circle cx="12" cy="10.5" r="2.6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5v-6L12 2z"/></svg>',
  tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3z"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17.5L12 3l9 14.5-9 3.5-9-3.5z"/><path d="M12 3v18"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13a9 9 0 0 1 18 0"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19a4 4 0 0 1-4 3h-2"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/></svg>'
};

function icon(name) { return ICONS[name] || ""; }

/* ---------------------------------------------------------
   NAV CONFIG
   --------------------------------------------------------- */
const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "about.html", label: "About", key: "about" },
  { href: "products.html", label: "Products", key: "products" },
  { href: "services.html", label: "Services", key: "services" },
  { href: "contact.html", label: "Contact", key: "contact" }
];

function waLink(message) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   HEADER
   --------------------------------------------------------- */
function renderHeader() {
  const current = document.body.dataset.page || "";
  const navHTML = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="${l.key === current ? "is-active" : ""}">${l.label}</a>`
  ).join("");

  return `
  <header class="site-header">
    <div class="site-header__inner">
      <a href="index.html" class="brand" aria-label="Bulenga Solar Solutions — Home">
        <img src="assets/images/bulenga-logo.jpg" alt="Bulenga Solar Solutions logo">
      </a>
      <nav class="primary-nav" aria-label="Primary">${navHTML}</nav>
      <div class="header-actions">
        <a class="icon-btn" href="${COMPANY.phoneHref}" aria-label="Call Bulenga Solar Solutions">${icon("phone")}</a>
        <a class="icon-btn" href="${waLink("Hello Bulenga Solar Solutions, I would like to enquire about your solar solutions.")}" target="_blank" rel="noopener" aria-label="WhatsApp Bulenga Solar Solutions">${icon("whatsapp")}</a>
        <a class="btn btn--primary btn--sm" href="contact.html#quote">Request a Quote</a>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}
      <div class="mobile-nav__actions">
        <a class="btn btn--outline btn--wide" href="${COMPANY.phoneHref}">${icon("phone")} Call Us</a>
        <a class="btn btn--cyan btn--wide" href="${waLink("Hello Bulenga Solar Solutions, I would like to enquire about your solar solutions.")}" target="_blank" rel="noopener">${icon("whatsapp")} WhatsApp Us</a>
        <a class="btn btn--primary btn--wide" href="contact.html#quote">Request a Quote</a>
      </div>
    </div>
  </header>`;
}

/* ---------------------------------------------------------
   FOOTER
   --------------------------------------------------------- */
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo-chip"><img src="assets/images/bulenga-logo.jpg" alt="Bulenga Solar Solutions logo"></div>
          <p>Bulenga Solar Solutions provides solar products and installation services in Kenya, offering Fox ESS solar and energy storage equipment for homes and businesses.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <a href="products.html?category=pv-inverter">PV Inverters</a>
          <a href="products.html?category=hybrid-inverter">Hybrid Inverters</a>
          <a href="products.html?category=battery">Batteries</a>
          <a href="products.html?category=ev-charger">EV Chargers</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="${COMPANY.phoneHref}">${COMPANY.phone}</a>
          <a href="${waLink("Hello Bulenga Solar Solutions, I would like to enquire about your solar solutions.")}" target="_blank" rel="noopener">WhatsApp: ${COMPANY.whatsapp}</a>
          <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Bulenga Solar Solutions. All rights reserved.</span>
        <span>Fox ESS products are supplied by Bulenga Solar Solutions in Kenya.</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------------------------------------------------
   WHATSAPP FLOAT
   --------------------------------------------------------- */
function renderWhatsappFloat() {
  return `<a class="whatsapp-float" href="${waLink("Hello Bulenga Solar Solutions, I would like to enquire about your solar solutions.")}" target="_blank" rel="noopener" aria-label="Chat with Bulenga Solar Solutions on WhatsApp">${icon("whatsapp")}</a>`;
}

/* ---------------------------------------------------------
   MOUNT LAYOUT + SHARED BEHAVIOUR
   --------------------------------------------------------- */
function mountLayout() {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const waMount = document.getElementById("whatsapp-float");
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();
  if (waMount) waMount.innerHTML = renderWhatsappFloat();

  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  if (mobileNav) {
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        mobileNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", mountLayout);

/* ---------------------------------------------------------
   PRODUCT RENDERING HELPERS (used on products.html / product.html / index.html)
   --------------------------------------------------------- */
function categoryCardHTML(cat) {
  const count = typeof getProductsByCategory === "function" ? getProductsByCategory(cat.id).length : "";
  return `
    <a class="category-card" href="products.html?category=${cat.id}">
      <div class="category-card__icon">${icon(cat.icon)}</div>
      <h3>${cat.name}</h3>
      <p>${cat.tagline}</p>
      <span class="category-card__link">Explore ${count ? `(${count})` : ""} ${icon("arrow")}</span>
    </a>`;
}

function productCardHTML(p) {
  const bg = typeof getImageBg === "function" ? getImageBg(p.image) : "#f2f5f6";
  const cat = typeof getCategoryById === "function" ? getCategoryById(p.category) : null;
  return `
    <article class="product-card">
      <div class="product-card__media" style="background:${bg}">
        <img src="${p.image}" alt="Fox ESS ${p.name} — ${p.seriesLabel}" loading="lazy">
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${cat ? cat.name : ""}</p>
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__series">${p.seriesLabel}</p>
        ${p.powerRange && p.powerRange !== "—" ? `<span class="product-card__power">${p.powerRange}</span>` : ""}
        <p class="product-card__desc">${p.shortDescription}</p>
        <div class="product-card__actions">
          <a class="btn btn--outline" href="product.html?id=${p.id}">View Product</a>
          <a class="btn btn--primary" href="contact.html?product=${encodeURIComponent(p.name)}#quote">Get a Quote</a>
        </div>
      </div>
    </article>`;
}

function renderProductGrid(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!products.length) {
    el.innerHTML = `<p style="color:var(--gray-500)">No products found in this category yet.</p>`;
    return;
  }
  el.innerHTML = products.map(productCardHTML).join("");
}

function renderCategoryGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el || typeof PRODUCT_CATEGORIES === "undefined") return;
  el.innerHTML = PRODUCT_CATEGORIES.map(categoryCardHTML).join("");
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------------------------------------------------------
   FORM HANDLING (Request a Quote / Contact)
   --------------------------------------------------------- */
function populateProductOptions(selectEl) {
  if (!selectEl || typeof PRODUCT_CATEGORIES === "undefined") return;
  let html = `<option value="">General enquiry / not sure yet</option>`;
  PRODUCT_CATEGORIES.forEach(cat => {
    const items = getProductsByCategory(cat.id);
    if (!items.length) return;
    html += `<optgroup label="${cat.name}">`;
    items.forEach(p => { html += `<option value="${p.name}">${p.name} — ${p.seriesLabel}</option>`; });
    html += `</optgroup>`;
  });
  selectEl.innerHTML = html;

  const preselect = getQueryParam("product");
  if (preselect) {
    const opt = Array.from(selectEl.options).find(o => o.value === preselect);
    if (opt) selectEl.value = preselect;
  }
}

async function sendFormData(payload) {
  if (!QUOTE_WEBHOOK_URL || QUOTE_WEBHOOK_URL === "YOUR_FORM_ENDPOINT_HERE") {
    throw new Error("ENDPOINT_NOT_CONFIGURED");
  }

  const form = document.getElementById("quoteForm");
  const formData = new FormData(form);
  formData.append("form_type", payload.form_type);

  const response = await fetch(QUOTE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: formData
  });

  if (!response.ok) throw new Error(`Form endpoint responded with status ${response.status}`);
  return response;
}

function setFormLoading(form, isLoading) {
  const btn = form.querySelector("button[type='submit']");
  if (btn) btn.classList.toggle("is-loading", isLoading);
  form.querySelectorAll("input, select, textarea, button").forEach(el => {
    if (isLoading) el.setAttribute("disabled", "disabled");
    else el.removeAttribute("disabled");
  });
}

function showFormStatus(statusEl, message, type) {
  statusEl.textContent = message;
  statusEl.classList.remove("is-success", "is-error");
  statusEl.classList.add(type === "success" ? "is-success" : "is-error");
  statusEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[required]").forEach(field => {
    const invalid = !(field.value || "").trim();
    field.classList.toggle("is-invalid", invalid);
    if (invalid) valid = false;
  });
  return valid;
}

function clearInvalidOnInput(form) {
  form.querySelectorAll("input, select, textarea").forEach(field => {
    field.addEventListener("input", () => field.classList.remove("is-invalid"));
    field.addEventListener("change", () => field.classList.remove("is-invalid"));
  });
}

function attachQuoteForm() {
  const form = document.getElementById("quoteForm");
  const statusEl = document.getElementById("quoteStatus");
  if (!form) return;
  clearInvalidOnInput(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.classList.remove("is-success", "is-error");
    if (!validateForm(form)) {
      showFormStatus(statusEl, "Please fill in all required fields before submitting.", "error");
      return;
    }
    const payload = {
      form_type: "quote_request",
      full_name: form.full_name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      location: form.location.value.trim(),
      property_type: form.property_type.value,
      product_interest: form.product_interest.value,
      energy_needs: form.energy_needs.value.trim(),
      message: form.message.value.trim()
    };
    setFormLoading(form, true);
    try {
      await sendFormData(payload);
      showFormStatus(statusEl, "Thank you. Your quote request has been received — a member of the Bulenga Solar Solutions team will contact you shortly.", "success");
      form.reset();
      populateProductOptions(document.getElementById("qf-product"));
    } catch (err) {
      if (err.message === "ENDPOINT_NOT_CONFIGURED") {
        showFormStatus(statusEl, `This form isn't yet connected to a backend. In the meantime, please reach us directly by phone (${COMPANY.phone}), WhatsApp (${COMPANY.whatsapp}), or email (${COMPANY.email}).`, "error");
      } else {
        showFormStatus(statusEl, `Something went wrong sending your request. Please try again, or contact us directly at ${COMPANY.email}.`, "error");
      }
    } finally {
      setFormLoading(form, false);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("qf-product");
  if (productSelect) populateProductOptions(productSelect);
  attachQuoteForm();
});
