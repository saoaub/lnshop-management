// ================================================================
// ★★★ SHOP_CONFIG.js — ຕັ້ງຄ່າຮ້ານທັງໝົດທີ່ນີ້ ★★★
// ================================================================
// 📌 ວິທີໃຊ້:
//   - ປ່ຽນຄ່າໃນ SHOP_CONFIG ລຸ່ມນີ້ຕາມຂໍ້ມູນຮ້ານຂອງລູກຄ້າ
//   - ບໍ່ຕ້ອງແກ້ໄຂ HTML ຫຼື Code.gs ຫຍັງ — ທຸກຢ່າງດຶງຈາກໄຟລ໌ນີ້
//
// 📂 Deploy:
//   - ວາງໄຟລ໌ນີ້ຄຽງຄູ່ index.html ໃນ GitHub repo ສ່ວນ shop
//   - ວາງໃນ management repo ຄຽງ management.html ດ້ວຍ
// ================================================================

const SHOP_CONFIG = {

  // ─── 1. ຂໍ້ມູນຮ້ານ ────────────────────────────────────────────
  shopName:   "LN SHOP ເສື້ອຜ້າສາວອວບ",                        // ✏️ ຊື່ຮ້ານ
  slogan:     "ສິນຄ້າຄຸນນະພາບດີ · 👚ຂາຍເສື້ອຜ້າສາວອວບລາຄາຖືກ 60-100kg👚", // ✏️ ເສື້ອຜ້າ ສາວອວບ ງາມໆ
  logoUrl: "https://drive.google.com/thumbnail?id=1GktXwL8rKFVdd_zzkfHGYLco7H9TN-GJ&sz=w200", // ✏️ Link ຮູບໂລໂກ້

  // ─── 2. ຊ່ອງທາງຕິດຕໍ່ ─────────────────────────────────────────
   phone:      "020 52344599",                       // ✏️ ເບີໂທ (ສຳລັບ WhatsApp)
  whatsappLink: "https://wa.link/+8562052595299",         // ✏️ ລິງ WhatsApp

  social: {
    facebook:  { url: "https://www.facebook.com/profile.php?id=61552951381519" },
    tiktok:    { url: "https://www.tiktok.com/@review_shopshop?_r=1&_t=ZS-97WXFZRMqUX" },
whatsapp:  { url: "https://api.whatsapp.com/send/?phone=8562052344599&text&type=phone_number&app_absent=0" },
whatsapp2: { url: "https://api.whatsapp.com/send/?phone=8562052654258&text&type=phone_number&app_absent=0" },
  },

  // ─── 3. ສີໂທນ ─────────────────────────────────────────────────
  // 💡 ປ່ຽນຊຸດສີທີ່ 1 ຊຸດດຽວ — ທຸກໜ້າຈະ update ໂດຍອັດຕະໂນມັດ
  primaryColor:    "#FFBBDA",  // ✏️ ສີຫຼັກ (hex)
  primaryColorRgb: "255,187,218", // ✏️ RGB ຂອງສີຫຼັກ (ຕ້ອງກົງກັນ)
  secondaryColor:  "#ca9681",  // ✏️ ສີຮອງ
  headerBgColor: "#FFBBDA",  // ✏️ ສີ Header (ໂດຍທົ່ວໄປ = primaryColor)

  // ─── 4. QR ການຊຳລະ ────────────────────────────────────────────
  qrPaymentUrl: "https://drive.google.com/uc?export=view&id=1SkzdkJEzoyYVsB1DkiJ0dbq4Araeh20j",
  // ✏️ ອັບໂຫຼດຮູບ QR ໃສ່ Google Drive → ເອົາ File ID ໃສ່ YOUR_QR_IMAGE_ID

  // ─── 5. API URLs (ຈາກ Google Apps Script) ─────────────────────
  // ❗ ຈາກ deploy Code_Backend.gs ໃນ Backend Sheet
  backendApiUrl: "https://script.google.com/macros/s/AKfycbyDPR3ZWC91z386AIYNvyHtt8LpUpflX8xE59aR7rJ7XuoR59p7cJkCnWFrPNxvk8L_/exec",
  // ❗ ຈາກ deploy Code_Order.gs ໃນ Customer Sheet
  orderApiUrl:   "https://script.google.com/macros/s/AKfycbyODTho_7hiU1LzGTBKAhkXa_9GhYJwXMLxOAHaP9wq-eI6aXd1fkCgpOAO5ukn44ee/exec",

  // ─── 6. Admin ──────────────────────────────────────────────────
  adminPassword: "lnshop2026", // ✏️ ລະຫັດຜ່ານ Admin (ຄວນປ່ຽນ!)

  // ─── 7. ຂົນສົ່ງ (ສາມາດເພີ່ມ/ລຶບ ຫຼື ຢຸດຊົ່ວຄາວໄດ້) ────────────
  // suspended: true = ຢຸດຮັບຝາກຊົ່ວຄາວ
  shippingOptions: [
    { value: "ອານຸສິດ",   label: "✈️ ອານຸສິດ",   suspended: false },
    { value: "ຮຸ່ງອາລຸນ", label: "🚌 ຮຸ່ງອາລຸນ",  suspended: false },
    { value: "ຢູ່ນິເທວ",      label: "🚚 ຢູ່ນິເທວ",       suspended: false },
  ],

  // ─── 8. ວິທີຊຳລະ ──────────────────────────────────────────────
 paymentOptions: [
  { value: "ໂອນຈ່າຍ", icon: "💳", label: "ໂອນຈ່າຍ", desc: "ສະແກນ QR", requireSlip: true },
  { value: "COD", icon: "💵", label: "COD (ຈ່າຍປາຍທາງ)", desc: "ສຳລັບ ອານຸສິດ", requireSlip: false },
],

  // ─── 9. Marquee / Ticker ──────────────────────────────────────
  marqueeItems: [
    "✅ ສິນຄ້າຕົງປົກ 100%",
    "🚚 ສົ່ງທຸກແຂວງ ທົ່ວລາວ",
    "💳 ຮັບໂອນ BCEL One ແລະ ທະນາຄານອື່ນໆ",
    "📱 ສອບຖາມ WhatsApp ໄດ້ຕະຫຼອດນະ",
  ],

  // ─── 10. ແຂວງ/ເມືອງ (ລາວ) ─────────────────────────────────────
  districts: {
    "ວຽງຈັນ (ນະຄອນຫຼວງ)": ["ຈັນທະບູລີ","ໄຊເສດຖາ","ສີໂຄດຕະບອງ","ສີສັດຕະນາກ","ຫາດຊາຍຟອງ","ນາຊາຍທອງ","ໄຊທານີ","ສັງທອງ","ປາກງື່ມ"],
    "ວຽງຈັນ (ແຂວງ)": ["ໂພນໂຮງ","ທຸລະຄົມ","ກາສີ","ວັງວຽງ","ແມດ","ຫີນເຫີບ","ແກ້ວອຸດົມ","ເຟືອງ","ຊະນາຄາມ","ວຽງຄຳ","ໝື່ນ"],
    "ບໍລິຄຳໄຊ": ["ປາກກະດິງ","ທ່າພະບາດ","ປາກຊັນ","ບໍລິຄັນ","ໄຊຈຳພອນ","ຄຳເກີດ","ເວຍງທອງ"],
    "ຄຳມ່ວນ": ["ທ່າແຂກ","ມະຫາໄຊ","ໜອງບົກ","ຫິນບູນ","ຍົມມະລາດ","ບົວລະພາ","ນາກາຍ","ເຊບັ້ງໄຟ","ໄຊບົວທອງ","ຄູນຄຳ"],
    "ສະຫວັນນະເຂດ": ["ໄກສອນ ພົມວິຫານ","ອຸທຸມພອນ","ອາດສະພັງທອງ","ພິນ","ເຊໂປນ","ນອງ","ທ່າປາງທອງ","ສອງຄອນ","ຈຳພອນ","ຊານຸບູລີ","ໄຊບູລີ","ວິລະບູລີ"],
    "ສາລະວັນ": ["ສາລະວັນ","ລະຄອນເພັງ","ວາປີ","ເລົ່າງາມ","ຕຸ້ມລານ","ຕະໂອ້ຍ","ຄົງເຊໂດນ","ສະມ້ວຍ"],
    "ເຊກອງ": ["ທ່າແຕງ","ລະມາມ","ກະລຸມ","ດັກຈຶງ"],
    "ຈຳປາສັກ": ["ປາກເຊ","ຊະນະສົມບູນ","ບາຈຽງຈະເລີນສຸກ","ປາກຊ່ອງ","ປະທຸມພອນ","ໂພນທອງ","ຈຳປາສັກ","ສຸຂຸມາ","ມູນລະປະໂມກ","ໂຂງ"],
    "ອັດຕະປື": ["ໄຊເສດຖາ","ສາມັກຄີໄຊ","ສະໜາມໄຊ","ຊານໄຊ","ພູວົງ"],
    "ຫຼວງພະບາງ": ["ຫຼວງພະບາງ","ຊຽງເງິນ","ນານ","ປາກອູ","ນໍ້າບາກ","ງອຍ","ປາກແຊງ","ໂພນໄຊ","ຈອມເພັດ","ວຽງຄຳ","ພູຄູນ","ໂພນທອງ"],
    "ຫຼວງນໍ້າທາ": ["ຫຼວງນໍ້າທາ","ສິງ","ລອງ","ວຽງພູຄາ","ນາແລ"],
    "ອຸດົມໄຊ": ["ໄຊ","ຫລາ","ນາໝໍ້","ງາ","ແບງ","ຮຸນ","ປາກແບງ"],
    "ບໍ່ແກ້ວ": ["ຫ້ວຍຊາຍ","ຕົ້ນເຜິ້ງ","ເມິງ","ຜາອຸດົມ","ປາກທາ"],
    "ຜົ້ງສາລີ": ["ບຸນໃຕ້","ຂວາ","ໃໝ່","ຍອດອູ","ຜົ້ງສາລີ","ສຳພັນ","ບຸນເໜືອ"],
    "ຫົວພັນ": ["ຊຳເໜືອ","ຊຽງຄໍ້","ຮ້ວມ","ວຽງໄຊ","ຫົວເມືອງ","ຊຳໃຕ້","ສົບເບົາ","ແອດ","ກວັນ","ຊ່ອນ"],
    "ໄຊສົມບູນ": ["ລ້ອງແຈ້ງ","ທ່າໂທມ","ອະນຸວົງ","ລອງຊານ","ຫົມ"],
    "ໄຊຍະບູລີ": ["ບໍ່ແຕນ","ຫົງສາ","ແກ່ນທ້າວ","ຄອບ","ເງິນ","ປາກລາຍ","ເພຍງ","ທຸ່ງມີໄຊ","ໄຊຍະບູລີ","ຊຽງຮ່ອນ","ໄຊສະຖານ"],
    "ຊຽງຂວາງ": ["ແປກ (ໂພນສະຫວັນ)","ຄຳ","ໜອງແຮດ","ຄູນ","ໝອກ","ພູກູດ","ຜາໄຊ"],
  },

  // ─── 11. ຮູບແບບ UI ─────────────────────────────────────────────
  defaultGridCols:  4,     // ຖັນສິນຄ້າ (management): 3, 4, 5, 6
  fontSize:         14,    // ຂະໜາດຕົວໜັງສື (px)
  borderRadius:     14,    // ຄວາມໂຄ້ງ (px)
  timezone:         "Asia/Vientiane",
  countryPrefix:    "85620", // ລະຫັດໂທລະສັບ (+856 + 20)
};

// ================================================================
// ★ applyShopConfig() — ໃຊ້ໃນທຸກໜ້າ HTML
//   ເອີ້ນໃນ DOMContentLoaded ເພື່ອ apply ຂໍ້ມູນ/ສີ/ໂລໂກ
// ================================================================
function applyShopConfig() {
  const C = SHOP_CONFIG;

  // --- ສີ ---
  document.documentElement.style.setProperty("--primary",      C.primaryColor);
  document.documentElement.style.setProperty("--primary-rgb",  C.primaryColorRgb);
  document.documentElement.style.setProperty("--secondary",    C.secondaryColor);
  document.documentElement.style.setProperty("--font-size-base", C.fontSize + "px");
  document.documentElement.style.setProperty("--radius-lg",    C.borderRadius + "px");
  document.documentElement.style.setProperty("--radius-md",    Math.max(0, C.borderRadius - 4) + "px");
  document.documentElement.style.setProperty("--radius-sm",    Math.max(0, C.borderRadius - 8) + "px");
  document.documentElement.style.setProperty("--grid-cols",    C.defaultGridCols);

  // --- ຊື່ / ໂລໂກ ---
  document.querySelectorAll("[data-shop-name]").forEach(el => el.textContent = C.shopName);
  document.querySelectorAll("[data-shop-slogan]").forEach(el => el.textContent = C.slogan);
  document.querySelectorAll("[data-shop-logo]").forEach(el => el.src = C.logoUrl);
  document.title = C.shopName;

  // --- Header Background ---
  document.querySelectorAll(".site-header, .header, #app-header").forEach(el => {
    el.style.background = C.headerBgColor;
  });
}

// ================================================================
// ★ Utility Functions (ໃຊ້ຮ່ວມທຸກໜ້າ)
// ================================================================
function pad2(n) { return String(n).padStart(2, "0"); }

function fN(n) { return Number(n || 0).toLocaleString(); }

function toYMD(d) {
  if (!d) return "";
  const s = String(d).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.substring(0, 10);
  const dt = new Date(s);
  if (!isNaN(dt)) return `${dt.getFullYear()}-${pad2(dt.getMonth() + 1)}-${pad2(dt.getDate())}`;
  return "";
}

function fmtDT(d) {
  const ymd = toYMD(d);
  if (!ymd) return "-";
  const [y, m, day] = ymd.split("-");
  return `${day}/${m}/${y}`;
}

function fmtDTFull(d) {
  if (!d) return "-";
  const s = String(d).trim();
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(s)) {
    const [y, m, day] = s.substring(0, 10).split("-");
    const t = s.substring(11, 16);
    return `${day}/${m}/${y} ${t}`;
  }
  return fmtDT(s);
}

function convertGD(url) {
  if (!url || !url.trim()) return "";
  url = url.trim();
  if (url.includes("drive.google.com/uc") || url.includes("thumbnail")) return url;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w300`;
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2) return `https://drive.google.com/thumbnail?id=${m2[1]}&sz=w300`;
  return url;
}

function driveFileId(url) {
  if (!url) return "";
  const m = String(url).match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return m[1];
  const m2 = String(url).match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2) return m2[1];
  return "";
}

function driveThumb(url, size) {
  const id = driveFileId(url);
  if (!id) return url || "";
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size || 400}`;
}

function toWaPhone(rawPhone) {
  const digits = String(rawPhone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.indexOf("856") === 0) return digits;
  const last8 = digits.length > 8 ? digits.slice(-8) : digits;
  return SHOP_CONFIG.countryPrefix + last8;
}

function waLink(rawPhone) {
  const p = toWaPhone(rawPhone);
  return p ? `https://wa.me/${p}` : "";
}

function escHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const noImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23bbb' font-size='10'%3Eບໍ່ມີ%3C/text%3E%3C/svg%3E";

// ─── LocalStorage Settings (Management page) ──────────────────
const SETTINGS_KEY = "shoptemplate_v1";
function getSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveSettings(o) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(o)); }

// ─── API Client ────────────────────────────────────────────────
const api = {
  async get(action, params = {}, useOrderApi = false) {
    const url = useOrderApi ? SHOP_CONFIG.orderApiUrl : SHOP_CONFIG.backendApiUrl;
    const qs = new URLSearchParams({ action, ...params }).toString();
    const res = await fetch(`${url}?${qs}`, { method: "GET", redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success === false) throw new Error(json.error || "API error");
    return json.data !== undefined ? json.data : json;
  },

  async post(action, body = {}, useOrderApi = false) {
    const url = useOrderApi ? SHOP_CONFIG.orderApiUrl : SHOP_CONFIG.backendApiUrl;
    const res = await fetch(url, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ action, ...body }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success === false) throw new Error(json.error || "API error");
    return json;
  },
};
