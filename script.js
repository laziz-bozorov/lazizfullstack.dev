/**
 * ==========================================================================
 * LAZIZ.DEV — BESPOKE CREATIVE DEVELOPER ENGINE
 * Inspired by Mike Wilcock Design & SiriusXM Culture Trends
 * Live Tashkent Clock • Kinetic Code Ribbon • Scope Chips • Telegram Dispatch
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* --------------------------------------------------------------------------
       1. MULTILINGUAL TRANSLATION DICTIONARY (UZ / RU / EN)
       -------------------------------------------------------------------------- */
    const translations = {
        uz: {
            title: "Laziz Bozorov — Creative Full-Stack Dasturchi & IT Hamkor",
            clock_available: "• Yangi loyihalar uchun ochiq",
            btn_header_action: "Telegramda yozish",
            nav_intro: "Muqaddima",
            nav_pricing: "Narx Falsafasi",
            nav_services: "Imkoniyatlar",
            nav_work: "Loyihalar",
            nav_rules: "Qoidalar",
            nav_contact: "Bog'lanish",

            c0_meta: "MUSTAQIL DASTURCHI • TOSHKENT",
            c0_title: "Toza kod, aniq fikrlash va <span class=\"highlight-green\">haqiqiy natija</span> beruvchi IT yechimlar.",
            c0_lead: "Salom, men <strong>Laziz Bozorovman</strong>. O'rtada qo'lma-qo'l qiluvchi agentliklar va byurokratiyasiz — to'g'ridan-to'g'ri biznesingizga yangi mijoz keltiradigan veb-saytlar, Telegram WebApp tizimlari va ichki boshqaruv dasturlarini yarataman.",
            c0_cta_discuss: "Loyihangizni aytib bering →",
            c0_cta_cases: "Haqiqiy ishlarni ko'rish",
            c0_manifesto: "\"Men sun'iy marketing gaplarini va qolipdagi 'vibe coding' shablonlarini yoqtirmayman. Har bir satr kodni o'z qo'lim bilan, mehr va e'tibor bilan yozaman.\"",
            c0_stack_label: "Asosiy Stek:",

            c1_meta: "ADOLATLI NARX TAMOYILI",
            c1_title: "Nega men bu yerga \"$300\" yoki \"$500\" deb oldindan narx yopishtirib qo'ymayman?",
            c1_p1: "Ko'p saytlarda bir xil qolipdagi tariflarni ko'rgansiz: Landing — $300, Bot — $200. Lekin amalda har bir biznesning muammosi va maqsadi butunlay o'ziga xos.",
            c1_p2: "Birovga oddiy, 1 sahifali mahsulot taqdimoti kerak — unda murakkab funksiya yo'q va u arzon bo'ladi. Boshqa bir tadbirkorga esa minglab tovarlari bor, Click va Payme to'lovlari ulangan, omborni hisoblaydigan katta Telegram WebApp tizimi zarur. Ikkala odamni bir xil qolipga tiqib, ko'rmasdan narx to'qish — xaridorga nisbatan nohaqlik.",
            c1_f_title: "Mening adolatli 3 bosqichim:",
            c1_s1_t: "G'oyangizni eshitaman:",
            c1_s1_d: "Siz nima yasamoqchisiz, kimlar foydalanadi va asosiy vazifasi nima.",
            c1_s2_t: "Eng tejamkor yechimni topaman:",
            c1_s2_d: "Ortiqcha xarajatlarsiz, faqat amaliy ishlaydigan texnologiyani tanlaymiz.",
            c1_s3_t: "Aniq va o'zgarmas narx aytaman:",
            c1_s3_d: "Kelishilgan smeta va muddat ish jarayonida aslo oshmaydi. Maslahatlashish esa mutlaqo bepul.",

            c2_meta: "IMKONIYATLAR VA STEK",
            c2_title: "Qo'limdan nimalar keladi? (Va nimalarni olmayman)",
            c2_subtitle: "\"Designed in Figma, built in code.\" Men hamma narsani bilaman deb yolg'on gapirmayman — faqat o'zim mukammal tushunadigan yo'nalishlar bilan shug'ullanaman:",
            s1_title: "Tezkor Veb-Saytlar & Landing Sahifalar",
            s1_desc: "Telefonda 1 soniyada ochiladigan, chiroyli va qulay veb-saytlar. Reklamadan kirgan mijoz qiynalmasdan ariza qoldiradi, barcha arizalar esa zudlik bilan Telegram guruh yoki botingizga boradi.",
            s2_title: "Telegram Botlar & WebApp Do'konlar",
            s2_desc: "Xaridor hech qanday ilova yuklamaydi. Telegram ichida tovar katalogini ko'radi, savatchaga soladi va Click yoki Payme orqali to'laydi. Buyurtmalar esa avtomatik tarzda admin panelga tushadi.",
            s3_title: "Ichki Boshqaruv Tizimlari (Mini CRM / Dashboard)",
            s3_desc: "Qog'oz va daftardagi chalkashliklardan xalos bo'ling. Mijozlar bazasi, buyurtmalar holati, kassa tushumi va oylik hisobotlarni yagona xavfsiz ekranda nazorat qilish uchun sodda veb-panel.",
            s4_title: "API & To'lov Tizimlari Integratsiyasi",
            s4_desc: "Mavjud saytingiz yoki botingizga Click, Payme, SMS xabarnomalar ulash, serverlarni sozlash va sekin ishlayotgan tizimlarni 2-3 barobargacha tezlashtirish.",
            c2_not_label: "NIMALARNI QILMAYMAN:",
            c2_not_text: "O'zim yaxshi tushunmaydigan yoki muddati real bo'lmagan ishlarga hech qachon rozi bo'lmayman. Agar loyihangiz mening yo'nalishimga to'g'ri kelmasa, buni vaqtingizni olmay, boshidanoq ochiq aytaman.",

            c3_meta: "AMALIY NATIJALAR VA KEYSLAR",
            c3_title: "Haqiqiy loyihalar: bizneslar qanday muammo bilan kelgandi?",
            c3_subtitle: "Faqat quruq rasm emas — biznesning real muammosi, qilingan arxitektura va olingan natija:",
            case1_h: "Mijozlar lichkada javob kutib qolmasligi uchun nima qildik?",
            case_prob_lbl: "Muammo:",
            case1_p1: "Do'kon egasiga kuniga yuzlab mijozlar yozardi, lekin administrator ulgurmagani uchun odamlar narx va razmerni kutib, boshqa do'konlarga o'tib ketardi.",
            case_sol_lbl: "Yechim:",
            case1_p2: "Telegramdan chiqmasdan ishlaydigan WebApp mini-do'kon yaratdik. Rasmlar, razmerlar va Payme/Click to'lovi ulandi.",
            case1_m1_t: "Avtomatik savdo",
            case1_m1_d: "Kechasi ham buyurtmalar o'z-o'zidan qabul qilinadi",
            case1_m2_t: "Kutish vaqti",
            case1_m2_d: "Xaridor lichkani kutmasdan, 30 soniyada buyurtma qiladi",

            case2_h: "Reklamadan kelgan mijozlar yo'qolmasligi uchun saytni qayta qurdik",
            case2_p1: "Kompaniya reklamaga pul tikar, lekin eski sayt telefonda sekin (5-6 soniya) ochilgani sababli, odamlar kutmasdan chiqib ketardi.",
            case2_p2: "Next.js da qayta qurib, tezlikni 1.1 soniyaga tushirdik va foydalanuvchi ariza qoldirishi bilan ma'lumotlar xodimlarning Telegramiga tushadigan qildik.",
            case2_m1_t: "Arizalar o'sishi",
            case2_m1_d: "Reklamaga sarflangan har 1 so'm 2 barobar ko'proq foyda keltirdi",
            case2_m2_t: "Sahifa tezligi",
            case2_m2_d: "Telefonlarda darhol ochiladi, hech qanday qotishlarsiz",

            case3_h: "Daftardagi chalkashlikdan bitta ixcham boshqaruv paneliga",
            case3_p1: "Kichik servisda kuniga 20-30 ta buyurtma kelar, barcha ma'lumotlar daftarga yozilib, kim to'lagani yoki buyurtma bitgani chalkashib ketardi.",
            case3_p2: "Telefonda ham ochiladigan sodda veb-panel qurdik: ustalar ish statusini o'zgartiradi, rahbar esa kunlik tushumni 1 klikda ko'radi.",
            case3_m1_t: "Tartibli hisobot",
            case3_m1_d: "Hech bir mijoz yoki buyurtma yo'qolmaydi",
            case3_m2_t: "Oylik hisobot",
            case3_m2_d: "Qog'oz titib o'tirmasdan, bitta tugma bilan hisob chiqadi",

            c4_meta: "HAMKORLIKNING 4 ASOSIY QOIDASI",
            c4_title: "Siz nimaga ishonishingiz mumkin?",
            r1_title: "To'g'ridan-to'g'ri Muloqot",
            r1_desc: "O'rtada menejerlar yo'q. Loyihani birinchi kundanoq kod yozadigan odam bilan — o'zim bilan muhokama qilasiz va har kuni holatdan xabardor bo'lasiz.",
            r2_title: "Bosqichma-bosqich Demo",
            r2_desc: "Ishni oxirigacha yashirib o'tirmayman. Har bir qismi tayyor bo'lishi bilan sizga ko'rsatib, fikringizni olib boraman.",
            r3_title: "Kod 100% Sizning Mulkingiz",
            r3_desc: "Loyiha bitgach, barcha manba kodlari (GitHub va server) to'liq sizga topshiriladi. Hech qanday yashirin to'lovlar yoki bog'liqlik qolmaydi.",
            r4_title: "Topshirilgach 30 Kun Bepul Yordam",
            r4_desc: "Sayt yoki bot topshirilgandan keyin ham yo'qolib qolmayman. 1 oy davomida texnik nazorat va xatoliklarni bartaraf etish mutlaqo bepul.",

            c5_meta: "LOYIHANI BOSHLASH",
            c5_title: "G'oyangiz bormi? Keling, birgalikda muhokama qilamiz.",
            c5_subtitle: "Hech qanday murakkab formalarsiz. Nima yasatmoqchiligingizni qisqacha yozing — men sizga optimal yechimni, qancha vaqt ketishini va adolatli narxini aytaman.",
            inq_scope_lbl: "Qanday tizim kerak?:",
            inq_details_lbl: "Loyiha haqida qisqacha (yoki maqsadingiz):",
            ph_details: "Masalan: Menda kiyim do'koni bor, Telegramda to'lov qabul qiladigan mini-do'kon kerak...",
            inq_name_lbl: "Ismingiz:",
            ph_name: "Ismingizni kiriting",
            inq_contact_lbl: "Telegramingiz yoki telefoningiz:",
            ph_contact: "@username yoki +998 (90) 000-00-00",
            btn_submit_tg: "Xabarni Telegramda Yuborish →",
            reach_direct_lbl: "Yoki menga to'g'ridan-to'g'ri yozing:",
            footer_copy: "© 2026 Laziz Bozorov. Designed with intention, engineered with clean code.",
            footer_top: "Yuqoriga qaytish ↑"
        },

        ru: {
            title: "Лазиз Бозоров — Creative Full-Stack Разработчик & IT Партнер",
            clock_available: "• Открыт для новых проектов",
            btn_header_action: "Написать в Telegram",
            nav_intro: "Вступление",
            nav_pricing: "О Ценах",
            nav_services: "Возможности",
            nav_work: "Кейсы",
            nav_rules: "Правила",
            nav_contact: "Связаться",

            c0_meta: "НЕЗАВИСИМЫЙ РАЗРАБОТЧИК • ТАШКЕНТ",
            c0_title: "Чистый код, ясное мышление и <span class=\"highlight-green\">реальный результат</span> для бизнеса.",
            c0_lead: "Привет, я <strong>Лазиз Бозоров</strong>. Без агентских наценок и бюрократии разрабатываю быстрые сайты, Telegram WebApp магазины и внутренние системы управления, которые привлекают клиентов.",
            c0_cta_discuss: "Обсудить проект →",
            c0_cta_cases: "Смотреть работы",
            c0_manifesto: "\"Я не признаю шаблонного 'vibe coding' и пустых маркетинговых лозунгов. Каждую строчку кода проектирую и пишу лично, заботясь о надежности.\"",
            c0_stack_label: "Основной Стек:",

            c1_meta: "ПРИНЦИП ЧЕСТНЫХ ЦЕН",
            c1_title: "Почему я не вешаю на сайт жесткие ценники: «Сайт за $300» или «Бот за $200»?",
            c1_p1: "В интернете полно шаблонных тарифов. Но на практике задачи каждого бизнеса абсолютно индивидуальны.",
            c1_p2: "Одному клиенту нужна быстрая визитка продукта — без сложной логики, и это стоит недорого. Другому требуется крупный WebApp магазин с приемом оплат Click/Payme, интеграцией со складом и базой на тысячи позиций. Называть одну цену вслепую — считаю непрофессиональным.",
            c1_f_title: "Мой честный 3-шаговый подход:",
            c1_s1_t: "Вникаю в вашу задачу:",
            c1_s1_d: "Кто ваша аудитория, какие ключевые сценарии нужны и какую цель преследуем.",
            c1_s2_t: "Подбираю самое экономное решение:",
            c1_s2_d: "Без лишних плагинов и модулей — только то, что решает задачу.",
            c1_s3_t: "Называю фиксированную цену и срок:",
            c1_s3_d: "Бюджет не растет во время работы. Консультация бесплатна.",

            c2_meta: "СТЕК И КОМПЕТЕНЦИИ",
            c2_title: "Что я делаю на высшем уровне (и за что не берусь)",
            c2_subtitle: "\"Designed in Figma, built in code.\" Я не берусь за всё подряд — работаю только в тех областях, где гарантирую результат:",
            s1_title: "Быстрые Сайты & Landing Page",
            s1_desc: "Сайты, которые открываются за 1 секунду на смартфонах. Посетитель без труда оставляет заявку, а данные сразу летят вам в Telegram.",
            s2_title: "Telegram Боты & WebApp Магазины",
            s2_desc: "Покупатель выбирает товары прямо в Telegram, добавляет в корзину и оплачивает через Click или Payme. Заказы моментально видит ваш менеджер.",
            s3_title: "Внутренние Системы (Mini CRM / Панели)",
            s3_desc: "Порядок в заказах, клиентах и финансах на одном удобном экране. Без хаоса в блокнотах и экселях.",
            s4_title: "API & Подключение Платежей",
            s4_desc: "Интеграция Click, Payme, SMS уведомлений, настройка серверов и ускорение существующих проектов.",
            c2_not_label: "ЗА ЧТО НЕ БЕРУСЬ:",
            c2_not_text: "Никогда не соглашаюсь на нереалистичные сроки или задачи, в которых не уверен на 100%. Если проект вам не подходит — прямо скажу об этом на первой встрече.",

            c3_meta: "ПРАКТИЧЕСКИЕ КЕЙСЫ",
            c3_title: "Реальные истории: с чем приходили заказчики?",
            c3_subtitle: "Не просто дизайн, а конкретные проблемы и их инженерные решения:",
            case1_h: "Как мы избавили менеджеров от рутины в личных сообщениях?",
            case_prob_lbl: "Проблема:",
            case1_p1: "Владелец магазина одежды тратил часы, отвечая каждому в личке на вопросы о ценах и размерах. Клиенты уставали ждать и уходили к конкурентам.",
            case_sol_lbl: "Решение:",
            case1_p2: "Запустили интерактивный WebApp магазин прямо в Telegram с каталогом, фильтрами и моментальной оплатой Click/Payme.",
            case1_m1_t: "24/7 Заказы",
            case1_m1_d: "Покупки оформляются автоматически даже ночью",
            case1_m2_t: "0 минут ожидания",
            case1_m2_d: "Покупатель за 30 секунд оформляет заказ без переписки",

            case2_h: "Переписали сайт, чтобы реклама приносила клиентов, а не сжигала бюджет",
            case2_p1: "Компания крутила рекламу, но старый сайт грузился 6 секунд на телефонах. Большинство людей уходили, не дождавшись загрузки.",
            case2_p2: "Переписал сайт на Next.js, снизил время загрузки до 1.1с и связал заявки с Telegram-группой сотрудников.",
            case2_m1_t: "2.8x Рост заявок",
            case2_m1_d: "Тот же рекламный бюджет стал давать вдвое больше лидов",
            case2_m2_t: "1.1с Загрузка",
            case2_m2_d: "Сайт открывается моментально на любых смартфонах",

            case3_h: "Из хаоса в тетрадях — в единую компактную веб-панель",
            case3_p1: "В автосервисе вели учет заказов в общей тетради. Постоянно путались статусы готовности и оплаты, а сведение отчетов занимало дни.",
            case3_p2: "Собрал удобную веб-панель: мастера отмечают статусы с телефонов, а руководитель видит ежедневную выручку в один клик.",
            case3_m1_t: "100% Учет",
            case3_m1_d: "Ни один заказ или расчет больше не теряется",
            case3_m2_t: "1 клик",
            case3_m2_d: "Месячный отчет формируется за секунду вместо дней",

            c4_meta: "4 ПРАВИЛА СОТРУДНИЧЕСТВА",
            c4_title: "На что вы можете твердо рассчитывать?",
            r1_title: "Прямой Диалог",
            r1_desc: "Никаких посредников. С первого дня вы общаетесь с тем, кто пишет код, и всегда в курсе текущего этапа.",
            r2_title: "Поэтапные Демо",
            r2_desc: "Я не прячу работу до дедлайна. Показываю прототипы и рабочие страницы по мере готовности.",
            r3_title: "100% Права на Код",
            r3_desc: "Все исходники (GitHub, сервер, базы данных) после сдачи передаются вам без скрытых подписок.",
            r4_title: "30 Дней Поддержки",
            r4_desc: "После запуска я остаюсь на связи и бесплатно помогаю с любыми техническими вопросами в течение месяца.",

            c5_meta: "НАЧАТЬ ПРОЕКТ",
            c5_title: "Есть задумка? Давайте обсудим её.",
            c5_subtitle: "Без сложных анкет. Просто напишите пару слов о задаче — я предложу лучшее решение, сроки и честную цену.",
            inq_scope_lbl: "Что требуется сделать?:",
            inq_details_lbl: "Кратко о задаче или целях:",
            ph_details: "Например: Нужен Telegram WebApp магазин для обуви с приемом оплаты Click...",
            inq_name_lbl: "Ваше имя:",
            ph_name: "Введите имя",
            inq_contact_lbl: "Telegram или телефон для связи:",
            ph_contact: "@username или +998 (90) 000-00-00",
            btn_submit_tg: "Отправить сообщение в Telegram →",
            reach_direct_lbl: "Или напишите мне напрямую:",
            footer_copy: "© 2026 Лазиз Бозоров. Designed with intention, engineered with clean code.",
            footer_top: "Наверх ↑"
        },

        en: {
            title: "Laziz Bozorov — Creative Full-Stack Engineer & Tech Partner",
            clock_available: "• Open for select projects",
            btn_header_action: "Chat on Telegram",
            nav_intro: "Prologue",
            nav_pricing: "Philosophy",
            nav_services: "Capabilities",
            nav_work: "Work",
            nav_rules: "Principles",
            nav_contact: "Initiate",

            c0_meta: "INDEPENDENT DEVELOPER • TASHKENT",
            c0_title: "Intentional craft, clear thinking, and <span class=\"highlight-green\">tangible outcomes</span> in clean code.",
            c0_lead: "Hi, I'm <strong>Laziz Bozorov</strong>. Free from agency bloat and middle management, I engineer high-speed websites, Telegram WebApp platforms, and operational tools that generate real revenue.",
            c0_cta_discuss: "Tell me your idea →",
            c0_cta_cases: "View selected work",
            c0_manifesto: "\"I dislike cookie-cutter vibe coding and agency buzzwords. Every line of code is handwritten with care, clarity, and architectural precision.\"",
            c0_stack_label: "Core Stack:",

            c1_meta: "PRICING PHILOSOPHY",
            c1_title: "Why don't I put rigid prices like \"$300\" or \"$500\" on this page?",
            c1_p1: "You've seen standard pricing menus across the web: Landing — $300, Bot — $200. But in reality, every business challenge is distinct.",
            c1_p2: "One person needs a minimal single-page showcase — simple and low-cost. Another needs an inventory system with thousands of SKUs, integrated Click/Payme payments, and automated order routing. Forcing both into the same price tag before listening is unfair to the client.",
            c1_f_title: "My 3-step transparent framework:",
            c1_s1_t: "I listen to your vision:",
            c1_s1_d: "Your business goal, target users, and essential capabilities.",
            c1_s2_t: "I design the cleanest path:",
            c1_s2_d: "No unnecessary add-ons, only what solves your problem.",
            c1_s3_t: "I provide an honest fixed quote:",
            c1_s3_d: "The agreed budget stays fixed. Consultations are always free.",

            c2_meta: "CAPABILITIES & STACK",
            c2_title: "What I build reliably (and what I don't)",
            c2_subtitle: "\"Designed in Figma, built in code.\" I don't claim to do everything. I focus strictly on battle-tested domains where I deliver top-notch results:",
            s1_title: "High-Speed Websites & Landing Pages",
            s1_desc: "Websites that load in 1 second on mobile devices. Clean visuals, high conversion, and leads routed straight to your Telegram.",
            s2_title: "Telegram Bots & WebApp Mini-Stores",
            s2_desc: "Zero app download required. Users browse catalog items, add to cart, and check out directly via Click/Payme inside Telegram.",
            s3_title: "Internal Management Dashboards (Mini CRM)",
            s3_desc: "Tired of tracking orders on paper? A centralized, clean dashboard to oversee pipeline, customer records, and revenue.",
            s4_title: "API & Payment Gateway Integrations",
            s4_desc: "Integrating Click, Payme, SMS alerts, optimizing slow websites, and configuring secure servers.",
            c2_not_label: "WHAT I DO NOT TAKE ON:",
            c2_not_text: "I never accept work outside my expertise or impossible deadlines. If a project is not a great fit, I will tell you upfront.",

            c3_meta: "SELECTED WORK",
            c3_title: "Real client stories: what problems did businesses bring to me?",
            c3_subtitle: "Not just screenshots — real problems solved with scalable code:",
            case1_h: "Eliminating manual DM replies for a retail shop",
            case_prob_lbl: "Challenge:",
            case1_p1: "A store owner spent entire days replying to repetitive DMs about sizes and prices, losing buyers who got tired of waiting.",
            case_sol_lbl: "Solution:",
            case1_p2: "We built an in-app Telegram WebApp store with full catalog filtering and automatic checkout.",
            case1_m1_t: "24/7 Orders",
            case1_m1_d: "Orders process round-the-clock without manual intervention",
            case1_m2_t: "0 Min Waiting",
            case1_m2_d: "Customers check out in 30 seconds without waiting for DMs",

            case2_h: "Rebuilt a sluggish corporate site to double inbound lead flow",
            case2_p1: "A service firm was spending ad dollars on a website that took 6 seconds to load on phones. Visitors left before seeing the offer.",
            case2_p2: "Rebuilt with Next.js (1.1s load), funneling form inquiries straight into the team Telegram group.",
            case2_m1_t: "2.8x Lead Growth",
            case2_m1_d: "Same ad budget yielded more than twice as many inbound inquiries",
            case2_m2_t: "1.1s Load Time",
            case2_m2_d: "Loads instantly on all mobile browsers with zero lag",

            case3_h: "Transitioning a repair shop from paper ledgers to a custom tool",
            case3_p1: "A 4-person repair shop tracked jobs in paper notebooks, constantly confusing completion and payment statuses.",
            case3_p2: "Built a lightweight mobile-friendly dashboard where technicians update statuses and owners view cashflow instantly.",
            case3_m1_t: "100% Tracking",
            case3_m1_d: "Zero lost orders and clear accountability",
            case3_m2_t: "1-Click Audit",
            case3_m2_d: "Month-end audit generated in seconds instead of days",

            c4_meta: "4 CORE PRINCIPLES",
            c4_title: "What can you firmly count on?",
            r1_title: "Direct Line of Contact",
            r1_desc: "Zero middlemen. You can message me on Telegram anytime to check progress and discuss architecture.",
            r2_title: "Milestone Demos",
            r2_desc: "I don't hide code until the deadline. You see working prototypes along the way.",
            r3_title: "100% Code Ownership",
            r3_desc: "Upon handover, all repository code, databases, and keys become solely yours with zero vendor lock-in.",
            r4_title: "30-Day Free Warranty",
            r4_desc: "I don't disappear after deployment. Enjoy 30 days of free operational support and bug fixes.",

            c5_meta: "START A PROJECT",
            c5_title: "Have an idea? Let's discuss it without friction.",
            c5_subtitle: "No complicated forms. Briefly describe what you'd like to build — I'll advise on the best architecture, realistic timeline, and honest cost.",
            inq_scope_lbl: "What do you need built?:",
            inq_details_lbl: "Project details or goals:",
            ph_details: "e.g. I run an apparel shop and want a Telegram mini-app with automated payments...",
            inq_name_lbl: "Your Name:",
            ph_name: "Enter your name",
            inq_contact_lbl: "Your Telegram or phone number:",
            ph_contact: "@username or +998 (90) 000-00-00",
            btn_submit_tg: "Send Inquiry via Telegram →",
            reach_direct_lbl: "Or message me directly:",
            footer_copy: "© 2026 Laziz Bozorov. Designed with intention, engineered with clean code.",
            footer_top: "Back to top ↑"
        }
    };

    /* --------------------------------------------------------------------------
       2. LIVE TASHKENT CLOCK (Mike Wilcock Signature)
       -------------------------------------------------------------------------- */
    const clockEl = document.getElementById('liveTashkentClock');
    const updateTashkentTime = () => {
        if (!clockEl) return;
        try {
            const now = new Date();
            const timeString = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Asia/Tashkent',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(now);
            clockEl.textContent = `${timeString} (UTC+5)`;
        } catch (e) {
            clockEl.textContent = '14:00 (UTC+5)';
        }
    };
    setInterval(updateTashkentTime, 1000);
    updateTashkentTime();

    /* --------------------------------------------------------------------------
       3. MOTION TOGGLE (Mike Wilcock Signature)
       -------------------------------------------------------------------------- */
    let isMotionOn = localStorage.getItem('laziz_motion') !== 'off';
    const btnMotion = document.getElementById('btnMotionToggle');
    const motionStatusText = document.getElementById('motionStatusText');

    const setMotionState = (on) => {
        isMotionOn = on;
        localStorage.setItem('laziz_motion', on ? 'on' : 'off');
        if (motionStatusText) {
            motionStatusText.textContent = on ? 'Motion: On' : 'Motion: Muted';
        }
        document.documentElement.classList.toggle('reduce-motion', !on);
    };

    if (btnMotion) {
        btnMotion.addEventListener('click', () => {
            setMotionState(!isMotionOn);
        });
        setMotionState(isMotionOn);
    }

    /* --------------------------------------------------------------------------
       4. KINETIC GREEN CODE RIBBON & READING PROGRESS (SiriusXM Inspired)
       -------------------------------------------------------------------------- */
    const topScrollLine = document.getElementById('topScrollLine');
    const spineGlowStream = document.getElementById('spineGlowStream');
    const spineTravelerNode = document.getElementById('spineTravelerNode');
    const spineMetricBadge = document.getElementById('spineMetricBadge');
    const matrixTokens = document.querySelectorAll('.matrix-token');

    const handleScrollMotion = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
        const percentage = (fraction * 100).toFixed(1);

        // 1. Top Scroll Indicator
        if (topScrollLine) {
            topScrollLine.style.width = `${percentage}%`;
        }

        // 2. Kinetic Spine Stream
        if (spineGlowStream && spineTravelerNode) {
            spineGlowStream.style.height = `${percentage}%`;
            spineTravelerNode.style.top = `${percentage}%`;
        }

        // 3. Metric Badge
        if (spineMetricBadge) {
            spineMetricBadge.textContent = `${Math.round(percentage)}%`;
        }

        // 4. Matrix Code Tokens Activation
        matrixTokens.forEach(token => {
            const targetDepth = parseFloat(token.getAttribute('data-depth')) || 0;
            if (percentage >= targetDepth) {
                token.classList.add('active-token');
            } else {
                token.classList.remove('active-token');
            }
        });
    };

    window.addEventListener('scroll', handleScrollMotion, { passive: true });
    window.addEventListener('resize', handleScrollMotion, { passive: true });
    handleScrollMotion();

    /* --------------------------------------------------------------------------
       5. FLOATING CHAPTER QUICK NAV (ACTIVE HIGHLIGHT VIA INTERSECTION OBSERVER)
       -------------------------------------------------------------------------- */
    const chapters = document.querySelectorAll('.editorial-chapter');
    const navDots = document.querySelectorAll('.c-nav-dot');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const chapterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navDots.forEach(dot => {
                    const href = dot.getAttribute('href').replace('#', '');
                    dot.classList.toggle('active', href === id);
                });
            }
        });
    }, observerOptions);

    chapters.forEach(ch => chapterObserver.observe(ch));

    /* --------------------------------------------------------------------------
       6. SCOPE CHIPS SELECTOR (Mike Wilcock Project Starter Signature)
       -------------------------------------------------------------------------- */
    const scopeChips = document.querySelectorAll('#scopeChips .scope-chip');
    let selectedScope = "Veb-Sayt & Landing";

    scopeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            scopeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedScope = chip.getAttribute('data-scope') || chip.textContent.trim();
        });
    });

    /* --------------------------------------------------------------------------
       7. DIRECT TELEGRAM DISPATCH (NO FAKE POPUP MODALS)
       -------------------------------------------------------------------------- */
    const btnSendTg = document.getElementById('btnSendToTelegram');
    const detailsInput = document.getElementById('inquiryDetails');
    const nameInput = document.getElementById('inquiryName');
    const contactInput = document.getElementById('inquiryContact');

    if (btnSendTg) {
        btnSendTg.addEventListener('click', (e) => {
            e.preventDefault();

            const scope = selectedScope;
            const details = (detailsInput && detailsInput.value.trim()) || "Loyiha bo'yicha maslahatlashmoqchiman.";
            const name = (nameInput && nameInput.value.trim()) || "";
            const contact = (contactInput && contactInput.value.trim()) || "";

            let message = "";
            if (currentLang === 'ru') {
                message = `Здравствуйте Лазиз!\n\n🎯 Направление: ${scope}\n💡 Задача: ${details}\n👤 Имя: ${name || 'Клиент'}\n📞 Контакт: ${contact || 'Telegram'}`;
            } else if (currentLang === 'en') {
                message = `Hi Laziz!\n\n🎯 Scope: ${scope}\n💡 Idea: ${details}\n👤 Name: ${name || 'Client'}\n📞 Contact: ${contact || 'Telegram'}`;
            } else {
                message = `Assalomu alaykum Laziz!\n\n🎯 Yo'nalish: ${scope}\n💡 Loyiha g'oyasi: ${details}\n👤 Ism: ${name || 'Mijoz'}\n📞 Aloqa: ${contact || 'Telegram'}`;
            }

            const tgUrl = `https://t.me/lazizfullstack?text=${encodeURIComponent(message)}`;
            window.open(tgUrl, '_blank', 'noopener,noreferrer');
        });
    }

    /* --------------------------------------------------------------------------
       8. LANGUAGE SWITCHER CONTROLLER
       -------------------------------------------------------------------------- */
    let currentLang = localStorage.getItem('laziz_preferred_lang') || 'uz';

    const setLanguage = (lang) => {
        if (!translations[lang]) lang = 'uz';
        currentLang = lang;
        localStorage.setItem('laziz_preferred_lang', lang);
        document.documentElement.setAttribute('lang', lang);

        const dict = translations[lang];

        if (dict.title) document.title = dict.title;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        document.querySelectorAll('.lang-pill').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    };

    document.querySelectorAll('.lang-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Initialize with preferred or default language
    setLanguage(currentLang);
});
