/**
 * ==========================================================================
 * LAZIZFULLSTACK.DEV — MULTILINGUAL (UZ / RU / EN) HIGH-CONVERSION ENGINE
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* --------------------------------------------------------------------------
       1. I18N MULTILINGUAL TRANSLATION DICTIONARY (UZ / RU / EN)
       -------------------------------------------------------------------------- */
    const translations = {
        uz: {
            title: "LazizFullStack — Biznesingiz uchun Yuqori Daromadli Web & Telegram Tizimlar",
            scarcity_status: "Yangi loyihalar qabul qilinmoqda",
            scarcity_text: "Har bir loyihaga 100% vaqt va sifat ajratish maqsadida oyiga faqat 2-3 ta sifatli loyiha olamiz.",
            scarcity_link: "Navbatni band qilish →",
            brand_role: "Full-Stack Engineer & Tech Partner",
            nav_services: "Xizmatlar",
            nav_portfolio: "Natijalar",
            nav_calculator: "Kalkulyator",
            nav_guarantees: "Kafolatlar",
            nav_process: "Jarayon",
            nav_home: "Bosh sahifa",
            lang_label: "Tilni tanlang:",
            btn_contract_sample: "Shartnoma namunasi",
            btn_start_project: "Loyiha boshlash",
            btn_submit_order: "Zakas qoldirish",

            hero_pill: "Rasmiy Shartnoma • Aniq Muddat • 30 Kun Bepul Yordam",
            hero_h1: "Biznesingizga <span class=\"gradient-text-cyan-indigo\">yangi mijoz keltiruvchi</span> va xarajatni kamaytiruvchi IT tizimlar yaratamiz.",
            hero_lead: "Ortiqcha va keraksiz funksiyalarsiz. Mijozingiz sarflagan har 1 so'mi o'zini oqlashi uchun faqat real sotuv keltiradigan Web-saytlar, Telegram do'konlar va CRM tizimlar quramiz.",
            hero_btn_calc: "Narxni hisoblash va Zakas berish",
            hero_btn_cases: "Oldingi ishlarni ko'rish →",
            proof_15min: "15 daqiqada bepul konsultatsiya",
            proof_ownership: "Barcha kodlar sizning mulkingiz",
            proof_payment: "Bosqichma-bosqich xavfsiz to'lov",

            hero_box_badge: "MIJOZ UCHUN ANIQ FOYDA",
            hero_box_status: "100% AMALDA",
            benefit1_title: "Tez va Sotuvchi Web-Sayt",
            benefit1_desc: "Reklamaga ketgan pulingiz havoga uchmaydi. Sayt 1.5 soniyada yuklanadi va har bir tashrifchini ariza qoldirishga undaydi.",
            benefit2_title: "Telegram WebApp Do'kon",
            benefit2_desc: "Eng tez daromad keltiruvchi vosita. Mijoz ortiqcha ilova o'rnatmasdan Telegramda tovar tanlaydi va to'lov qiladi.",
            benefit3_title: "Biznesni Avtomatlashtirish (CRM)",
            benefit3_desc: "Menejerlar mijozlarni yo'qotmaydi, barcha moliya va hisobotlar yagona ekranda nazorat qilinadi.",
            hero_penalty_note: "Agar belgilangan muddatdan kechiksak, shartnoma bo'yicha penya to'laymiz.",

            stat1_title: "Yakunlangan Loyihalar",
            stat1_desc: "Real biznes egalari foydalanayotgan dasturlar",
            stat2_title: "Amaliy Tajriba",
            stat2_desc: "Frontend, Backend va Tizimlar Arxitekturasi",
            stat3_title: "Tezkor Aloqa",
            stat3_desc: "Savollaringizga tezda javob beramiz",
            stat4_title: "Mulk Huquqi Sizniki",
            stat4_desc: "Barcha manba kodlari mijoz nomiga o'tadi",

            guar_badge: "XOTIRJAMLIK KAFOLATI",
            guar_title: "Siz to'lagan pul <span class=\"gradient-text-cyan-indigo\">100% himoyalangan</span>",
            guar_subtitle: "Ish chala qolishi yoki muddat cho'zilishidan charchadingizmi? Bizda hammasi rasmiy va qonuniy:",
            g1_title: "1. Rasmiy Shartnoma va NDA (Maxfiylik)",
            g1_desc: "Biznes g'oyangiz va mijozlar bazangiz hech qachon uchinchi shaxslarga chiqmaydi. Rasmiy yuridik shartnoma tuzamiz, xohlasangiz hisob-kitob schyotga pul o'tkazasiz.",
            g1_btn: "Shartnoma bandlarini o'qish →",
            g2_title: "2. Temir Deadline (Muddat Kafolati)",
            g2_desc: "Vaqtingiz bekor ketmaydi. Agar shartnomadagi muddatdan 1 kun kechiksak, shartnoma bo'yicha har bir kechikkan kun uchun moliyaviy penya to'laymiz.",
            g3_title: "3. To'liq Kod Egaligi (100% Sizniki)",
            g3_desc: "Loyiha tayyor bo'lgach, barcha dastur kodlari (GitHub va Server) to'liq sizning nomingizga topshiriladi. Bizga bog'lanib qolmaysiz, loyihaning to'liq egasi o'zingiz bo'lasiz.",
            g4_title: "4. 30 Kun Bepul VIP Texnik Yordam",
            g4_desc: "Sayt topshirilgandan keyin ham sizni tashlab ketmaymiz. 1 oy davomida server nazorati, mayda tuzatishlar va xodimlaringizga o'rgatish mutlaqo bepul.",

            serv_badge: "XIZMATLAR & ANIQ NARXLAR",
            serv_title: "Har bir tiyin biznesingizga <span class=\"gradient-text-cyan-indigo\">maksimal natija</span> bersin",
            serv_subtitle: "Faqat o'zimiz professional bajara oladigan, sinovdan o'tgan xizmatlar. Birgina tugma bilan xizmatni tanlab zakas qoldirishingiz mumkin:",
            s1_time: "5–10 ish kuni",
            s1_title: "Sotuvchi Landing Page & Sayt",
            s1_goal: "Keltiradigan foydasi: Reklamangizdan tushadigan arizalar soni 2-3 barobar oshadi. Sayt telefon va kompyuterda bir zumda ochiladi.",
            s1_f1: "Zamonaviy va ishonch uyg'otuvchi dizayn",
            s1_f2: "Arizalar to'g'ridan-to'g'ri Telegramingizga keladi",
            s1_f3: "Google va Yandex'da qidiruv optimizatsiyasi (SEO)",
            s1_f4: "O'zingiz boshqara oladigan qulay panel",
            s2_time: "4–8 ish kuni",
            s2_title: "Telegram Bot & WebApp Do'kon",
            s2_goal: "Keltiradigan foydasi: Mijozlaringiz alohida ilova o'rnatmaydi. Telegram ichida katalog ko'radi va to'lov qiladi.",
            s2_f1: "Telegram ichida qulay vizual mini-do'kon",
            s2_f2: "Payme, Click, Stripe to'lovlari avtomatik tushadi",
            s2_f3: "Buyurtmalarni nazorat qilish boti",
            s2_f4: "Mijozlarga avtomatik xabar va eslatma yuborish",
            s3_time: "15–25 ish kuni",
            s3_title: "CRM & Boshqaruv Tizimi",
            s3_goal: "Keltiradigan foydasi: Xodimlaringiz mijozlarni unutmaydi, pul yo'qolishi to'xtaydi, biznesingiz tizimli holatga keladi.",
            s3_f1: "Mijozlar bazasi va sotuv voronkasi",
            s3_f2: "Kassa, daromad va sof foyda hisoboti",
            s3_f3: "Xodimlar uchun ruxsatlar va rollar tizimi",
            s3_f4: "Excel ga bir tugma bilan eksport va hisobot",
            s4_time: "20–35 ish kuni",
            s4_title: "Mobil Ilova (iOS & Android)",
            s4_goal: "Keltiradigan foydasi: Doimiy mijozlaringiz cho'ntagida bo'lasiz. Push-xabarlar orqali takroriy sotuvlar bepul oshadi.",
            s4_f1: "Bitta kod bilan iPhone va Android'da 100% sifatli ish",
            s4_f2: "App Store va Google Play'ga chiqarib berish",
            s4_f3: "SMS kod bilan tezkor ro'yxatdan o'tish",
            s4_f4: "Tez va qulay buyurtma berish mexanizmi",
            price_label: "Narxi:",
            btn_choose_service: "Ushbu xizmatni tanlash →",
            popular_badge: "Eng Ko'p Daromad Keltiruvchi",

            cases_badge: "REAL KEYS-STADILAR",
            cases_title: "Mijozlarimiz olgan <span class=\"gradient-text-cyan-indigo\">haqiqiy natijalar</span>",
            cases_subtitle: "Faqat quruq rasm emas — biznes qanday muammo bilan keldi va tizim orqali qanday foyda ko'rdi:",
            case1_tag: "Sotuvchi Web-Sayt",
            case1_time: "7 kunda topshirildi",
            case1_title: "Konversiyali B2B Landing Page",
            comp_before: "Avvalgi holat:",
            case1_before: "Eski saytda arizalar kam edi, har 100 tashrifchidan faqat 1 tasi telefon qilar edi (1% konversiya).",
            comp_after: "Biz yaratgan natija:",
            case1_after: "Yangi tezkor sayt va qulay forma orqali arizalar 3.8% ga chiqdi. Reklamaga ketgan pul 2 barobar ko'proq mijoz keltirmoqda.",
            case2_tag: "Telegram WebApp Do'kon",
            case2_time: "5 kunda topshirildi",
            case2_title: "Telegram Avtomatik Savdo Tizimi",
            case2_before: "Menejerlar lichkada kech javob bergani uchun mijozlar boshqa joyga ketib qolardi.",
            case2_after: "Telegram bot ichida rasm, razmer va onlayn to'lov ulandi. Savdolarning 65% i kechasi ham avtomatik tushmoqda.",
            case3_tag: "Biznes CRM Tizimi",
            case3_time: "18 kunda topshirildi",
            case3_title: "Xizmatlar Kompaniyasi uchun CRM",
            case3_before: "Barcha hisob-kitoblar qog'oz va daftarda yuritilardi. Oylik hisobot chiqarish 3 kun vaqt olardi.",
            case3_after: "Barcha filiallar va kassa bitta ekranda. Rahbar istalgan daqiqada foydani ko'radi, hisobotlar 1 soniyada chiqadi.",
            btn_order_similar: "Shunday tizim zakas qilish →",

            calc_badge: "ANIQ SMETA",
            calc_title: "Loyihangiz narxini <span class=\"gradient-text-cyan-indigo\">1 daqiqada hisoblang</span>",
            calc_subtitle: "Yashirin to'lovlarsiz. Nima kerakligini tanlang va taxminiy narxni ko'ring:",
            calc_step1: "Qanday tizim kerak?",
            calc_step2: "Kerakli qo'shimcha imkoniyatlar:",
            calc_type_web: "Sotuvchi Web-Sayt",
            calc_type_bot: "Telegram Do'kon / Bot",
            calc_type_crm: "CRM / Ichki Tizim",
            calc_type_mobile: "Mobil Ilova (iOS/Android)",
            from_text: "dan",
            days_text: "ish kuni",
            feat_billing_title: "💳 Onlayn To'lov Tizimi",
            feat_billing_desc: "Payme, Click, Stripe to'g'ridan-to'g'ri hisobga (+$100)",
            feat_admin_title: "📊 Boshqaruv Paneli (Admin)",
            feat_admin_desc: "O'zingiz tovar va narxlarni boshqarasiz (+$150)",
            feat_lang_title: "🌐 Ko'p tillilik (UZ / RU / EN)",
            feat_lang_desc: "Bir nechta tilda to'liq ishlash (+$80)",
            feat_notify_title: "📲 SMS / Telegram Xabarnoma",
            feat_notify_desc: "Har bir zakas bo'yicha tezkor eslatma (+$70)",
            calc_box_badge: "HISOBLANGAN SMETA",
            calc_est_price: "Taxminiy Narx:",
            calc_fixed_note: "* Shartnoma tuzilgach narx o'zgarmaydi",
            calc_est_time: "Bajarilish muddati:",
            calc_bonuses_title: "Narx ichiga kiritilgan bepul narsalar:",
            bonus_1: "Rasmiy yuridik shartnoma",
            bonus_2: "30 kun bepul texnik yordam va kafolat",
            bonus_3: "Barcha dastur kodi va server huquqlari",
            btn_calc_submit: "Shu narx bo'yicha zakas berish →",

            proc_badge: "ISH TARTIBI",
            proc_title: "Boshidan oxirigacha <span class=\"gradient-text-cyan-indigo\">qanday ishlaymiz?</span>",
            proc_subtitle: "Hech qanday tushunarsiz joyi yo'q. Qadam-baqadam shaffof hamkorlik:",
            proc_step1_badge: "1-QADAM",
            proc_step1_title: "Suhbat & Reja (TZ)",
            proc_step1_desc: "Biznesingizni eshitamiz, nima kerakligini aniqlaymiz va aniq narx hamda muddatni yozma tasdiqlaymiz.",
            proc_step1_time: "1 kun • Mutlaqo bepul",
            proc_step2_badge: "2-QADAM",
            proc_step2_title: "Shartnoma & Dizayn",
            proc_step2_desc: "Rasmiy shartnoma tuzamiz. Saytning chiroyli dizaynini ko'rsatamiz — siz ma'qullaganingizdan keyingina kod yozish boshlanadi.",
            proc_step2_time: "2–3 kun",
            proc_step3_badge: "3-QADAM",
            proc_step3_title: "Dasturlash & Demo",
            proc_step3_desc: "Tizimni sifatli dasturlaymiz. Sizga har bir bosqichda ishlayotgan loyihani ko'rsatib boramiz.",
            proc_step3_time: "Kelishilgan muddatda",
            proc_step4_badge: "4-QADAM",
            proc_step4_title: "Topshirish & 30 Kun Kafolat",
            proc_step4_desc: "Serverga o'rnatib, to'liq ishga tushirib beramiz. 30 kun davomida texnik nazorat va yordam bepul bo'ladi.",
            proc_step4_time: "To'liq xotirjamlik",

            funnel_badge: "🔒 RASMIY SHARTNOMA ASOSIDA",
            funnel_heading: "Loyihangizni professional qo'llarga topshirishga <span class=\"gradient-text-cyan-indigo\">tayyormisiz?</span>",
            funnel_lead: "O'ng tarafdagi formani to'ldiring. <strong>15 daqiqa ichida</strong> siz bilan shaxsan bog'lanib, loyihangiz bo'yicha bepul maslahat va aniq smetani beramiz.",
            funnel_step1_title: "15 daqiqada aloqaga chiqamiz",
            funnel_step1_desc: "Telegram yoki telefon orqali loyihani muhokama qilamiz.",
            funnel_step2_title: "Aniq smeta va muddat beramiz",
            funnel_step2_desc: "Ortiqcha xarajatsiz faqat kerakli qismlarga to'laysiz.",
            funnel_step3_title: "Rasmiy shartnoma bilan ish boshlaymiz",
            funnel_step3_desc: "Shartnomada muddat kechikishi uchun penya kafolatlanadi.",
            direct_contact_label: "Kutmasdan to'g'ridan-to'g'ri bog'lanish:",
            tg_fast: "Telegram (Tezkor javob)",
            phone_text: "Telefon",

            tab_full: "📝 Loyiha bo'yicha zakas",
            tab_express: "⚡ Tezkor qo'ng'iroq (15 soniya)",
            selected_label: "Tanlangan:",
            label_name: "Ismingiz yoki Kompaniyangiz *",
            placeholder_name: "Masalan: Sardor — Tadbirkor",
            label_contact: "Telefon raqamingiz yoki Telegram @username *",
            placeholder_contact: "+998 (90) 123-45-67 yoki @username",
            label_type: "Loyiha turi:",
            chip_web: "🌐 Web-Sayt",
            chip_bot: "🤖 Telegram Bot",
            chip_crm: "⚡ CRM Tizim",
            chip_mobile: "📱 Mobil Ilova",
            chip_other: "🧩 Boshqa",
            label_details: "Loyiha haqida qisqacha (yoki maqsadingiz):",
            placeholder_details: "Masalan: Bizga yangi mahsulot sotish uchun tez ochiladigan landing page kerak...",
            checkbox_nda: "🔒 Loyiham maxfiyligi (NDA) saqlansin",
            btn_submit_full: "Zakasni Yuborish va Bepul Maslahat Olish",
            form_security: "🛡️ Hech qanday spam yuborilmaydi. Ma'lumotlaringiz xavfsiz.",
            express_title: "Vaqtingiz kammi?",
            express_desc: "Raqamingizni qoldiring, 15 daqiqada o'zimiz qo'ng'iroq qilamiz.",
            label_name_simple: "Ismingiz *",
            placeholder_name_simple: "Ismingizni kiriting",
            label_phone_simple: "Telefon yoki Telegram manzilingiz *",
            placeholder_phone_simple: "+998 (90) 000-00-00",
            btn_submit_express: "📞 Menga 15 daqiqada qo'ng'iroq qiling",

            footer_tagline: "Senior Full-Stack Engineer & Ishonchli Texnologik Hamkor. Har bir loyihada mijoz biznesining maksimal foydasiga ishlaymiz.",
            footer_nav_title: "Sahifalar",
            footer_serv_title: "Xizmatlar",
            footer_contact_title: "To'g'ridan-to'g'ri aloqa",
            footer_rights: "© 2026 lazizfullstack.dev. Barcha huquqlar himoyalangan. Rasmiy shartnoma asosida ishlaymiz.",
            footer_contract: "Shartnoma Namunasi",
            footer_top: "Yuqoriga qaytish ↑",

            modal_success_title: "Arizangiz qabul qilindi!",
            modal_dear: "Hurmatli",
            modal_success_desc: "arizangiz saqlandi. 15 daqiqa ichida siz bilan bog'lanamiz.",
            modal_summary_type: "Loyiha turi:",
            modal_summary_contact: "Aloqa:",
            btn_telegram_direct: "💬 Kutmasdan Telegramda yozish →",
            btn_close: "Yopish",

            contract_modal_title: "Rasmiy Shartnomaning Asosiy Kafolat Bandlari",
            contract_modal_desc: "Sizning mablag'ingiz va vaqtingizni himoya qiluvchi qonuniy majburiyatlarimiz:",
            c_c1_title: "1. Manba kodi to'liq sizning nomingizga o'tadi",
            c_c1_desc: "Loyiha topshirilgandan keyin barcha kodlar (GitHub, server fayllari va bazalar) 100% buyurtmachi mulkiga aylanadi. Hech qanday litsenziya yoki doimiy to'lovlar majburiyati qolmaydi.",
            c_c2_title: "2. Maxfiylik va Tijorat Sirlari (NDA)",
            c_c2_desc: "G'oyangiz, biznes mexanizmlaringiz va mijozlaringiz haqidagi ma'lumotlar uchinchi shaxslarga berilmasligi bo'yicha qat'iy yuridik majburiyat olinadi.",
            c_c3_title: "3. Kechikish uchun Penya Kafolati",
            c_c3_desc: "Agar ijrochi aybi bilan kelishilgan topshirish muddati kechiktirilsa, har bir kechikkan ish kuni uchun shartnoma bo'yicha moliyaviy penya to'lanadi.",
            c_c4_title: "4. 30 Kun Bepul Texnik Kafolat",
            c_c4_desc: "Loyiha ishga tushgach, 1 oy davomida har qanday texnik xatoliklar (baglar) mutlaqo bepul va zudlik bilan to'g'irlanadi.",
            btn_understood_close: "Tushunarli, yopish",
            btn_go_to_order: "Zakas formasiga o'tish →"
        },

        ru: {
            title: "LazizFullStack — Высокодоходные Web и Telegram Решения для Бизнеса",
            scarcity_status: "Прием новых проектов открыт",
            scarcity_text: "Чтобы гарантировать 100% качество и внимание к деталям, берем максимум 2-3 проекта в месяц.",
            scarcity_link: "Забронировать место →",
            brand_role: "Full-Stack Инженер & Технологический Партнер",
            nav_services: "Услуги",
            nav_portfolio: "Кейсы",
            nav_calculator: "Калькулятор",
            nav_guarantees: "Гарантии",
            nav_process: "Процесс",
            nav_home: "Главная",
            lang_label: "Выберите язык:",
            btn_contract_sample: "Образец договора",
            btn_start_project: "Начать проект",
            btn_submit_order: "Оставить заявку",

            hero_pill: "Официальный Договор • Четкий Срок • 30 Дней Гарантии",
            hero_h1: "Создаем IT-системы, которые <span class=\"gradient-text-cyan-indigo\">привлекают клиентов</span> и снижают расходы бизнеса.",
            hero_lead: "Без лишних ненужных функций. Разрабатываем только то, что окупает каждый вложенный доллар: продающие Web-сайты, Telegram WebApp магазины и надежные CRM-системы.",
            hero_btn_calc: "Рассчитать стоимость и заказать",
            hero_btn_cases: "Смотреть выполненные кейсы →",
            proof_15min: "Бесплатная консультация за 15 минут",
            proof_ownership: "Весь код переходит в вашу собственность",
            proof_payment: "Безопасная поэтапная оплата",

            hero_box_badge: "РЕАЛЬНАЯ ПОЛЬЗА ДЛЯ БИЗНЕСА",
            hero_box_status: "100% В ДЕЛЕ",
            benefit1_title: "Быстрый и Продающий Web-Сайт",
            benefit1_desc: "Бюджет на рекламу не сгорает впустую. Сайт открывается за 1.5 секунды и превращает посетителей в прямые заявки.",
            benefit2_title: "Telegram WebApp Магазин",
            benefit2_desc: "Самый быстроокупаемый канал продаж. Клиенты выбирают товары и оплачивают прямо в Telegram без скачивания приложений.",
            benefit3_title: "Автоматизация Бизнеса (CRM)",
            benefit3_desc: "Менеджеры больше не теряют лиды. Все финансы, заказы и аналитика собраны на одном удобном экране.",
            hero_penalty_note: "При срыве сроков выплачиваем финансовую неустойку по договору.",

            stat1_title: "Успешных Проектов",
            stat1_desc: "Работающие системы реального бизнеса",
            stat2_title: "Опыт Разработки",
            stat2_desc: "Frontend, Backend и Архитектура Систем",
            stat3_title: "Быстрый Ответ",
            stat3_desc: "Оперативно отвечаем на любые вопросы",
            stat4_title: "Код Принадлежит Вам",
            stat4_desc: "100% передача исходного кода клиенту",

            guar_badge: "ГАРАНТИЯ СПОКОЙСТВИЯ",
            guar_title: "Ваши вложения <span class=\"gradient-text-cyan-indigo\">защищены на 100%</span>",
            guar_subtitle: "Устали от безответственных фрилансеров и затянутых сроков? У нас все прозрачно и официально:",
            g1_title: "1. Официальный Договор и NDA (Конфиденциальность)",
            g1_desc: "Ваша бизнес-идея и база клиентов под надежной защитой. Заключаем юридически обязывающий договор, возможна безналичная оплата на р/с.",
            g1_btn: "Читать пункты договора →",
            g2_title: "2. Железный Дедлайн (Гарантия Сроков)",
            g2_desc: "Ваше время бесценно. Если мы задержим сдачу хотя бы на 1 день, выплачиваем официальную неустойку (пеню) за каждый день просрочки.",
            g3_title: "3. Полные Права на Код (100% Ваша Собственность)",
            g3_desc: "После завершения проекта весь исходный код (GitHub и сервер) передается на ваше имя. Никаких скрытых подписок или зависимости от нас.",
            g4_title: "4. 30 Дней Бесплатной VIP Поддержки",
            g4_desc: "Мы не бросаем проект после запуска. В течение месяца бесплатно контролируем сервер, устраняем любые нюансы и обучаем ваших сотрудников.",

            serv_badge: "УСЛУГИ И ЧЕСТНЫЕ ЦЕНЫ",
            serv_title: "Каждый доллар должен приносить <span class=\"gradient-text-cyan-indigo\">максимальный результат</span>",
            serv_subtitle: "Только те направления, в которых мы сильны на 100%. Выберите услугу в 1 клик для оформления заказа:",
            s1_time: "5–10 рабочих дней",
            s1_title: "Продающий Landing Page & Сайт",
            s1_goal: "Результат: Количество заявок с рекламы увеличивается в 2-3 раза. Сайт мгновенно открывается на смартфонах и ПК.",
            s1_f1: "Современный дизайн, вызывающий доверие",
            s1_f2: "Заявки моментально приходят вам в Telegram / CRM",
            s1_f3: "Базовая оптимизация под Google и Яндекс (SEO)",
            s1_f4: "Удобная панель управления текстом и ценами",
            s2_time: "4–8 рабочих дней",
            s2_title: "Telegram Bot & WebApp Магазин",
            s2_goal: "Результат: Клиентам не нужно ставить приложение. Они выбирают каталог и сразу оплачивают онлайн внутри Telegram.",
            s2_f1: "Визуальный мини-магазин внутри Telegram",
            s2_f2: "Прием платежей: Payme, Click, Stripe, Visa/Mastercard",
            s2_f3: "Бот управления заказами для менеджеров и курьеров",
            s2_f4: "Автоматические рассылки и напоминания клиентам",
            s3_time: "15–25 рабочих дней",
            s3_title: "CRM & Системы Управления",
            s3_goal: "Результат: Менеджеры не забывают клиентов, утечки средств исключены, бизнес работает как часы.",
            s3_f1: "База клиентов и наглядная воронка продаж",
            s3_f2: "Отчеты по кассе, доходам и чистой прибыли",
            s3_f3: "Разделение прав доступа (кассир, менеджер, директор)",
            s3_f4: "Мгновенный экспорт отчетов в Excel в один клик",
            s4_time: "20–35 рабочих дней",
            s4_title: "Мобильное Приложение (iOS & Android)",
            s4_goal: "Результат: Ваш бренд всегда в кармане клиента. Бесплатные Push-уведомления стимулируют повторные продажи.",
            s4_f1: "Единый код и безупречная работа на iPhone и Android",
            s4_f2: "Публикация в App Store и Google Play",
            s4_f3: "Быстрая авторизация по номеру телефона и SMS",
            s4_f4: "Удобный и быстрый чекаут заказов",
            price_label: "Стоимость:",
            btn_choose_service: "Выбрать эту услугу →",
            popular_badge: "Максимальный Доход",

            cases_badge: "РЕАЛЬНЫЕ КЕЙСЫ",
            cases_title: "Ощутимые результаты <span class=\"gradient-text-cyan-indigo\">наших клиентов</span>",
            cases_subtitle: "Не просто красивые картинки, а конкретная проблема бизнеса и её практическое решение:",
            case1_tag: "Продающий Web-Сайт",
            case1_time: "Сдан за 7 дней",
            case1_title: "Конверсионный B2B Landing Page",
            comp_before: "Что было до нас:",
            case1_before: "На старом сайте конверсия была всего 1% — из 100 посетителей звонил лишь один.",
            comp_after: "Результат после запуска:",
            case1_after: "Благодаря высокой скорости и продуманным блокам конверсия выросла до 3.8%. Рекламный бюджет стал окупаться вдвое быстрее.",
            case2_tag: "Telegram WebApp Магазин",
            case2_time: "Сдан за 5 дней",
            case2_title: "Автоматизация Продаж в Telegram",
            case2_before: "Менеджеры долго отвечали в личке, из-за чего клиенты уходили к конкурентам.",
            case2_after: "Запустили WebApp с каталогом и быстрой оплатой. 65% покупок теперь проходят автоматически, даже ночью.",
            case3_tag: "Система Управления CRM",
            case3_time: "Сдана за 18 дней",
            case3_title: "CRM для Сферы Услуг",
            case3_before: "Учет велся в разрозненных блокнотах. На сведение отчетов уходило до 3 дней в конце месяца.",
            case3_after: "Все филиалы и кассы объединены. Руководитель видит прибыль в реальном времени, а отчеты формируются за 1 секунду.",
            btn_order_similar: "Заказать такую систему →",

            calc_badge: "ТОЧНЫЙ РАСЧЕТ",
            calc_title: "Узнайте стоимость проекта <span class=\"gradient-text-cyan-indigo\">за 1 минуту</span>",
            calc_subtitle: "Без скрытых доплат. Выберите то, что вам нужно, и получите честную оценку:",
            calc_step1: "Какая система требуется?",
            calc_step2: "Необходимый функционал:",
            calc_type_web: "Продающий Web-Сайт",
            calc_type_bot: "Telegram Магазин / Бот",
            calc_type_crm: "CRM / Внутренняя система",
            calc_type_mobile: "Мобильное Приложение",
            from_text: "от",
            days_text: "раб. дней",
            feat_billing_title: "💳 Онлайн Оплата",
            feat_billing_desc: "Payme, Click, Stripe, Visa на расчетный счет (+$100)",
            feat_admin_title: "📊 Панель Управления (Admin)",
            feat_admin_desc: "Самостоятельное управление товарами и ценами (+$150)",
            feat_lang_title: "🌐 Мультиязычность (UZ / RU / EN)",
            feat_lang_desc: "Полноценная работа на нескольких языках (+$80)",
            feat_notify_title: "📲 SMS / Telegram Уведомления",
            feat_notify_desc: "Мгновенные оповещения по каждому заказу (+$70)",
            calc_box_badge: "РАССЧИТАННАЯ СМЕТА",
            calc_est_price: "Ориентировочная Цена:",
            calc_fixed_note: "* После фиксации в договоре цена не меняется",
            calc_est_time: "Срок выполнения:",
            calc_bonuses_title: "Бесплатно входит в стоимость:",
            bonus_1: "Официальный юридический договор",
            bonus_2: "30 дней бесплатной поддержки и гарантии",
            bonus_3: "Все исходные коды и доступы к серверам",
            btn_calc_submit: "Заказать по этой смете →",

            proc_badge: "ПОРЯДОК РАБОТЫ",
            proc_title: "Как мы работаем <span class=\"gradient-text-cyan-indigo\">от старта до релиза?</span>",
            proc_subtitle: "Никаких подводных камней. Четкие и прозрачные этапы сотрудничества:",
            proc_step1_badge: "ЭТАП 1",
            proc_step1_title: "Обсуждение & ТЗ",
            proc_step1_desc: "Внимательно изучаем ваш бизнес, фиксируем задачи и письменно утверждаем точную стоимость и сроки.",
            proc_step1_time: "1 день • Бесплатно",
            proc_step2_badge: "ЭТАП 2",
            proc_step2_title: "Договор & Дизайн",
            proc_step2_desc: "Подписываем договор. Создаем удобный прототип и дизайн — верстка начинается только после вашего утверждения.",
            proc_step2_time: "2–3 дня",
            proc_step3_badge: "ЭТАП 3",
            proc_step3_title: "Разработка & Демо",
            proc_step3_desc: "Пишем чистый и быстрый код. На каждом этапе демонстрируем вам живой рабочий проект на тестовом сервере.",
            proc_step3_time: "По графику",
            proc_step4_badge: "ЭТАП 4",
            proc_step4_title: "Сдача & 30 Дней Гарантии",
            proc_step4_desc: "Разворачиваем проект на рабочем сервере. В течение 30 дней бесплатно сопровождаем и обучаем вашу команду.",
            proc_step4_time: "Полное спокойствие",

            funnel_badge: "🔒 ОФИЦИАЛЬНЫЙ ДОГОВОР",
            funnel_heading: "Готовы доверить проект <span class=\"gradient-text-cyan-indigo\">надежным рукам?</span>",
            funnel_lead: "Заполните форму справа. В течение <strong>15 минут</strong> мы свяжемся с вами, бесплатно проконсультируем и предоставим прозрачную смету.",
            funnel_step1_title: "Свяжемся за 15 минут",
            funnel_step1_desc: "Обсудим проект в Telegram или по телефону.",
            funnel_step2_title: "Дадим честную смету и срок",
            funnel_step2_desc: "Никаких скрытых доплат — только нужный результат.",
            funnel_step3_title: "Работаем по договору",
            funnel_step3_desc: "Финансовая ответственность за срыв сроков прописана юридически.",
            direct_contact_label: "Прямая связь без ожидания:",
            tg_fast: "Telegram (Быстрый ответ)",
            phone_text: "Телефон",

            tab_full: "📝 Детальная заявка",
            tab_express: "⚡ Быстрый звонок (15 сек)",
            selected_label: "Выбрано:",
            label_name: "Ваше имя или компания *",
            placeholder_name: "Например: Сардор — Предприниматель",
            label_contact: "Телефон или Telegram @username *",
            placeholder_contact: "+998 (90) 123-45-67 или @username",
            label_type: "Тип проекта:",
            chip_web: "🌐 Web-Сайт",
            chip_bot: "🤖 Telegram Бот",
            chip_crm: "⚡ CRM Система",
            chip_mobile: "📱 Мобильное Приложение",
            chip_other: "🧩 Другое",
            label_details: "Кратко о задаче (или пожелания):",
            placeholder_details: "Например: Нужен быстрый landing page для продажи услуг...",
            checkbox_nda: "🔒 Требуется сохранение конфиденциальности (NDA)",
            btn_submit_full: "Отправить заявку и получить расчет",
            form_security: "🛡️ Спам исключен. Ваши контактные данные в безопасности.",
            express_title: "Мало времени?",
            express_desc: "Оставьте контакт, и мы перезвоним в течение 15 минут.",
            label_name_simple: "Ваше имя *",
            placeholder_name_simple: "Введите ваше имя",
            label_phone_simple: "Телефон или Telegram *",
            placeholder_phone_simple: "+998 (90) 000-00-00",
            btn_submit_express: "📞 Перезвоните мне за 15 минут",

            footer_tagline: "Senior Full-Stack Engineer & Технологический Партнер. В каждом проекте работаем на максимальную окупаемость бизнеса клиента.",
            footer_nav_title: "Страницы",
            footer_serv_title: "Услуги",
            footer_contact_title: "Прямая связь",
            footer_rights: "© 2026 lazizfullstack.dev. Все права защищены. Работаем по официальному договору.",
            footer_contract: "Образец Договора",
            footer_top: "Наверх ↑",

            modal_success_title: "Заявка успешно принята!",
            modal_dear: "Уважаемый",
            modal_success_desc: "ваша заявка зарегистрирована. Мы свяжемся с вами в течение 15 минут.",
            modal_summary_type: "Тип проекта:",
            modal_summary_contact: "Контакт:",
            btn_telegram_direct: "💬 Написать в Telegram напрямую →",
            btn_close: "Закрыть",

            contract_modal_title: "Ключевые Гарантии Официального Договора",
            contract_modal_desc: "Юридические обязательства, защищающие ваши средства и время:",
            c_c1_title: "1. 100% Передача Исходного Кода Клиенту",
            c_c1_desc: "После завершения работ весь код (репозиторий GitHub, файлы и базы данных) переходят в полную собственность заказчика без скрытых условий.",
            c_c2_title: "2. Конфиденциальность и Коммерческая Тайна (NDA)",
            c_c2_desc: "Ваши бизнес-идеи, технологии и клиентские базы защищены от разглашения третьим лицам с полной юридической ответственностью.",
            c_c3_title: "3. Гарантия Сроков с Выплатой Пени",
            c_c3_desc: "Если сдача проекта задерживается по вине исполнителя, за каждый день просрочки выплачивается неустойка по условиям договора.",
            c_c4_title: "4. 30 Дней Бесплатного Гарантийного Сервиса",
            c_c4_desc: "После запуска в течение одного месяца любые выявленные технические сбои и баги устраняются оперативно и абсолютно бесплатно.",
            btn_understood_close: "Понятно, закрыть",
            btn_go_to_order: "Перейти к заказу →"
        },

        en: {
            title: "LazizFullStack — High-Converting Web & Telegram Systems for Businesses",
            scarcity_status: "Accepting new high-impact projects",
            scarcity_text: "To ensure 100% engineering quality and dedicated focus, we take only 2-3 projects per month.",
            scarcity_link: "Reserve your slot →",
            brand_role: "Full-Stack Engineer & Tech Partner",
            nav_services: "Services",
            nav_portfolio: "Case Studies",
            nav_calculator: "Calculator",
            nav_guarantees: "Guarantees",
            nav_process: "Workflow",
            nav_home: "Home",
            lang_label: "Select Language:",
            btn_contract_sample: "Contract sample",
            btn_start_project: "Start a project",
            btn_submit_order: "Submit order",

            hero_pill: "Official Contract • Strict Deadlines • 30 Days Free Warranty",
            hero_h1: "We build IT systems that <span class=\"gradient-text-cyan-indigo\">bring paying customers</span> and cut operational costs.",
            hero_lead: "No bloated code or useless features. We build what actually drives business ROI: high-converting websites, Telegram WebApp commerce, and custom CRM systems.",
            hero_btn_calc: "Calculate Price & Order",
            hero_btn_cases: "Explore Recent Case Studies →",
            proof_15min: "Free 15-minute consultation",
            proof_ownership: "100% full source code ownership",
            proof_payment: "Secure milestone-based payments",

            hero_box_badge: "CONCRETE BUSINESS ROI",
            hero_box_status: "PROVEN RESULTS",
            benefit1_title: "Ultra-Fast High-Converting Websites",
            benefit1_desc: "Your ad spend won't be wasted. Sites load in under 1.5 seconds and turn visitors into qualified leads.",
            benefit2_title: "Telegram WebApp Commerce",
            benefit2_desc: "Fastest ROI channel in modern markets. Customers browse and pay directly inside Telegram without installing an app.",
            benefit3_title: "Custom CRM & Workflow Automation",
            benefit3_desc: "Sales reps never lose leads. Financial metrics, pipeline, and inventory are controlled on a unified real-time dashboard.",
            hero_penalty_note: "Guaranteed deadline: We pay financial penalties for every day of delay.",

            stat1_title: "Delivered Projects",
            stat1_desc: "Live production software powering real businesses",
            stat2_title: "Years of Experience",
            stat2_desc: "Full-Stack engineering & scalable architecture",
            stat3_title: "Fast Response",
            stat3_desc: "We reply to client inquiries in 15 minutes",
            stat4_title: "Zero Vendor Lock-in",
            stat4_desc: "All source code is 100% owned by the client",

            guar_badge: "IRONCLAD GUARANTEES",
            guar_title: "Your investment is <span class=\"gradient-text-cyan-indigo\">100% protected</span>",
            guar_subtitle: "Tired of unreliable freelancers and broken deadlines? Here is how we ensure your complete peace of mind:",
            g1_title: "1. Official Binding Contract & Strict NDA",
            g1_desc: "Your business secrets, concepts, and customer data are legally secured. Official legal contracts with full invoice options.",
            g1_btn: "View contract clauses →",
            g2_title: "2. Ironclad Deadline (Penalty Clause)",
            g2_desc: "Your time is money. If delivery is delayed by even one business day, we pay pre-agreed contract penalty fees.",
            g3_title: "3. 100% Full Source Code Ownership (Full IP)",
            g3_desc: "Upon completion, all source code (GitHub, databases, and server configurations) is transferred directly to your name.",
            g4_title: "4. 30-Day Free VIP Technical Warranty",
            g4_desc: "We don't disappear after launch. For 30 calendar days, all server monitoring, bug fixes, and team training are completely free.",

            serv_badge: "SERVICES & TRANSPARENT PRICING",
            serv_title: "Every dollar invested must yield <span class=\"gradient-text-cyan-indigo\">maximum ROI</span>",
            serv_subtitle: "Only battle-tested solutions that we master completely. Pick any service with a single click to start:",
            s1_time: "5–10 business days",
            s1_title: "High-Converting Landing Pages & Sites",
            s1_goal: "Business outcome: Boost lead conversion rates by 2-3x. Sites load instantly on both mobile and desktop devices.",
            s1_f1: "Trust-inducing modern visual design",
            s1_f2: "Direct instant lead forwarding to Telegram / CRM",
            s1_f3: "Google & Search Engine Optimization (SEO)",
            s1_f4: "Intuitive admin panel to edit copy and prices",
            s2_time: "4–8 business days",
            s2_title: "Telegram Bot & WebApp E-Commerce",
            s2_goal: "Business outcome: Frictionless checkout. Customers browse catalogs and pay directly inside Telegram with zero friction.",
            s2_f1: "Smooth visual store interface inside Telegram",
            s2_f2: "Online payment integration (Stripe, Payme, Click)",
            s2_f3: "Dedicated management bot for orders & courier routing",
            s2_f4: "Automated customer notifications and promotions",
            s3_time: "15–25 business days",
            s3_title: "Custom CRM & Management Platforms",
            s3_goal: "Business outcome: Eliminate lost leads, prevent revenue leakage, and systematize team workflows.",
            s3_f1: "Customer database with visual sales funnel",
            s3_f2: "Cash-flow, revenue, and net profit analytics",
            s3_f3: "Role-based permissions (Cashier, Manager, Executive)",
            s3_f4: "1-click data export to Excel and financial reports",
            s4_time: "20–35 business days",
            s4_title: "Cross-Platform Mobile Apps (iOS & Android)",
            s4_goal: "Business outcome: Stay right inside your customer's pocket. Push notifications drive continuous repeat purchases.",
            s4_f1: "Single high-performance codebase for iOS and Android",
            s4_f2: "Guaranteed publication on App Store & Google Play",
            s4_f3: "Frictionless SMS OTP phone authentication",
            s4_f4: "Lightning-fast and intuitive checkout UX",
            price_label: "Starting at:",
            btn_choose_service: "Select this service →",
            popular_badge: "Maximum Profit Driver",

            cases_badge: "PROVEN CASE STUDIES",
            cases_title: "Concrete business results <span class=\"gradient-text-cyan-indigo\">our clients achieved</span>",
            cases_subtitle: "Not just visual mocks — here is the business obstacle we solved and the real profit delivered:",
            case1_tag: "High-Converting Website",
            case1_time: "Delivered in 7 days",
            case1_title: "Conversion-Focused B2B Landing Page",
            comp_before: "Before launch:",
            case1_before: "Old website had a dismal 1% conversion rate — out of 100 paid ad clicks, only 1 user called.",
            comp_after: "Measured outcome:",
            case1_after: "With lightning page speed and tailored conversion triggers, lead rate jumped to 3.8%. Ad budget ROI doubled immediately.",
            case2_tag: "Telegram WebApp Store",
            case2_time: "Delivered in 5 days",
            case2_title: "Automated Telegram Commerce System",
            case2_before: "Sales reps replied late in manual chats, losing impatient buyers to competitors.",
            case2_after: "Launched an interactive WebApp with instant payments. Over 65% of orders now process automatically, even overnight.",
            case3_tag: "Business CRM System",
            case3_time: "Delivered in 18 days",
            case3_title: "Custom CRM for Services Company",
            case3_before: "Accounting was handled on paper notebooks. Reconciling monthly revenue took 3 full days.",
            case3_after: "All branches and cash registers are unified on one screen. The CEO checks net profit in real time, reports take 1 second.",
            btn_order_similar: "Order a similar system →",

            calc_badge: "ACCURATE QUOTE",
            calc_title: "Estimate your project cost <span class=\"gradient-text-cyan-indigo\">in 1 minute</span>",
            calc_subtitle: "Zero hidden charges. Pick what your business requires and get a realistic quote:",
            calc_step1: "What type of software do you need?",
            calc_step2: "Select add-on capabilities:",
            calc_type_web: "High-Converting Website",
            calc_type_bot: "Telegram Store / Bot",
            calc_type_crm: "CRM / Internal System",
            calc_type_mobile: "Mobile App (iOS/Android)",
            from_text: "from",
            days_text: "business days",
            feat_billing_title: "💳 Online Payment Gateway",
            feat_billing_desc: "Direct bank settlement via Stripe, Payme, Cards (+$100)",
            feat_admin_title: "📊 Custom Admin Dashboard",
            feat_admin_desc: "Easily update products, content, and prices (+$150)",
            feat_lang_title: "🌐 Multilingual (UZ / RU / EN)",
            feat_lang_desc: "Seamless localization across multiple languages (+$80)",
            feat_notify_title: "📲 SMS / Telegram Notifications",
            feat_notify_desc: "Instant automated alerts for every new order (+$70)",
            calc_box_badge: "PROJECT ESTIMATE",
            calc_est_price: "Estimated Price:",
            calc_fixed_note: "* Price is legally fixed once written into contract",
            calc_est_time: "Estimated Timeline:",
            calc_bonuses_title: "Included for FREE in your package:",
            bonus_1: "Official legally binding contract",
            bonus_2: "30 days of free technical warranty & support",
            bonus_3: "100% full source code and server access",
            btn_calc_submit: "Order with this estimate →",

            proc_badge: "WORKFLOW",
            proc_title: "How we work <span class=\"gradient-text-cyan-indigo\">from discovery to launch?</span>",
            proc_subtitle: "Zero ambiguity. Step-by-step transparent collaboration:",
            proc_step1_badge: "STEP 1",
            proc_step1_title: "Discovery & Scope",
            proc_step1_desc: "We understand your business goals, outline exact requirements, and write down fixed prices and deadlines.",
            proc_step1_time: "1 day • 100% Free",
            proc_step2_badge: "STEP 2",
            proc_step2_title: "Contract & UI/UX",
            proc_step2_desc: "We sign the contract and craft high-fidelity prototypes. Coding starts only after your full approval.",
            proc_step2_time: "2–3 days",
            proc_step3_badge: "STEP 3",
            proc_step3_title: "Development & Demo",
            proc_step3_desc: "We engineer clean, secure code and provide you with weekly live demos on staging servers.",
            proc_step3_time: "On schedule",
            proc_step4_badge: "STEP 4",
            proc_step4_title: "Launch & 30-Day Warranty",
            proc_step4_desc: "We deploy to your live production server and provide 30 days of free monitoring, tweaks, and team training.",
            proc_step4_time: "Complete peace of mind",

            funnel_badge: "🔒 OFFICIAL BINDING CONTRACT",
            funnel_heading: "Ready to place your project in <span class=\"gradient-text-cyan-indigo\">reliable hands?</span>",
            funnel_lead: "Fill out the form on the right. Within <strong>15 minutes</strong>, we will personally connect with you to provide a free consultation and exact project estimate.",
            funnel_step1_title: "We connect in 15 minutes",
            funnel_step1_desc: "We discuss your project via Telegram or direct phone call.",
            funnel_step2_title: "Honest timeline & quote",
            funnel_step2_desc: "Pay only for what generates value. No hidden bloat.",
            funnel_step3_title: "Legally secured contract",
            funnel_step3_desc: "Strict deadline penalty clauses written into law.",
            direct_contact_label: "Direct immediate contact:",
            tg_fast: "Telegram (Fastest reply)",
            phone_text: "Phone",

            tab_full: "📝 Detailed Project Order",
            tab_express: "⚡ 15-Sec Callback Request",
            selected_label: "Selected:",
            label_name: "Your Name or Company *",
            placeholder_name: "e.g. Alex Morgan — Founder",
            label_contact: "Phone number or Telegram @username *",
            placeholder_contact: "+1 (555) 000-0000 or @username",
            label_type: "Project type:",
            chip_web: "🌐 Website",
            chip_bot: "🤖 Telegram Bot",
            chip_crm: "⚡ CRM System",
            chip_mobile: "📱 Mobile App",
            chip_other: "🧩 Other",
            label_details: "Brief project overview or goals:",
            placeholder_details: "e.g. We need a high-converting landing page to sell our B2B SaaS...",
            checkbox_nda: "🔒 Require strict Non-Disclosure Agreement (NDA)",
            btn_submit_full: "Submit Order & Get Free Quote",
            form_security: "🛡️ Zero spam. Your contact info is strictly confidential.",
            express_title: "Short on time?",
            express_desc: "Leave your contact and we will call you back within 15 minutes.",
            label_name_simple: "Your Name *",
            placeholder_name_simple: "Enter your name",
            label_phone_simple: "Phone or Telegram handle *",
            placeholder_phone_simple: "+1 (555) 000-0000",
            btn_submit_express: "📞 Call me back in 15 minutes",

            footer_tagline: "Senior Full-Stack Engineer & Trusted Tech Partner. In every project, we work to maximize the client's business revenue.",
            footer_nav_title: "Pages",
            footer_serv_title: "Services",
            footer_contact_title: "Direct Contact",
            footer_rights: "© 2026 lazizfullstack.dev. All rights reserved. Operating under official contracts.",
            footer_contract: "Contract Sample",
            footer_top: "Back to top ↑",

            modal_success_title: "Application Received!",
            modal_dear: "Dear",
            modal_success_desc: "your project request is registered. We will contact you within 15 minutes.",
            modal_summary_type: "Project Type:",
            modal_summary_contact: "Contact:",
            btn_telegram_direct: "💬 Message directly on Telegram →",
            btn_close: "Close",

            contract_modal_title: "Key Guarantees of the Official Contract",
            contract_modal_desc: "Legally enforceable clauses protecting your capital, time, and intellectual property:",
            c_c1_title: "1. 100% Source Code Ownership (Zero Lock-in)",
            c_c1_desc: "Upon delivery, all source code, GitHub repositories, databases, and assets become the client's sole exclusive property.",
            c_c2_title: "2. Confidentiality & Non-Disclosure (NDA)",
            c_c2_desc: "Your proprietary ideas, business logic, and customer databases are legally protected against any third-party disclosure.",
            c_c3_title: "3. Enforceable Deadline Penalty Clause",
            c_c3_desc: "If project delivery is delayed by the engineer, a daily financial penalty is paid according to contract terms.",
            c_c4_title: "4. 30 Days Free Technical Warranty",
            c_c4_desc: "For one month post-launch, all technical bugs, performance tuning, and team onboarding are handled completely free of charge.",
            btn_understood_close: "Understood, close",
            btn_go_to_order: "Go to order form →"
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

        // 1. Update Title
        if (dict.title) document.title = dict.title;

        // 2. Update all elements with [data-i18n]
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // 3. Update all placeholders with [data-i18n-placeholder]
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // 4. Update language switcher buttons active state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // 5. Re-run calculator to adapt day counts and units
        if (typeof calculate === 'function') {
            calculate();
        }
    };

    // Attach click listener to all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const chosenLang = btn.getAttribute('data-lang');
            setLanguage(chosenLang);
        });
    });

    /* --------------------------------------------------------------------------
       3. MOUSE SPOTLIGHT (Bento Cards)
       -------------------------------------------------------------------------- */
    const cards = document.querySelectorAll('.bento-card');
    window.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x > -100 && x < rect.width + 100 && y > -100 && y < rect.height + 100) {
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    }, { passive: true });

    /* --------------------------------------------------------------------------
       4. MOBILE DRAWER TOGGLE
       -------------------------------------------------------------------------- */
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
            drawer.classList.toggle('active');
        });

        drawer.querySelectorAll('.mobile-link, #btnOpenContractMobile').forEach(el => {
            el.addEventListener('click', () => {
                drawer.classList.remove('active');
            });
        });
    }

    /* --------------------------------------------------------------------------
       5. ANIMATED COUNTERS (Hero Stats)
       -------------------------------------------------------------------------- */
    const counters = document.querySelectorAll('.counter[data-target]');
    if (counters.length) {
        let hasRun = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    hasRun = true;
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'), 10);
                        const duration = 1400;
                        const stepTime = 25;
                        const steps = duration / stepTime;
                        const increment = target / steps;
                        let current = 0;

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                counter.textContent = target;
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current);
                            }
                        }, stepTime);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        const statsSection = document.querySelector('.hero-stats-bento');
        if (statsSection) observer.observe(statsSection);
    }

    /* --------------------------------------------------------------------------
       6. INTERACTIVE CALCULATOR (Multilingual & High-Trust)
       -------------------------------------------------------------------------- */
    const typeInputs = document.querySelectorAll('input[name="calcProjectType"]');
    const typeCards = document.querySelectorAll('.calc-type-card');
    const featureCheckboxes = document.querySelectorAll('input[name="calcFeatures"]');
    const minPriceEl = document.getElementById('calcMinPrice');
    const maxPriceEl = document.getElementById('calcMaxPrice');
    const daysDisplayEl = document.getElementById('calcDaysDisplay');
    const btnTransferCalc = document.getElementById('btnTransferCalc');

    const projectTypes = {
        website: { basePrice: 350, baseDays: 7, chipVal: "website" },
        bot: { basePrice: 250, baseDays: 5, chipVal: "bot" },
        webapp: { basePrice: 800, baseDays: 18, chipVal: "webapp" },
        mobile: { basePrice: 1200, baseDays: 25, chipVal: "mobile" }
    };

    const featureItems = {
        billing: { price: 100, days: 2 },
        admin: { price: 150, days: 3 },
        multilang: { price: 80, days: 2 },
        sms: { price: 70, days: 1 }
    };

    const calculate = () => {
        let selectedKey = 'website';
        typeInputs.forEach(i => {
            if (i.checked) selectedKey = i.value;
        });

        typeCards.forEach(c => {
            const r = c.querySelector('input[type="radio"]');
            c.classList.toggle('active', r.checked);
        });

        const cfg = projectTypes[selectedKey] || projectTypes.website;
        let totalPrice = cfg.basePrice;
        let totalDays = cfg.baseDays;

        featureCheckboxes.forEach(cb => {
            if (cb.checked) {
                const feat = featureItems[cb.value];
                if (feat) {
                    totalPrice += feat.price;
                    totalDays += feat.days;
                }
            }
        });

        const minEstimate = totalPrice;
        const maxEstimate = Math.round(totalPrice * 1.3);

        const dict = translations[currentLang] || translations.uz;
        const daysUnit = dict.days_text || "ish kuni";

        if (minPriceEl) minPriceEl.textContent = `$${minEstimate}`;
        if (maxPriceEl) maxPriceEl.textContent = `$${maxEstimate}`;
        if (daysDisplayEl) daysDisplayEl.textContent = `${totalDays} ${daysUnit}`;

        // Get localized name of type
        let localizedTypeName = dict.calc_type_web;
        if (selectedKey === 'bot') localizedTypeName = dict.calc_type_bot;
        if (selectedKey === 'webapp') localizedTypeName = dict.calc_type_crm;
        if (selectedKey === 'mobile') localizedTypeName = dict.calc_type_mobile;

        return {
            typeKey: selectedKey,
            typeName: localizedTypeName,
            chipVal: cfg.chipVal,
            minPrice: minEstimate,
            maxPrice: maxEstimate,
            days: totalDays
        };
    };

    typeInputs.forEach(i => i.addEventListener('change', calculate));
    featureCheckboxes.forEach(i => i.addEventListener('change', calculate));

    if (btnTransferCalc) {
        btnTransferCalc.addEventListener('click', () => {
            const smeta = calculate();
            transferToForm({
                key: smeta.typeKey,
                name: smeta.typeName,
                chipVal: smeta.chipVal,
                price: smeta.minPrice,
                maxPrice: smeta.maxPrice,
                days: smeta.days
            });
        });
    }

    /* --------------------------------------------------------------------------
       7. 1-CLICK SERVICE SELECT TO ORDER FORM
       -------------------------------------------------------------------------- */
    const selectButtons = document.querySelectorAll('.btn-select-service');
    selectButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceKey = btn.getAttribute('data-service-key') || 'website';
            const servicePrice = parseInt(btn.getAttribute('data-service-price') || '350', 10);
            
            const dict = translations[currentLang] || translations.uz;
            let serviceTitle = dict.s1_title;
            if (serviceKey === 'bot') serviceTitle = dict.s2_title;
            if (serviceKey === 'webapp') serviceTitle = dict.s3_title;
            if (serviceKey === 'mobile') serviceTitle = dict.s4_title;

            transferToForm({
                key: serviceKey,
                name: serviceTitle,
                chipVal: serviceKey,
                price: servicePrice,
                maxPrice: Math.round(servicePrice * 1.35),
                days: 10
            });
        });
    });

    const transferToForm = ({ key, name, chipVal, price, maxPrice, days }) => {
        // Activate full order tab
        const tabFull = document.getElementById('tabFullOrderBtn');
        const tabExpress = document.getElementById('tabExpressOrderBtn');
        const formFull = document.getElementById('formFullOrder');
        const formExpress = document.getElementById('formExpressOrder');

        if (tabFull && formFull) {
            tabFull.classList.add('active');
            tabExpress?.classList.remove('active');
            formFull.classList.add('active');
            formExpress?.classList.remove('active');
        }

        // Show banner
        const banner = document.getElementById('autoSyncBanner');
        const bannerText = document.getElementById('syncedPackageText');
        if (banner && bannerText) {
            bannerText.textContent = `${name} ($${price} - $${maxPrice})`;
            banner.classList.remove('hidden');
        }

        // Select chip
        const chips = document.querySelectorAll('#projectTypeChips .chip-btn');
        chips.forEach(chip => {
            chip.classList.toggle('active', chip.getAttribute('data-value') === chipVal);
        });

        // Set textarea in current language
        const textarea = document.getElementById('projectDetails');
        if (textarea) {
            const dict = translations[currentLang] || translations.uz;
            if (currentLang === 'ru') {
                textarea.value = `[ЗАКАЗ] ${name}. Смета: $${price} - $${maxPrice}. Срок: ${days} дн. Дополнительные требования: `;
            } else if (currentLang === 'en') {
                textarea.value = `[ORDER] ${name}. Estimated: $${price} - $${maxPrice}. Timeline: ${days} days. My requirements: `;
            } else {
                textarea.value = `[ZAKAS] ${name}. Taxminiy: $${price} - $${maxPrice}. Muddat: ${days} kun. Qo'shimcha talablarim: `;
            }
        }

        // Scroll to form smoothly
        const orderSection = document.getElementById('zakas-section');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                document.getElementById('fullName')?.focus();
            }, 600);
        }
    };

    /* --------------------------------------------------------------------------
       8. DUAL-MODE FORM TABS & CHIPS
       -------------------------------------------------------------------------- */
    const tabFull = document.getElementById('tabFullOrderBtn');
    const tabExpress = document.getElementById('tabExpressOrderBtn');
    const formFull = document.getElementById('formFullOrder');
    const formExpress = document.getElementById('formExpressOrder');

    if (tabFull && tabExpress) {
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

    const btnClearSync = document.getElementById('btnClearSync');
    if (btnClearSync) {
        btnClearSync.addEventListener('click', () => {
            document.getElementById('autoSyncBanner')?.classList.add('hidden');
            const textarea = document.getElementById('projectDetails');
            if (textarea) textarea.value = '';
        });
    }

    const chips = document.querySelectorAll('#projectTypeChips .chip-btn');
    chips.forEach(c => {
        c.addEventListener('click', () => {
            chips.forEach(chip => chip.classList.remove('active'));
            c.classList.add('active');
        });
    });

    /* --------------------------------------------------------------------------
       9. FORM SUBMISSIONS & MODALS
       -------------------------------------------------------------------------- */
    const modalSuccess = document.getElementById('modalOrderSuccess');
    const clientNameEl = document.getElementById('modalClientName');
    const summaryTypeEl = document.getElementById('modalSummaryType');
    const summaryContactEl = document.getElementById('modalSummaryContact');
    const orderIdBadge = document.getElementById('modalOrderIdBadge');
    const btnTelegramDirect = document.getElementById('btnTelegramDirect');

    const handleSuccess = (data) => {
        const id = `#LFS-2026-${Math.floor(100 + Math.random() * 900)}`;
        if (orderIdBadge) orderIdBadge.textContent = id;
        if (clientNameEl) clientNameEl.textContent = data.name;
        if (summaryTypeEl) summaryTypeEl.textContent = data.type;
        if (summaryContactEl) summaryContactEl.textContent = data.contact;

        if (btnTelegramDirect) {
            let tgMsg = "";
            if (currentLang === 'ru') {
                tgMsg = `Здравствуйте Лазиз! Я оставил заявку на lazizfullstack.dev.\n\n` +
                        `🆔 Номер заказа: ${id}\n` +
                        `👤 Имя: ${data.name}\n` +
                        `📞 Контакт: ${data.contact}\n` +
                        `🚀 Проект: ${data.type}\n` +
                        `📝 Детали: ${data.details || "Стандартная заявка"}\n\n` +
                        `Готов обсудить детали сотрудничества!`;
            } else if (currentLang === 'en') {
                tgMsg = `Hello Laziz! I just submitted an order on lazizfullstack.dev.\n\n` +
                        `🆔 Order ID: ${id}\n` +
                        `👤 Name: ${data.name}\n` +
                        `📞 Contact: ${data.contact}\n` +
                        `🚀 Project: ${data.type}\n` +
                        `📝 Details: ${data.details || "Direct inquiry"}\n\n` +
                        `Looking forward to discussing the project!`;
            } else {
                tgMsg = `Salom Laziz! Men lazizfullstack.dev orqali ariza qoldirdim.\n\n` +
                        `🆔 Zakas ID: ${id}\n` +
                        `👤 Ism: ${data.name}\n` +
                        `📞 Aloqa: ${data.contact}\n` +
                        `🚀 Tizim: ${data.type}\n` +
                        `📝 Tafsilotlar: ${data.details || "Mavjud emas"}\n\n` +
                        `Loyihani tezroq muhokama qilaylik!`;
            }
            btnTelegramDirect.href = `https://t.me/lazizfullstack?text=${encodeURIComponent(tgMsg)}`;
        }

        modalSuccess?.classList.add('active');
    };

    if (formFull) {
        formFull.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullName')?.value || 'Client';
            const contact = document.getElementById('contactInfo')?.value || '';
            const activeChip = document.querySelector('#projectTypeChips .chip-btn.active');
            const activeType = activeChip ? activeChip.textContent.trim() : 'Web-Sayt';
            const details = document.getElementById('projectDetails')?.value || '';

            const btn = formFull.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span>⏳ ...</span>';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = orig;
                formFull.reset();
                handleSuccess({ name, contact, type: activeType, details });
            }, 500);
        });
    }

    if (formExpress) {
        formExpress.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('expressName')?.value || 'Client';
            const contact = document.getElementById('expressPhone')?.value || '';

            const btn = formExpress.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span>⏳ ...</span>';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = orig;
                formExpress.reset();
                const callbackType = currentLang === 'ru' ? "Быстрый звонок" : (currentLang === 'en' ? "15-min Callback" : "15-soniyalik Qo'ng'iroq");
                handleSuccess({ name, contact, type: callbackType, details: "Express request" });
            }, 400);
        });
    }

    // Modal Close logic
    const closeSuccessBtn = document.getElementById('btnCloseOrderSuccessModal');
    const closeSuccessBtnBottom = document.getElementById('btnCloseOrderSuccessModalBtn');
    const closeSuccess = () => modalSuccess?.classList.remove('active');

    closeSuccessBtn?.addEventListener('click', closeSuccess);
    closeSuccessBtnBottom?.addEventListener('click', closeSuccess);
    modalSuccess?.addEventListener('click', (e) => {
        if (e.target === modalSuccess) closeSuccess();
    });

    // Contract Modal
    const modalContract = document.getElementById('modalContractPreview');
    const openContractBtns = [
        document.getElementById('btnOpenContractModal'),
        document.getElementById('btnOpenContractMobile'),
        document.getElementById('btnNdaModalTrigger'),
        document.getElementById('btnFooterContract')
    ];
    const closeContractBtns = [
        document.getElementById('btnCloseContractModal'),
        document.getElementById('btnCloseContractBottom'),
        document.getElementById('btnContractGoToOrder')
    ];

    openContractBtns.forEach(b => b?.addEventListener('click', (e) => {
        e.preventDefault();
        modalContract?.classList.add('active');
    }));

    closeContractBtns.forEach(b => b?.addEventListener('click', () => {
        modalContract?.classList.remove('active');
    }));

    modalContract?.addEventListener('click', (e) => {
        if (e.target === modalContract) modalContract.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalSuccess?.classList.remove('active');
            modalContract?.classList.remove('active');
        }
    });

    // Initialize with saved or default language
    setLanguage(currentLang);

    console.log(`✅ lazizfullstack.dev initialized in language: ${currentLang}`);
});
