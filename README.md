# ⚡ lazizfullstack.dev — High-Converting Engineering & Agency Platform

[![Production Status](https://img.shields.io/badge/status-production--ready-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://lazizfullstack.dev)
[![Languages](https://img.shields.io/badge/languages-UZ%20%7C%20RU%20%7C%20EN-38BDF8?style=for-the-badge)](https://lazizfullstack.dev)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://lazizfullstack.dev)
[![License](https://img.shields.io/badge/license-MIT-6366F1?style=for-the-badge)](LICENSE)

> **Rasmiy Portfollio & IT Xizmatlar Platformasi:** Startaplar, korporatsiyalar va tadbirkorlar uchun maksimal konversiyaga va ishonchga ega bo'lgan yuqori yuklamali Full-Stack yechimlar.

---

## 🎯 Loyihaning Asosiy Maqsadi (Core Mission)

Mijoz (biznes egasi yoki xorijiy kompaniya) saytga kirganda:
1. **100% Ishonch hosil qiladi:** Rasmiy NDA shartnoma, muddat kechikishi uchun penya kafolati, kodlarning to'liq mijoz nomiga o'tishi (Full IP) va 30 kunlik bepul texnik kafolat bilan himoyalanadi.
2. **Minimal xarajat bilan maksimal ROI oladi:** Keraksiz, havoga uchadigan xarajatlar chiqarib tashlangan. Faqat real sotuv keltiruvchi yuqori samarali xizmatlar (Web, Telegram WebApp/Bot, CRM/SaaS, Mobil ilova).
3. **Qulay buyurtma beradi:** Interaktiv narx kalkulyatori orqali smetani o'zi tanlaydi va 1-klikda buyurtma formasiga yoki to'g'ridan-to'g'ri Telegramga o'tkazadi.
4. **3 ta tilda (UZ / RU / EN)** bir zumda sahifani yangilamasdan (0ms kechikish bilan) foydalana oladi.

---

## 🌐 3-Tilli Xalqaro Tizim (i18n Architecture)

Sayt tashrifchilarining qayerdan kelishidan qat'i nazar (O'zbekiston, MDH yoki AQSh/Yevropa), to'liq 3 tilda ishlaydi:
- 🇺🇿 **O'zbekcha (Lotin):** Mahalliy biznes va tadbirkorlar uchun sotuvchi va tushunarli matnlar.
- 🇷🇺 **Русский:** MDH va mintaqaviy B2B mijozlar uchun professional terminologiya va aniq smeta.
- 🇬🇧 **English:** Xalqaro mijozlar va xorijiy startaplar uchun global standartdagi CRO va arxitektura takliflari.

*Til tanlovi `localStorage` da xotirada saqlanadi va brauzer yopilgandan keyin ham eslab qolinadi.*

---

## 🛠️ Texnologik Stek (Zero-Bloat Tech Stack)

- **Semantic HTML5:** To'liq SEO-optimallashtirilgan, o'quvchi ekranlar uchun mos, `data-i18n` atributli semantik tuzilma.
- **Modern CSS3 (Bento Grid & Glassmorphism):**
  - Dark Obsidian SaaS dizayn tizimi (`#05070B`, Linear & Raycast ilhomida).
  - CSS Custom Properties (`--mouse-x`, `--mouse-y`) yordamida interaktiv kursor spotlight effekti.
  - Backdrop-filter blur va ambient aurora nurlari.
  - To'liq adaptiv (Desktop, Planshet, Mobil).
- **Modular Vanilla ES6+ JavaScript:**
  - Hech qanday tashqi og'ir kutubxonalarsiz (Zero jQuery, Zero heavy frameworks).
  - Jonli kalkulyator (Real-time dynamic timeline & budget estimation).
  - 1-klikda xizmat va kalkulyator smetasini buyurtma formasiga sinxronlash.
  - Unikal buyurtma ID raqami generatsiyasi (masalan `#LFS-2026-894`) va Telegramga formatlangan xabar bilan o'tish.

---

## 📁 Fayllar Strukturasi

```bash
portfolio-website/
├── index.html         # Semantik 3-tilli asosiy sahifa va modallar
├── style.css          # Bento grid, Dark Obsidian CSS dizayn tizimi
├── script.js          # i18n lug'atlari, kalkulyator, forma va spotlight logikasi
├── robots.txt         # Qidiruv tizimlari (Google, Yandex) uchun indeksatsiya qoidalari
├── sitemap.xml        # Ko'p tilli hreflang sitemap
├── vercel.json        # Vercel xavfsizlik sarlavhalari va kesh sozlamalari
├── netlify.toml       # Netlify deployment konfiguratsiyasi
├── .gitignore         # Shaxsiy fayllar va OS axlatlarini gitdan himoyalash
└── README.md          # Loyiha to'liq hujjati
```

---

## 🚀 Mahalliylashtirish va Ishga Tushirish (Local Run)

Hech qanday murakkab build talab qilinmaydi. Shunchaki brauzerda oching yoki ixtiyoriy statik server bilan ishga tushiring:

```bash
# Python yordamida:
python3 -m http.server 8000

# Yoki Node.js npx serve yordamida:
npx serve .
```

Brauzerda `http://localhost:8000` manziliga o'ting.

---

## ☁️ Internetga Joylash (Deployment Guide)

### 1-Usul: Vercel (Tavsiya etiladi — 1-Klikda)
1. Ushbu loyihani GitHub hisobingizga push qiling (`laziz-bozorov/portfolio-website`).
2. [vercel.com](https://vercel.com) ga kiring va GitHub profilingizni ulang.
3. Repozitoriyni tanlab **Deploy** tugmasini bosing.
4. `vercel.json` avtomatik ravishda barcha xavfsizlik headerlarini (CSP, X-Frame-Options, Cache-Control) o'rnatadi.
5. Sozlamalarda (Settings -> Domains) `lazizfullstack.dev` domenini bog'lang.

### 2-Usul: GitHub Pages (Mutlaqo bepul)
1. GitHub repozitoriyangizga kiring.
2. **Settings** -> **Pages** bo'limiga o'ting.
3. **Branch** qismida `main` va `/ (root)` ni tanlang va **Save** tugmasini bosing.
4. Saytingiz 1 daqiqa ichida `https://laziz-bozorov.github.io/...` manzilida ishga tushadi.
5. **Custom domain** bo'limiga `lazizfullstack.dev` deb yozing va DNS orqali CNAME qo'ying.

### 3-Usul: Netlify
1. Repozitoriyni [netlify.com](https://netlify.com) ga ulang.
2. `netlify.toml` fayli avtomatik tarzda kesh va xavfsizlik parametrlarini sozlaydi.

---

## 🔒 Xavfsizlik Qoidalari (Security & NDA Guarantee)

- Hech qanday maxfiy API kalitlar yoki tokenlar ochiq kodda saqlanmaydi.
- Foydalanuvchi ma'lumotlari to'g'ridan-to'g'ri xavfsiz Telegram URL sxemasi orqali yetkaziladi.
- `.gitignore` barcha shaxsiy fayllarni repo tashqarisida saqlaydi.

---

## 👤 Muallif va Bog'lanish (Author & Contacts)

- **Muhandis:** Laziz Bozorov (LazizFullStack)
- **Telegram:** [@lazizfullstack](https://t.me/lazizfullstack)
- **GitHub:** [@laziz-bozorov](https://github.com/laziz-bozorov)
- **LinkedIn:** [Laziz Bozorov](https://www.linkedin.com/in/laziz-bozorov-143bb4448)
- **Email:** [lazizfullstack@gmail.com](mailto:lazizfullstack@gmail.com)
- **Domen:** [lazizfullstack.dev](https://lazizfullstack.dev)
