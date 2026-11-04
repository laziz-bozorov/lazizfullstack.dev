/**
 * ==========================================================================
 * LAZIZ.DEV — HUMAN-CENTRIC PERSONAL PORTFOLIO & IT PARTNER PLATFORM
 * Multi-Language (UZ / RU / EN) • Transparent Calculator • Instant Telegram
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* --------------------------------------------------------------------------
       1. I18N MULTILINGUAL TRANSLATION DICTIONARY (UZ / RU / EN)
       -------------------------------------------------------------------------- */
    const translations = {
        uz: {
            title: "Laziz Bozorov — Full-Stack Dasturchi & IT Hamkor | Toshkent",
            scarcity_status: "Yangi loyihalar uchun ochiq",
            scarcity_text: "Har bir loyihaga to'liq e'tibor berish uchun bir vaqtda faqat 2-3 ta asosiy loyiha bilan ishlayman.",
            scarcity_link: "Bog'lanish →",
            brand_role: "Full-Stack Dasturchi",
            nav_services: "Xizmatlar",
            nav_portfolio: "Portfolio",
            nav_calculator: "Kalkulyator",
            nav_guarantees: "Afzalliklar",
            nav_process: "Jarayon",
            nav_contact: "Aloqa",
            nav_home: "Bosh sahifa",
            lang_label: "Tilni tanlang:",
            btn_contract_sample: "Kafolat shartlari",
            btn_start_project: "Telegramda yozish",
            btn_submit_order: "Telegramda yozish",

            hero_pill: "Yangi loyihalar uchun ochiq • Toshkent, O'zbekiston",
            hero_h1: "Salom, men <span class=\"gradient-text-cyan-indigo\">Laziz Bozorovman</span>. Biznesingiz uchun sifatli veb-saytlar va Telegram tizimlari yarataman.",
            hero_lead: "Agentliklardagi byurokratiya va ortiqcha vositachilarsiz — to'g'ridan-to'g'ri dasturchi bilan ishlaysiz. Toza kod, aniq muddat va samimiy hamkorlik.",
            hero_btn_calc: "Telegram orqali bog'lanish",
            hero_btn_cases: "Narxni hisoblash",
            hero_btn_portfolio: "Ishlarni ko'rish →",
            proof_15min: "Vositalarsiz to'g'ridan-to'g'ri aloqa",
            proof_ownership: "Barcha kodlar sizning mulkingiz",
            proof_payment: "Topshirilgach 30 kun bepul yordam",

            dev_card_role: "Full-Stack Dasturchi & Tech Hamkor",
            dev_card_bio: "\"Agentliklardagi byurokratiyani yoqtirmayman. Har bir loyiha ustida to'g'ridan-to'g'ri o'zim ishlayman, har kuni aloqada bo'laman va biznesingizga rostdan foyda keltiradigan sifatli kod yozaman.\"",
            dev_stack_label: "Texnologik stek:",
            dev_perk_1: "100% to'g'ridan-to'g'ri muloqot",
            dev_perk_2: "Toza va tushunarli manba kodi",
            dev_perk_3: "Topshirilgach 30 kun bepul yordam",
            btn_tg_direct_hero: "Telegram orqali to'g'ridan-to'g'ri yozish",

            stat1_title: "To'g'ridan-to'g'ri aloqa",
            stat1_desc: "O'rtada menejersiz, faqat dasturchi bilan ishlaysiz",
            stat2_title: "Tezkor javob",
            stat2_desc: "Telegram orqali savollaringizga zudlik bilan javob",
            stat3_title: "Kod to'liq sizniki",
            stat3_desc: "Barcha manba kodlari mijoz nomiga rasmiylashtiriladi",
            stat4_title: "Bepul kafolatlangan yordam",
            stat4_desc: "Ish topshirilgach ham texnik nazorat va ko'mak",

            guar_badge: "ISHLASH TAMOYILLARI",
            guar_title: "Nega agentlik emas, aynan <span class=\"gradient-text-cyan-indigo\">men bilan ishlash qulay?</span>",
            guar_subtitle: "Agentliklardagi byurokratiya, ortiqcha ustama narxlar va aloqa uzilishlarisiz — shaffof hamkorlik:",
            g1_title: "1. To'g'ridan-to'g'ri Muloqot (Vositalarsiz)",
            g1_desc: "Agentliklarda har bir gap menejerdan dasturchiga yetguncha o'zgaradi. Men bilan esa birinchi kundanoq to'g'ridan-to'g'ri texnik yechimni muhokama qilasiz va har kuni jarayondan xabardor bo'lasiz.",
            g1_btn: "Kafolat shartlarini ko'rish →",
            g2_title: "2. Aniq Muddat va Doimiy Demo",
            g2_desc: "Vaqtingiz bekor ketmaydi. Loyihani bosqichma-bosqich ishlab, oraliq natijalarni ko'rsatib boraman. Belgilangan muddatga qat'iy rioya qilinadi.",
            g3_title: "3. Toza Kod va To'liq Mulk Huquqi",
            g3_desc: "Loyiha yakunida barcha dastur kodlari (GitHub va Server) to'liq sizning nomingizga topshiriladi. Hech qanday yashirin to'lovlar yoki sun'iy bog'liqlik bo'lmaydi.",
            g4_title: "4. Ishga Tushgach 30 Kun Bepul Yordam",
            g4_desc: "Sayt yoki bot topshirilgach ham sizni tashlab ketmayman. 1 oy davomida texnik nazorat, xatoliklarni bartaraf etish va foydalanishni o'rgatish mutlaqo bepul.",

            serv_badge: "XIZMATLAR & NARXLAR",
            serv_title: "Biznesingiz uchun <span class=\"gradient-text-cyan-indigo\">real foyda keltiruvchi</span> xizmatlar",
            serv_subtitle: "Faqat o'zim professional bajara oladigan, sinovdan o'tgan yechimlar. 1-klikda xizmatni tanlab muhokama qilishingiz mumkin:",
            s1_time: "5–10 ish kuni",
            s1_title: "Tezkor Veb-Sayt & Landing Page",
            s1_goal: "Keltiradigan foydasi: Reklamangizdan tushadigan arizalar soni oshadi. Sayt telefon va kompyuterda 1 soniyada ochiladi.",
            s1_f1: "Zamonaviy va ishonch uyg'otuvchi dizayn",
            s1_f2: "Arizalar to'g'ridan-to'g'ri Telegramingizga keladi",
            s1_f3: "Qidiruv tizimlari (SEO) uchun to'liq optimizatsiya",
            s1_f4: "Moslashuvchan mobil moslik",
            s2_time: "4–8 ish kuni",
            s2_title: "Telegram Bot & WebApp Do'kon",
            s2_goal: "Keltiradigan foydasi: Xaridorlar ilova yuklab olmasdan Telegram ichida mahsulot tanlaydi va Click/Payme orqali to'laydi.",
            s2_f1: "Telegram ichida qulay vizual mini-do'kon",
            s2_f2: "Payme va Click to'lovlari avtomatik tushadi",
            s2_f3: "Buyurtmalarni guruh yoki admin botga yuborish",
            s2_f4: "Mijozlarga avtomatik xabar va eslatma yuborish",
            s3_time: "12–20 ish kuni",
            s3_title: "CRM & Boshqaruv Tizimi",
            s3_goal: "Keltiradigan foydasi: Buyurtmalar va hisobotlar daftarda emas, yagona xavfsiz panelda nazorat qilinadi.",
            s3_f1: "Mijozlar bazasi va buyurtmalar holati",
            s3_f2: "Kassa, daromad va oylik hisobotlar",
            s3_f3: "Xodimlar uchun alohida kirish huquqlari",
            s3_f4: "Excel ga bir tugma bilan eksport qilish",
            s4_time: "3–7 ish kuni",
            s4_title: "API & Texnik Integratsiya",
            s4_goal: "Keltiradigan foydasi: Mavjud saytingiz yoki botingizga to'lov, SMS yoki boshqa tizimlarni to'siqlarsiz ulash.",
            s4_f1: "Payme, Click, Uzum to'lov tizimlarini ulash",
            s4_f2: "SMS xabarnomalar va avtomatik bildirishnomalar",
            s4_f3: "Mavjud sayt tezligini 2-3 barobar oshirish",
            s4_f4: "Server va ma'lumotlar bazasini sozlash",
            price_label: "Taxminiy narxi:",
            btn_choose_service: "Ushbu xizmatni tanlash →",
            popular_badge: "Eng Ko'p Buyurtma Qilinadigan",

            cases_badge: "AMALIY TAJRIBA",
            cases_title: "Mijozlar bilan erishilgan <span class=\"gradient-text-cyan-indigo\">amaliy natijalar</span>",
            cases_subtitle: "Faqat quruq rasm emas — biznes qanday muammo bilan keldi va tizim orqali qanday natijaga erishdi:",
            case1_tag: "Telegram WebApp Do'kon",
            case1_time: "5 kunda topshirildi",
            case1_title: "Telegram Avtomatik Savdo Tizimi",
            comp_before: "Avvalgi muammo:",
            case1_before: "Mijozlar mahsulot rasmi va narxini alohida so'rar, administrator javob berguncha xaridor boshqa joyga ketib qolar edi.",
            comp_after: "Qilingan ish va natija:",
            case1_after: "Telegram ichida interaktiv katalog, savatcha va Payme/Click ulandi. Buyurtmalar kechasi ham to'liq avtomatik tarzda tushmoqda.",
            case2_tag: "Veb-Sayt & Landing Page",
            case2_time: "7 kunda topshirildi",
            case2_title: "Xizmatlar Kompaniyasi uchun Tezkor Sayt",
            case2_before: "Eski sayt telefonlarda sekin ochilar, arizalar deyarli tushmas va reklama byudjeti o'zini oqlamas edi.",
            case2_after: "Toza Next.js da qayta qurildi, yuklanish tezligi 1.2 soniyaga tushirildi va arizalar zudlik bilan Telegram guruhga ulandi.",
            case3_tag: "Biznes Boshqaruvi (CRM)",
            case3_time: "15 kunda topshirildi",
            case3_title: "Buyurtmalarni Boshqarish Paneli (Mini CRM)",
            case3_before: "Barcha hisob-kitoblar qog'oz va daftarda yuritilar, buyurtmalar chalkashib ketar va hisobot chiqarish soatlab vaqt olar edi.",
            case3_after: "Mijozlar bazasi, buyurtmalar statusi va kassa tushumini ko'rsatuvchi sodda veb-panel qurildi. Oylik hisobot 1 klikda chiqadi.",
            btn_order_similar: "Shu kabi tizimni muhokama qilish →",

            calc_badge: "KALKULYATOR",
            calc_title: "Loyiha byudjeti va muddatini <span class=\"gradient-text-cyan-indigo\">taxminiy hisoblang</span>",
            calc_subtitle: "Yashirin to'lovlarsiz. Nima kerakligini tanlang va taxminiy narxni ko'ring:",
            calc_step1: "Qanday tizim kerak?",
            calc_step2: "Kerakli qo'shimcha imkoniyatlar:",
            calc_type_web: "Veb-Sayt / Landing",
            calc_type_bot: "Telegram Bot / WebApp",
            calc_type_crm: "CRM / Boshqaruv Tizimi",
            calc_type_mobile: "API / Integratsiya",
            from_text: "dan",
            days_text: "ish kuni",
            feat_billing_title: "Onlayn To'lov Tizimi",
            feat_billing_desc: "Payme, Click to'lovlarini ulash (+$100)",
            feat_admin_title: "Boshqaruv Paneli (Admin)",
            feat_admin_desc: "O'zingiz tovar va narxlarni boshqarasiz (+$120)",
            feat_lang_title: "Ko'p tillilik (UZ / RU / EN)",
            feat_lang_desc: "Bir nechta tilda to'liq ishlash (+$60)",
            feat_notify_title: "Telegram / SMS Xabarnoma",
            feat_notify_desc: "Har bir arizada tezkor xabar kelishi (+$50)",
            calc_box_badge: "HISOBLANGAN SMETA",
            calc_est_price: "Taxminiy Narx:",
            calc_fixed_note: "* Yakuniy narx loyiha talabiga ko'ra o'zaro kelishiladi",
            calc_est_time: "Bajarilish muddati:",
            calc_bonuses_title: "Narx ichiga kiritilgan:",
            bonus_1: "To'g'ridan-to'g'ri dasturchi bilan maslahat",
            bonus_2: "30 kun bepul texnik yordam va kafolat",
            bonus_3: "Barcha dastur kodi to'liq sizning nomingizga",
            btn_calc_submit: "Shu hisob bo'yicha bog'lanish →",

            proc_badge: "ISH TARTIBI",
            proc_title: "Boshidan oxirigacha <span class=\"gradient-text-cyan-indigo\">qanday ishlaymiz?</span>",
            proc_subtitle: "Hech qanday tushunarsiz joyi yo'q. Qadam-baqadam shaffof hamkorlik:",
            proc_step1_title: "Suhbat & Reja",
            proc_step1_desc: "G'oyangiz va talablaringizni eshitaman. Ortiqcha xarajatlarsiz eng ma'qul texnik yechim va aniq smetani taklif qilaman.",
            proc_step2_title: "Dizayn & Kelishuv",
            proc_step2_desc: "Sayt yoki botning asosiy sahifalari ko'rinishini tasdiqlab olamiz. Har bir narsa sizga yoqqach ishni boshlaymiz.",
            proc_step3_title: "Dasturlash & Demo",
            proc_step3_desc: "Toza kod yoziladi, to'lov tizimlari ulanadi. Oraliq natijalarni ko'rsatib, fikringizni olib boraman.",
            proc_step4_title: "Topshirish & Bepul Yordam",
            proc_step4_desc: "Loyiha serverga joylanadi, kodlar to'liq topshiriladi va keyingi 30 kun davomida bepul texnik ko'mak beriladi.",

            funnel_badge: "ALOQA VA BUYURTMA",
            funnel_heading: "Loyihangiz bormi? <span class=\"gradient-text-cyan-indigo\">Keling, muhokama qilamiz</span>",
            funnel_lead: "Ortiqcha qog'ozbozliksiz. Qisqacha yozing yoki Telegram orqali to'g'ridan-to'g'ri bog'laning.",
            funnel_step1_title: "15 daqiqada javob",
            funnel_step1_desc: "Arizangiz bo'yicha tezkor bog'lanib, bepul maslahat beraman.",
            funnel_step2_title: "Aniq smeta va muddat",
            funnel_step2_desc: "Hech qanday kutilmagan to'lovlar bo'lmaydi.",
            funnel_step3_title: "To'liq xavfsiz hamkorlik",
            funnel_step3_desc: "Istasangiz rasmiy shartnoma yoki NDA asosida ishlaymiz.",

            direct_contact_label: "Kutmasdan to'g'ridan-to'g'ri bog'lanish:",
            tg_fast: "Telegram (Tezkor javob)",
            tab_full: "Loyiha bo'yicha ma'lumot",
            tab_express: "Tezkor qayta qo'ng'iroq",
            calc_synced_banner: "Kalkulyatordagi smeta formaga muvaffaqiyatli o'tkazildi!",
            label_name: "Ismingiz *",
            placeholder_name: "Masalan: Sardor",
            label_contact: "Telefon raqamingiz yoki Telegram @username *",
            placeholder_contact: "+998 (90) 123-45-67 yoki @username",
            label_type: "Loyiha turi:",
            chip_web: "Veb-Sayt",
            chip_bot: "Telegram Bot",
            chip_crm: "CRM Tizim",
            chip_other: "Boshqa",
            label_details: "Loyiha haqida qisqacha (yoki maqsadingiz):",
            placeholder_details: "Masalan: Bizga yangi mahsulot sotish uchun tez ochiladigan landing page kerak...",
            checkbox_nda: "Loyiham maxfiyligi (NDA) saqlansin",
            btn_submit_full: "Loyihani Muhokama Qilish",
            form_security: "Spam yuborilmaydi. Ma'lumotlaringiz xavfsiz.",
            express_title: "Vaqtingiz kammi?",
            express_desc: "Raqamingizni qoldiring, 15 daqiqada o'zim qo'ng'iroq qilaman yoki Telegramdan yozaman.",
            label_name_simple: "Ismingiz *",
            placeholder_name_simple: "Ismingizni kiriting",
            label_phone_simple: "Telefon yoki Telegram manzilingiz *",
            placeholder_phone_simple: "+998 (90) 000-00-00",
            btn_submit_express: "Menga 15 daqiqada aloqaga chiqing",

            footer_tagline: "Full-Stack Dasturchi & Ishonchli Texnologik Hamkor. Toshkent, O'zbekiston.",
            footer_nav_title: "Sahifalar",
            footer_serv_title: "Xizmatlar",
            footer_contact_title: "To'g'ridan-to'g'ri aloqa",
            footer_rights: "© 2026 lazizfullstack.dev. Barcha huquqlar himoyalangan.",
            footer_contract: "Kafolat shartlari",
            footer_top: "Yuqoriga qaytish ↑",

            modal_success_title: "Arizangiz qabul qilindi!",
            modal_dear: "Rahmat",
            modal_success_desc: "arizangiz saqlandi. 15 daqiqa ichida siz bilan bog'lanaman.",
            modal_summary_type: "Loyiha turi:",
            modal_summary_contact: "Aloqa:",
            btn_telegram_direct: "Kutmasdan Telegramda yozish →",
            btn_close: "Yopish",

            contract_modal_title: "Asosiy Kafolat va Ishlash Bandlari",
            contract_modal_desc: "Sizning mablag'ingiz va vaqtingizni himoya qiluvchi shartlar:",
            c_c1_title: "1. Manba kodi to'liq sizning nomingizga o'tadi",
            c_c1_desc: "Loyiha topshirilgandan keyin barcha kodlar (GitHub, server fayllari va ma'lumotlar bazasi) 100% buyurtmachi mulkiga aylanadi. Hech qanday doimiy majburiy to'lovlar qolmaydi.",
            c_c2_title: "2. Maxfiylik va Tijorat Sirlari (NDA)",
            c_c2_desc: "G'oyangiz, biznes mexanizmlaringiz va mijozlaringiz haqidagi ma'lumotlar uchinchi shaxslarga berilmasligi kafolatlanadi.",
            c_c3_title: "3. Aniq Muddat Majburiyati",
            c_c3_desc: "Ish boshlanishidan avval aniq muddat belgilanadi. Oraliq bosqichlar doimiy ravishda mijozga ko'rsatib boriladi.",
            c_c4_title: "4. 30 Kun Bepul Texnik Yordam",
            c_c4_desc: "Loyiha ishga tushgach, 1 oy davomida har qanday texnik savollar va xatoliklarni bartaraf etish mutlaqo bepul amalga oshiriladi.",
            btn_understood_close: "Tushunarli, yopish",
            btn_go_to_order: "Loyihani boshlash →"
        },

        ru: {
            title: "Лазиз Бозоров — Full-Stack Разработчик & IT Партнер | Ташкент",
            scarcity_status: "Открыт для новых проектов",
            scarcity_text: "Чтобы гарантировать 100% качество и внимание к деталям, веду не более 2-3 проектов одновременно.",
            scarcity_link: "Связаться →",
            brand_role: "Full-Stack Разработчик",
            nav_services: "Услуги",
            nav_portfolio: "Портфолио",
            nav_calculator: "Калькулятор",
            nav_guarantees: "Преимущества",
            nav_process: "Процесс",
            nav_contact: "Контакты",
            nav_home: "Главная",
            lang_label: "Выберите язык:",
            btn_contract_sample: "Условия гарантии",
            btn_start_project: "Написать в Telegram",
            btn_submit_order: "Написать в Telegram",

            hero_pill: "Открыт для проектов • Ташкент, Узбекистан",
            hero_h1: "Привет, я <span class=\"gradient-text-cyan-indigo\">Лазиз Бозоров</span>. Разрабатываю быстрые сайты и Telegram-системы для бизнеса.",
            hero_lead: "Никаких лишних менеджеров и пустых обещаний — вы общаетесь напрямую с разработчиком. Воплощаю ваши идеи в чистый код и надежный результат.",
            hero_btn_calc: "Написать в Telegram",
            hero_btn_cases: "Рассчитать стоимость",
            hero_btn_portfolio: "Смотреть кейсы →",
            proof_15min: "Прямая связь без посредников",
            proof_ownership: "100% кода переходит вам",
            proof_payment: "30 дней поддержки после сдачи",

            dev_card_role: "Full-Stack Разработчик & IT Партнер",
            dev_card_bio: "\"Не люблю бюрократию агентств. Работаю над каждым проектом лично, остаюсь на связи каждый день и пишу код, который приносит реальную пользу вашему делу.\"",
            dev_stack_label: "Стек технологий:",
            dev_perk_1: "100% прямое общение",
            dev_perk_2: "Чистый и понятный код",
            dev_perk_3: "30 дней бесплатной поддержки",
            btn_tg_direct_hero: "Написать напрямую в Telegram",

            stat1_title: "Прямой контакт",
            stat1_desc: "Без посредников и менеджеров, напрямую с инженером",
            stat2_title: "Быстрый ответ",
            stat2_desc: "Оперативная связь в Telegram без задержек",
            stat3_title: "Код полностью ваш",
            stat3_desc: "Все исходники и доступ передаются клиенту",
            stat4_title: "Гарантия и поддержка",
            stat4_desc: "Бесплатная техническая помощь 30 дней после запуска",

            guar_badge: "ПРИНЦИПЫ РАБОТЫ",
            guar_title: "Почему со мной работать <span class=\"gradient-text-cyan-indigo\">удобнее, чем с агентством?</span>",
            guar_subtitle: "Без корпоративной волокиты, лишних наценок и испорченного телефона:",
            g1_title: "1. Прямая связь (Без посредников)",
            g1_desc: "В агентствах информация проходит через несколько менеджеров. Со мной вы обсуждаете задачу напрямую с тем, кто пишет код.",
            g1_btn: "Смотреть условия →",
            g2_title: "2. Четкие сроки и промежуточные демо",
            g2_desc: "Ваше время ценно. Разрабатываю проект поэтапно, регулярно показывая результат.",
            g3_title: "3. Чистый код и полные права",
            g3_desc: "После завершения весь код (GitHub, сервера, базы) передается вам без скрытых привязок.",
            g4_title: "4. 30 дней поддержки после запуска",
            g4_desc: "Не исчезаю после сдачи проекта. Помогаю освоиться, контролирую работу сервера и устраняю любые нюансы бесплатно.",

            serv_badge: "УСЛУГИ И ЦЕНЫ",
            serv_title: "Решения, которые приносят <span class=\"gradient-text-cyan-indigo\">реальную пользу бизнесу</span>",
            serv_subtitle: "Только то, в чем разбираюсь профессионально. Выберите услугу в 1 клик для обсуждения:",
            s1_time: "5–10 раб. дней",
            s1_title: "Быстрый Сайт & Landing Page",
            s1_goal: "Польза: Сайт открывается за 1 секунду на смартфонах и привлекает целевые заявки.",
            s1_f1: "Современный продуманный дизайн",
            s1_f2: "Заявки моментально приходят в Telegram",
            s1_f3: "SEO-оптимизация для поисковиков",
            s1_f4: "Идеальная адаптивность для мобильных",
            s2_time: "4–8 раб. дней",
            s2_title: "Telegram Бот & WebApp Магазин",
            s2_goal: "Польза: Клиенты выбирают товары и оплачивают прямо в Telegram без скачивания приложений.",
            s2_f1: "Визуальный мини-магазин внутри Telegram",
            s2_f2: "Прием платежей через Click, Payme",
            s2_f3: "Уведомления администраторам о заказах",
            s2_f4: "Автоматические рассылки и напоминания",
            s3_time: "12–20 раб. дней",
            s3_title: "CRM & Панели Управления",
            s3_goal: "Польза: Все заказы, клиенты и финансы под контролем на одном удобном экране.",
            s3_f1: "База клиентов и статусы заказов",
            s3_f2: "Учет доходов и расходов",
            s3_f3: "Разграничение прав для сотрудников",
            s3_f4: "Экспорт отчетов в Excel в 1 клик",
            s4_time: "3–7 раб. дней",
            s4_title: "API & Технические Интеграции",
            s4_goal: "Польза: Подключение оплат, SMS и оптимизация работы существующих систем.",
            s4_f1: "Интеграция платежных систем Payme, Click",
            s4_f2: "SMS и Telegram уведомления",
            s4_f3: "Ускорение работы текущего сайта",
            s4_f4: "Настройка серверов и баз данных",
            price_label: "Ориентир цены:",
            btn_choose_service: "Выбрать эту услугу →",
            popular_badge: "Самый Популярный",

            cases_badge: "ПРАКТИЧЕСКИЙ ОПЫТ",
            cases_title: "Практические результаты <span class=\"gradient-text-cyan-indigo\">наших клиентов</span>",
            cases_subtitle: "Не просто дизайн, а решение конкретных бизнес-задач:",
            case1_tag: "Telegram WebApp Магазин",
            case1_time: "Сдан за 5 дней",
            case1_title: "Автоматическая Торговля в Telegram",
            comp_before: "Проблема клиента:",
            case1_before: "Менеджеры долго отвечали в переписке, и часть покупателей уходила к конкурентам.",
            comp_after: "Результат:",
            case1_after: "Запущен каталог с корзиной и оплатой Payme/Click. Заказы оформляются автоматически даже ночью.",
            case2_tag: "Сайт & Landing Page",
            case2_time: "Сдан за 7 дней",
            case2_title: "Быстрый Сайт для Сервисной Компании",
            case2_before: "Старый сайт медленно грузился на телефонах, заявки почти не поступали.",
            case2_after: "Сайт переписан на Next.js, скорость загрузки 1.2с, заявки моментально приходят в Telegram-группу.",
            case3_tag: "Управление Бизнесом (CRM)",
            case3_time: "Сдан за 15 дней",
            case3_title: "Панель Управления Заказами (Mini CRM)",
            case3_before: "Все заказы велись в бумажных блокнотах, сведение отчетов занимало часы.",
            case3_after: "Создана веб-панель со статусами заказов и выручкой. Месячный отчет формируется за 1 клик.",
            btn_order_similar: "Обсудить похожий проект →",

            calc_badge: "КАЛЬКУЛЯТОР",
            calc_title: "Рассчитайте примерную стоимость <span class=\"gradient-text-cyan-indigo\">вашего проекта</span>",
            calc_subtitle: "Без скрытых платежей. Выберите нужные параметры:",
            calc_step1: "Что требуется разработать?",
            calc_step2: "Дополнительные возможности:",
            calc_type_web: "Сайт / Landing",
            calc_type_bot: "Telegram Бот / WebApp",
            calc_type_crm: "CRM / Панель Управления",
            calc_type_mobile: "API / Интеграция",
            from_text: "от",
            days_text: "раб. дней",
            feat_billing_title: "Прием Онлайн Оплаты",
            feat_billing_desc: "Подключение Payme, Click (+$100)",
            feat_admin_title: "Панель Управления (Admin)",
            feat_admin_desc: "Самостоятельное управление ценами и товарами (+$120)",
            feat_lang_title: "Мультиязычность (UZ / RU / EN)",
            feat_lang_desc: "Работа на нескольких языках (+$60)",
            feat_notify_title: "Telegram / SMS Оповещения",
            feat_notify_desc: "Уведомления о каждом новом заказе (+$50)",
            calc_box_badge: "РАСЧЕТНАЯ СТОИМОСТЬ",
            calc_est_price: "Примерная Стоимость:",
            calc_fixed_note: "* Финальная стоимость согласовывается после ТЗ",
            calc_est_time: "Срок выполнения:",
            calc_bonuses_title: "Включено в стоимость:",
            bonus_1: "Прямая консультация с разработчиком",
            bonus_2: "30 дней бесплатной техподдержки",
            bonus_3: "Все исходники передаются вам",
            btn_calc_submit: "Обсудить этот расчет →",

            proc_badge: "ПОРЯДОК РАБОТЫ",
            proc_title: "Как проходит процесс <span class=\"gradient-text-cyan-indigo\">разработки?</span>",
            proc_subtitle: "Все понятно, пошагово и без сюрпризов:",
            proc_step1_title: "Обсуждение и План",
            proc_step1_desc: "Выслушиваю ваши задачи и предлагаю наиболее экономичное и быстрое решение.",
            proc_step2_title: "Дизайн и Согласование",
            proc_step2_desc: "Утверждаем внешний вид ключевых страниц перед написанием кода.",
            proc_step3_title: "Разработка и Демо",
            proc_step3_desc: "Пишу чистый код, настраиваю систему и показываю промежуточный прогресс.",
            proc_step4_title: "Сдача и Поддержка",
            proc_step4_desc: "Разворачиваем проект на сервере, передаю все права и помогаю 30 дней бесплатно.",

            funnel_badge: "КОНТАКТЫ",
            funnel_heading: "Есть проект? <span class=\"gradient-text-cyan-indigo\">Давайте обсудим</span>",
            funnel_lead: "Без лишних формальностей. Напишите пару строк или свяжитесь в Telegram напрямую.",
            funnel_step1_title: "Ответ за 15 минут",
            funnel_step1_desc: "Быстро отвечу и подскажу наилучший вариант.",
            funnel_step2_title: "Понятная смета и сроки",
            funnel_step2_desc: "Никаких неожиданных доплат в процессе.",
            funnel_step3_title: "Безопасное сотрудничество",
            funnel_step3_desc: "Возможно составление договора и NDA.",

            direct_contact_label: "Быстрая связь напрямую:",
            tg_fast: "Telegram (Быстрый ответ)",
            tab_full: "Информация о проекте",
            tab_express: "Быстрый звонок",
            calc_synced_banner: "Смета из калькулятора перенесена в форму!",
            label_name: "Ваше имя *",
            placeholder_name: "Например: Сардор",
            label_contact: "Телефон или Telegram username *",
            placeholder_contact: "+998 (90) 123-45-67 или @username",
            label_type: "Тип проекта:",
            chip_web: "Сайт",
            chip_bot: "Telegram Бот",
            chip_crm: "CRM Система",
            chip_other: "Другое",
            label_details: "Кратко о проекте или задаче:",
            placeholder_details: "Например: Нужен быстрый лендинг для продажи нового товара...",
            checkbox_nda: "Сохранить конфиденциальность (NDA)",
            btn_submit_full: "Обсудить проект",
            form_security: "Никакого спама. Ваши данные в безопасности.",
            express_title: "Мало времени?",
            express_desc: "Оставьте контакт, я напишу или перезвоню в течение 15 минут.",
            label_name_simple: "Ваше имя *",
            placeholder_name_simple: "Введите имя",
            label_phone_simple: "Телефон или Telegram *",
            placeholder_phone_simple: "+998 (90) 000-00-00",
            btn_submit_express: "Связаться со мной",

            footer_tagline: "Full-Stack Разработчик & Технический Партнер. Ташкент, Узбекистан.",
            footer_nav_title: "Навигация",
            footer_serv_title: "Услуги",
            footer_contact_title: "Контакты",
            footer_rights: "© 2026 lazizfullstack.dev. Все права защищены.",
            footer_contract: "Условия гарантии",
            footer_top: "Наверх ↑",

            modal_success_title: "Заявка отправлена!",
            modal_dear: "Спасибо",
            modal_success_desc: "ваше сообщение получено. Я свяжусь с вами в течение 15 минут.",
            modal_summary_type: "Тип проекта:",
            modal_summary_contact: "Контакт:",
            btn_telegram_direct: "Написать сразу в Telegram →",
            btn_close: "Закрыть",

            contract_modal_title: "Основные Условия и Гарантии",
            contract_modal_desc: "Принципы, защищающие ваши вложения и время:",
            c_c1_title: "1. 100% передача исходного кода",
            c_c1_desc: "Все исходники, базы данных и доступы передаются в вашу полную собственность без скрытых подписок.",
            c_c2_title: "2. Конфиденциальность (NDA)",
            c_c2_desc: "Ваша бизнес-идея, данные клиентов и процессы защищены от передачи третьим лицам.",
            c_c3_title: "3. Соблюдение сроков",
            c_c3_desc: "Сроки фиксируются заранее. Все промежуточные этапы демонстрируются регулярно.",
            c_c4_title: "4. 30 дней бесплатной поддержки",
            c_c4_desc: "После запуска бесплатно сопровождаю проект, устраняя любые технические вопросы.",
            btn_understood_close: "Понятно, закрыть",
            btn_go_to_order: "Начать проект →"
        },

        en: {
            title: "Laziz Bozorov — Full-Stack Developer & Tech Partner | Tashkent",
            scarcity_status: "Open for new projects",
            scarcity_text: "To ensure 100% focus and code quality, I only take on 2-3 key client projects at a time.",
            scarcity_link: "Get in touch →",
            brand_role: "Full-Stack Developer",
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_calculator: "Estimator",
            nav_guarantees: "Why Me",
            nav_process: "Process",
            nav_contact: "Contact",
            nav_home: "Home",
            lang_label: "Choose language:",
            btn_contract_sample: "Guarantees",
            btn_start_project: "Chat on Telegram",
            btn_submit_order: "Chat on Telegram",

            hero_pill: "Available for projects • Tashkent, Uzbekistan",
            hero_h1: "Hi, I'm <span class=\"gradient-text-cyan-indigo\">Laziz Bozorov</span>. I build high-performance websites &amp; Telegram systems.",
            hero_lead: "No agencies, no middle managers. You work directly with the engineer who builds your product — transparent communication, clean code, and fast delivery.",
            hero_btn_calc: "Chat on Telegram",
            hero_btn_cases: "Estimate project",
            hero_btn_portfolio: "View projects →",
            proof_15min: "Direct communication (0% middlemen)",
            proof_ownership: "100% IP & source code ownership",
            proof_payment: "30-day post-launch warranty",

            dev_card_role: "Full-Stack Developer & Tech Partner",
            dev_card_bio: "\"I dislike agency bureaucracy. I build every project myself, stay in touch daily, and deliver clean, robust code that genuinely helps your business grow.\"",
            dev_stack_label: "Tech stack:",
            dev_perk_1: "100% direct developer access",
            dev_perk_2: "Clean, maintainable source code",
            dev_perk_3: "30 days free post-launch support",
            btn_tg_direct_hero: "Chat directly on Telegram",

            stat1_title: "Direct Access",
            stat1_desc: "Zero middlemen, direct line with the engineer",
            stat2_title: "Fast Response",
            stat2_desc: "Instant communication on Telegram",
            stat3_title: "100% Code Ownership",
            stat3_desc: "All source code and servers belong to you",
            stat4_title: "30-Day Warranty",
            stat4_desc: "Free technical support after launch",

            guar_badge: "WORKING PRINCIPLES",
            guar_title: "Why work with me <span class=\"gradient-text-cyan-indigo\">instead of an agency?</span>",
            guar_subtitle: "No overhead, no markup, no broken telephone:",
            g1_title: "1. Direct Communication",
            g1_desc: "At agencies, instructions get lost between managers. Here, you discuss technical decisions directly with the builder.",
            g1_btn: "View guarantees →",
            g2_title: "2. Predictable Timelines & Demos",
            g2_desc: "Your time matters. I work in milestone sprints and provide regular live demos.",
            g3_title: "3. Clean Code & 100% IP Ownership",
            g3_desc: "Upon delivery, all repository code and databases are transferred entirely to you. No vendor lock-in.",
            g4_title: "4. 30 Days Free Warranty",
            g4_desc: "I don't disappear after handover. Enjoy 30 days of free bug fixes and operational guidance.",

            serv_badge: "SERVICES & ESTIMATES",
            serv_title: "High-ROI services <span class=\"gradient-text-cyan-indigo\">tailored for business growth</span>",
            serv_subtitle: "Battle-tested solutions built with clean modern architecture. Select in 1 click:",
            s1_time: "5–10 business days",
            s1_title: "Fast Website & Landing Page",
            s1_goal: "Value: Loads in under 1 second on mobile devices, capturing high-intent leads.",
            s1_f1: "Clean, high-trust custom design",
            s1_f2: "Direct instant Telegram notifications",
            s1_f3: "Built-in SEO architecture",
            s1_f4: "Fully responsive on mobile",
            s2_time: "4–8 business days",
            s2_title: "Telegram Bot & WebApp Store",
            s2_goal: "Value: Customers browse items and check out inside Telegram with Click/Payme.",
            s2_f1: "Interactive in-app mini catalog",
            s2_f2: "Automated payment gateways",
            s2_f3: "Instant order forwarding to admins",
            s2_f4: "Automated customer notifications",
            s3_time: "12–20 business days",
            s3_title: "CRM & Internal Dashboard",
            s3_goal: "Value: Streamline operations and monitor revenue in a single, secure control room.",
            s3_f1: "Customer directory & order pipeline",
            s3_f2: "Revenue and cashflow reporting",
            s3_f3: "Role-based access permissions",
            s3_f4: "1-click Excel export",
            s4_time: "3–7 business days",
            s4_title: "API & Technical Integrations",
            s4_goal: "Value: Connect payments, SMS alerts, or speed up your existing applications.",
            s4_f1: "Payme, Click & card payment integration",
            s4_f2: "SMS & Telegram automated alerts",
            s4_f3: "Website speed & performance optimization",
            s4_f4: "Database and cloud server setup",
            price_label: "Starting at:",
            btn_choose_service: "Select this service →",
            popular_badge: "Most Requested",

            cases_badge: "PROVEN RESULTS",
            cases_title: "Real outcomes delivered <span class=\"gradient-text-cyan-indigo\">for real clients</span>",
            cases_subtitle: "Not just screenshots — real problems solved with scalable code:",
            case1_tag: "Telegram WebApp Store",
            case1_time: "Delivered in 5 days",
            case1_title: "Automated Telegram E-Commerce",
            comp_before: "Client Challenge:",
            case1_before: "Staff replied slowly to chats, losing impatient buyers to other shops.",
            comp_after: "Delivered Solution:",
            case1_after: "Built a Telegram mini-store with instant Payme/Click checkout. Orders now process 24/7 automatically.",
            case2_tag: "Website & Landing Page",
            case2_time: "Delivered in 7 days",
            case2_title: "High-Speed Corporate Web Presence",
            case2_before: "The old site was sluggish on mobile, yielding minimal inbound leads.",
            case2_after: "Rebuilt with Next.js (1.2s load time). Inquiries land instantly in the staff Telegram group.",
            case3_tag: "Internal Tools (CRM)",
            case3_time: "Delivered in 15 days",
            case3_title: "Order Management Dashboard (Mini CRM)",
            case3_before: "All transactions were scribbled in notebooks; monthly audits took days.",
            case3_after: "Built a clean web dashboard for tracking order statuses and cash flow. 1-click audit reports.",
            btn_order_similar: "Discuss a similar project →",

            calc_badge: "ESTIMATOR",
            calc_title: "Estimate project budget <span class=\"gradient-text-cyan-indigo\">&amp; timeline</span>",
            calc_subtitle: "No hidden charges. Choose your requirements to see an honest estimate:",
            calc_step1: "What do you need built?",
            calc_step2: "Optional capabilities:",
            calc_type_web: "Website / Landing",
            calc_type_bot: "Telegram Bot / WebApp",
            calc_type_crm: "CRM / Management Tool",
            calc_type_mobile: "API / Integration",
            from_text: "from",
            days_text: "work days",
            feat_billing_title: "Online Payment Gateway",
            feat_billing_desc: "Payme, Click integration (+$100)",
            feat_admin_title: "Admin Dashboard",
            feat_admin_desc: "Manage products & prices yourself (+$120)",
            feat_lang_title: "Multi-Language (UZ / RU / EN)",
            feat_lang_desc: "Full localization support (+$60)",
            feat_notify_title: "Telegram / SMS Alerts",
            feat_notify_desc: "Real-time order notifications (+$50)",
            calc_box_badge: "PROJECT ESTIMATE",
            calc_est_price: "Estimated Cost:",
            calc_fixed_note: "* Final price confirmed based on project specs",
            calc_est_time: "Estimated Timeline:",
            calc_bonuses_title: "Included at zero extra cost:",
            bonus_1: "Direct consultation with the developer",
            bonus_2: "30 days free post-launch support",
            bonus_3: "Full source code and ownership transfer",
            btn_calc_submit: "Inquire with this estimate →",

            proc_badge: "WORKFLOW",
            proc_title: "How we collaborate <span class=\"gradient-text-cyan-indigo\">step by step</span>",
            proc_subtitle: "Clear, structured, and completely transparent:",
            proc_step1_title: "Discovery & Plan",
            proc_step1_desc: "We discuss your goals and choose the most cost-effective architecture.",
            proc_step2_title: "Design & Agreement",
            proc_step2_desc: "We align on layouts and scope before writing production code.",
            proc_step3_title: "Build & Milestones",
            proc_step3_desc: "I write clean code, integrate APIs, and provide regular interactive demos.",
            proc_step4_title: "Launch & Support",
            proc_step4_desc: "Deployment to production, full repository transfer, and 30 days of warranty.",

            funnel_badge: "START A PROJECT",
            funnel_heading: "Have a project in mind? <span class=\"gradient-text-cyan-indigo\">Let's talk</span>",
            funnel_lead: "No red tape. Drop a quick note or message me directly on Telegram.",
            funnel_step1_title: "15-minute response",
            funnel_step1_desc: "Quick feedback on feasibility and costs.",
            funnel_step2_title: "Clear quote & deadline",
            funnel_step2_desc: "No unexpected add-ons or scope creep.",
            funnel_step3_title: "Safe collaboration",
            funnel_step3_desc: "NDA and formal contracts available upon request.",

            direct_contact_label: "Direct immediate reach:",
            tg_fast: "Telegram (Fastest response)",
            tab_full: "Detailed Project Spec",
            tab_express: "Quick Callback",
            calc_synced_banner: "Estimate transferred to form successfully!",
            label_name: "Your Name *",
            placeholder_name: "e.g. Sardor",
            label_contact: "Phone or Telegram handle *",
            placeholder_contact: "+998 (90) 123-45-67 or @username",
            label_type: "Project Type:",
            chip_web: "Website",
            chip_bot: "Telegram Bot",
            chip_crm: "CRM Tool",
            chip_other: "Other",
            label_details: "Project details or goals:",
            placeholder_details: "e.g. We need a clean landing page for a new product launch...",
            checkbox_nda: "Keep my project confidential (NDA)",
            btn_submit_full: "Discuss Project",
            form_security: "Zero spam. Your data remains strictly confidential.",
            express_title: "Short on time?",
            express_desc: "Leave your contact and I'll reach out within 15 minutes.",
            label_name_simple: "Your Name *",
            placeholder_name_simple: "Enter your name",
            label_phone_simple: "Phone or Telegram *",
            placeholder_phone_simple: "+998 (90) 000-00-00",
            btn_submit_express: "Request 15-Minute Call",

            footer_tagline: "Full-Stack Developer & Tech Partner. Tashkent, Uzbekistan.",
            footer_nav_title: "Navigation",
            footer_serv_title: "Services",
            footer_contact_title: "Contact",
            footer_rights: "© 2026 lazizfullstack.dev. All rights reserved.",
            footer_contract: "Guarantees",
            footer_top: "Back to top ↑",

            modal_success_title: "Inquiry Received!",
            modal_dear: "Thank you",
            modal_success_desc: "your message has been saved. I'll reach out within 15 minutes.",
            modal_summary_type: "Project Type:",
            modal_summary_contact: "Contact:",
            btn_telegram_direct: "Chat directly on Telegram →",
            btn_close: "Close",

            contract_modal_title: "Working Terms & Guarantees",
            contract_modal_desc: "Core commitments safeguarding your time and capital:",
            c_c1_title: "1. 100% IP & Code Ownership",
            c_c1_desc: "All source code, server setups, and databases become your sole property with zero recurring license traps.",
            c_c2_title: "2. Confidentiality & NDA",
            c_c2_desc: "Your ideas, customer lists, and proprietary operations are never shared with third parties.",
            c_c3_title: "3. Predictable Timelines",
            c_c3_desc: "Deadlines are defined upfront and milestones are delivered transparently.",
            c_c4_title: "4. 30-Day Free Warranty",
            c_c4_desc: "Free operational support and bug resolution for 30 days after public release.",
            btn_understood_close: "Understood, close",
            btn_go_to_order: "Start project →"
        }
    };

    /* --------------------------------------------------------------------------
       2. I18N CONTROLLER & LANGUAGE SWITCHER
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

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        updateCalculator();
    };

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const chosenLang = btn.getAttribute('data-lang');
            setLanguage(chosenLang);
        });
    });

    /* --------------------------------------------------------------------------
       3. MOBILE DRAWER NAVIGATION
       -------------------------------------------------------------------------- */
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
        });

        mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
            });
        });
    }

    /* --------------------------------------------------------------------------
       4. INTERACTIVE CALCULATOR (ESTIMATOR)
       -------------------------------------------------------------------------- */
    const baseEstimates = {
        website: { price: 300, daysUz: "5–10 ish kuni", daysRu: "5–10 раб. дней", daysEn: "5–10 work days" },
        bot:     { price: 250, daysUz: "4–8 ish kuni",  daysRu: "4–8 раб. дней",  daysEn: "4–8 work days" },
        crm:     { price: 700, daysUz: "12–20 ish kuni",daysRu: "12–20 раб. дней",daysEn: "12–20 work days" },
        other:   { price: 150, daysUz: "3–7 ish kuni",  daysRu: "3–7 раб. дней",  daysEn: "3–7 work days" }
    };

    const calcPriceEl = document.getElementById('calcEstimatedPrice');
    const calcDaysEl = document.getElementById('calcEstimatedDays');
    const typeCards = document.querySelectorAll('.calc-type-card');
    const featBilling = document.getElementById('calcFeatBilling');
    const featAdmin = document.getElementById('calcFeatAdmin');
    const featLang = document.getElementById('calcFeatLang');
    const featNotify = document.getElementById('calcFeatNotify');
    const btnApplyCalc = document.getElementById('btnApplyCalcToOrder');

    function getSelectedType() {
        const checked = document.querySelector('input[name="calcType"]:checked');
        return checked ? checked.value : 'website';
    }

    function updateCalculator() {
        const typeKey = getSelectedType();
        const base = baseEstimates[typeKey] || baseEstimates.website;

        let total = base.price;
        if (featBilling && featBilling.checked) total += parseInt(featBilling.value, 10);
        if (featAdmin && featAdmin.checked) total += parseInt(featAdmin.value, 10);
        if (featLang && featLang.checked) total += parseInt(featLang.value, 10);
        if (featNotify && featNotify.checked) total += parseInt(featNotify.value, 10);

        if (calcPriceEl) {
            calcPriceEl.textContent = `$${total}`;
        }

        if (calcDaysEl) {
            if (currentLang === 'ru') calcDaysEl.textContent = base.daysRu;
            else if (currentLang === 'en') calcDaysEl.textContent = base.daysEn;
            else calcDaysEl.textContent = base.daysUz;
        }
    }

    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            typeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const radio = card.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                updateCalculator();
            }
        });
    });

    [featBilling, featAdmin, featLang, featNotify].forEach(cb => {
        if (cb) cb.addEventListener('change', updateCalculator);
    });

    if (btnApplyCalc) {
        btnApplyCalc.addEventListener('click', () => {
            const typeKey = getSelectedType();
            const price = calcPriceEl ? calcPriceEl.textContent : '$300';
            const days = calcDaysEl ? calcDaysEl.textContent : '5-10';

            const chip = document.querySelector(`.chip-btn[data-value="${typeKey}"]`);
            if (chip) chip.click();

            const details = document.getElementById('projectDetails');
            if (details) {
                if (currentLang === 'ru') {
                    details.value = `Расчет из калькулятора:\n- Услуга: ${typeKey.toUpperCase()}\n- Примерная стоимость: ${price}\n- Сроки: ${days}\n\nЗдравствуйте Лазиз, хочу обсудить этот проект!`;
                } else if (currentLang === 'en') {
                    details.value = `Estimate summary:\n- Service: ${typeKey.toUpperCase()}\n- Approx Budget: ${price}\n- Timeline: ${days}\n\nHi Laziz, I would like to discuss this project!`;
                } else {
                    details.value = `Kalkulyator smetasi:\n- Xizmat: ${typeKey.toUpperCase()}\n- Taxminiy narx: ${price}\n- Muddat: ${days}\n\nAssalomu alaykum Laziz, ushbu loyiha bo'yicha bog'lanmoqchiman!`;
                }
            }

            const banner = document.getElementById('calcSyncBanner');
            if (banner) {
                banner.classList.remove('hidden');
                setTimeout(() => banner.classList.add('hidden'), 5000);
            }

            const targetSection = document.getElementById('zakas-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                const nameInput = document.getElementById('clientName');
                if (nameInput) setTimeout(() => nameInput.focus(), 600);
            }
        });
    }

    /* --------------------------------------------------------------------------
       5. 1-CLICK SERVICE SELECTOR
       -------------------------------------------------------------------------- */
    document.querySelectorAll('.btn-select-service').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-service-key') || 'website';
            const chip = document.querySelector(`.chip-btn[data-value="${key}"]`);
            if (chip) chip.click();

            const details = document.getElementById('projectDetails');
            if (details && !details.value) {
                if (currentLang === 'ru') {
                    details.value = `Здравствуйте! Меня интересует разработка услуги: ${key.toUpperCase()}. Хотел бы обсудить подробности.`;
                } else if (currentLang === 'en') {
                    details.value = `Hi! I am interested in building: ${key.toUpperCase()}. Let's discuss details.`;
                } else {
                    details.value = `Assalomu alaykum! Men quyidagi xizmat bo'yicha bog'lanmoqdaman: ${key.toUpperCase()}. Batafsil gaplashsak degandim.`;
                }
            }

            const targetSection = document.getElementById('zakas-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                const nameInput = document.getElementById('clientName');
                if (nameInput) setTimeout(() => nameInput.focus(), 600);
            }
        });
    });

    /* --------------------------------------------------------------------------
       6. CHIPS SELECTOR FOR ORDER FORM
       -------------------------------------------------------------------------- */
    const chips = document.querySelectorAll('#projectTypeChips .chip-btn');
    chips.forEach(c => {
        c.addEventListener('click', () => {
            chips.forEach(item => item.classList.remove('active'));
            c.classList.add('active');
        });
    });

    /* --------------------------------------------------------------------------
       7. DUAL TAB ORDER FORM CONTROLLER
       -------------------------------------------------------------------------- */
    const tabFull = document.getElementById('tabFullOrderBtn');
    const tabExpress = document.getElementById('tabExpressOrderBtn');
    const formFull = document.getElementById('formFullOrder');
    const formExpress = document.getElementById('formExpressOrder');

    if (tabFull && tabExpress && formFull && formExpress) {
        tabFull.addEventListener('click', () => {
            tabFull.classList.add('active');
            tabExpress.classList.remove('active');
            formFull.classList.add('active');
            formExpress.classList.remove('active');
        });

        tabExpress.addEventListener('click', () => {
            tabExpress.classList.add('active');
            tabFull.classList.remove('active');
            formExpress.classList.add('active');
            formFull.classList.remove('active');
        });
    }

    /* --------------------------------------------------------------------------
       8. MODAL HANDLERS & TELEGRAM DIRECT URL GENERATOR
       -------------------------------------------------------------------------- */
    const modalSuccess = document.getElementById('modalOrderSuccess');
    const modalContract = document.getElementById('modalContractPreview');
    const clientNameEl = document.getElementById('modalSuccessClientName');
    const orderIdEl = document.getElementById('modalOrderIdBadge');
    const orderTypeEl = document.getElementById('modalOrderTypeBadge');
    const orderContactEl = document.getElementById('modalOrderContactBadge');
    const directTelegramLink = document.getElementById('modalDirectTelegramLink');

    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    // Success modal close triggers
    const closeSuccessBtn = document.getElementById('btnCloseOrderSuccessModal');
    const closeSuccessBtnBottom = document.getElementById('btnCloseOrderSuccessModalBtn');
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', () => closeModal(modalSuccess));
    if (closeSuccessBtnBottom) closeSuccessBtnBottom.addEventListener('click', () => closeModal(modalSuccess));

    // Contract modal triggers
    const openContractBtns = [
        document.getElementById('btnOpenContractModal'),
        document.getElementById('btnOpenContractMobile'),
        document.getElementById('btnFooterContract')
    ];
    document.querySelectorAll('.btn-open-contract-modal').forEach(b => openContractBtns.push(b));

    openContractBtns.forEach(b => {
        if (b) b.addEventListener('click', () => openModal(modalContract));
    });

    const closeContractBtn = document.getElementById('btnCloseContractModal');
    const closeContractBtnBottom = document.getElementById('btnCloseContractModalBtn');
    const contractGoOrder = document.getElementById('btnContractGoToOrder');

    if (closeContractBtn) closeContractBtn.addEventListener('click', () => closeModal(modalContract));
    if (closeContractBtnBottom) closeContractBtnBottom.addEventListener('click', () => closeModal(modalContract));
    if (contractGoOrder) contractGoOrder.addEventListener('click', () => closeModal(modalContract));

    // Close modals on clicking overlay background
    [modalSuccess, modalContract].forEach(m => {
        if (m) {
            m.addEventListener('click', (e) => {
                if (e.target === m) closeModal(m);
            });
        }
    });

    // Form Submissions
    function handleOrderSubmission(clientName, contact, type, details) {
        const randomId = '#LB-' + Math.floor(100 + Math.random() * 900);

        if (clientNameEl) clientNameEl.textContent = clientName || 'Mijoz';
        if (orderIdEl) orderIdEl.textContent = randomId;
        if (orderTypeEl) orderTypeEl.textContent = type;
        if (orderContactEl) orderContactEl.textContent = contact;

        const tgMessage = `Assalomu alaykum Laziz!\n\nYangi loyiha arizasi (${randomId}):\n👤 Ism: ${clientName}\n📞 Aloqa: ${contact}\n🎯 Turi: ${type}\n📝 Ma'lumot: ${details || 'Tezkor murojaat'}`;
        const tgUrl = `https://t.me/lazizfullstack?text=${encodeURIComponent(tgMessage)}`;

        if (directTelegramLink) {
            directTelegramLink.href = tgUrl;
        }

        openModal(modalSuccess);
    }

    if (formFull) {
        formFull.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clientName').value.trim();
            const contact = document.getElementById('contactInfo').value.trim();
            const activeChip = document.querySelector('#projectTypeChips .chip-btn.active');
            const type = activeChip ? activeChip.textContent.trim() : 'Veb-Sayt';
            const details = document.getElementById('projectDetails').value.trim();

            handleOrderSubmission(name, contact, type, details);
            formFull.reset();
        });
    }

    if (formExpress) {
        formExpress.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('expressName').value.trim();
            const contact = document.getElementById('expressPhone').value.trim();

            handleOrderSubmission(name, contact, 'Tezkor Aloqa (15 daqiqa)', 'Mijoz 15 daqiqada qayta aloqaga chiqishni so\'radi.');
            formExpress.reset();
        });
    }

    /* --------------------------------------------------------------------------
       9. SUBTLE MOUSE SPOTLIGHT TRACKING (BENTO CARDS)
       -------------------------------------------------------------------------- */
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Initialize with preferred or default language
    setLanguage(currentLang);
});
