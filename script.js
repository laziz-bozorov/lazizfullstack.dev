/**
 * ==========================================================================
 * LAZIZ.DEV — HANDCRAFTED STORYBOOK & GREEN CODE RIBBON LOGIC
 * Authentic • Multi-Language (UZ / RU / EN) • Zero Fake Modals
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* --------------------------------------------------------------------------
       1. I18N STORYBOOK TRANSLATIONS (UZ / RU / EN)
       -------------------------------------------------------------------------- */
    const translations = {
        uz: {
            title: "Laziz Bozorov — Dasturchi Hikoyasi | Veb-saytlar va Telegram Tizimlar",
            header_status: "Yangi loyihalar uchun ochiq",
            btn_header_tg: "Telegramda yozish",
            nav_prologue: "Muqaddima",
            nav_price: "1. Narx Masalasi",
            nav_services: "2. Nimalar Qilaman",
            nav_stories: "3. Hayotiy Tajriba",
            nav_rules: "4. Qoidalar",
            nav_contact: "5. Bog'lanish",

            // Prologue
            ch0_tag: "MUQADDIMA",
            ch0_title: "Salom! Men Lazizman. Bizneslar uchun ishlaydigan veb-saytlar va Telegram tizimlari yarataman.",
            ch0_p1: "Toshkentda yashayman. Bu yerda sun'iy marketing gaplari, qolipga solingan maqtovlar yoki agentlik byurokratiyasi yo'q. Faqat bir dasturchining nimalar qila olishi va sizga qanday yordam bera olishi haqida samimiy gaplashamiz.",
            ch0_p2: "O'rtada vositachilar, menejerlar va tushunarsiz hisobotlar bo'lmaydi. Birinchi kundan boshlab to'g'ridan-to'g'ri kodingizni yozadigan odam bilan — o'zim bilan ishlaysiz.",
            ch0_quote: "\"Mening vazifam — sizga shunchaki quruq kod sotish emas, balki biznesingizga yangi mijoz olib keladigan va vaqtingizni tejaydigan tizim qurib berish.\"",
            ch0_skills_label: "Asosan ishlatadigan vositalarim:",
            read_next_price: "1-Bob: Nega saytda tayyor narxlar yo'q? ↓",

            // Chapter 1: Price
            ch1_tag: "1-BOB: NARX MASALASI",
            ch1_title: "Nega men saytga \"$300\" yoki \"$500\" deb qat'iy narx yozib qo'ymayman?",
            ch1_p1: "Internetda ko'p ko'rgansiz: \"Sayt yasaymiz — 300 dollar\", \"Bot — 200 dollar\". Lekin hayotda har bir odamning ehtiyoji har xil bo'ladi.",
            ch1_p2: "Birovga oddiy, 1 sahifali vizitka-sayt kerak — unda ortiqcha murakkablik yo'q va u arzon bo'ladi. Boshqa bir tadbirkorga esa minglab tovarlari bor, Click va Payme to'lovlari ulangan, omborni hisoblaydigan katta Telegram do'kon zarur. Bularning ikkalasini bitta qolipga tiqib, ko'rmasdan narx aytish — xaridorga nisbatan nohaqlik deb bilaman.",
            ch1_box_title: "Men qanday ishlayman?",
            ch1_step1_t: "1. Avval siz nima yasamoqchiligingizni aytasiz:",
            ch1_step1_d: "Maqsadingiz nima, kimlar foydalanadi, qanday funksiyalar kerak.",
            ch1_step2_t: "2. Men eng qulay va tejamkor yo'lni o'ylab topaman:",
            ch1_step2_d: "Ortiqcha sarf-xarajatsiz, biznesingizga mos texnologiyani tanlaymiz.",
            ch1_step3_t: "3. Shundan keyin aniq, halol narx va muddatni aytaman:",
            ch1_step3_d: "Kelishilgan narx ish davomida o'zgarmaydi. Maslahatlashish esa mutlaqo bepul.",
            ch1_note: "💡 Shuning uchun agar loyihangiz bo'lsa, narxini bilishning eng to'g'ri yo'li — g'oyangizni qisqacha aytishdir. 15 daqiqada sizga aniq narx va muddatni hisoblab beraman.",
            read_next_serv: "2-Bob: Qo'limdan nimalar keladi? ↓",

            // Chapter 2: Services
            ch2_tag: "2-BOB: IMKONIYATLAR",
            ch2_title: "Qanday loyihalarni yaxshi bajara olaman? (Va nimalarni olmayman)",
            ch2_p1: "Men hamma narsani bilaman deb da'vo qilmayman. Faqat o'zim yaxshi tushunadigan, amalda sinovdan o'tgan yo'nalishlar bilan shug'ullanaman:",
            s1_t: "Tezkor Veb-Saytlar & Landing Sahifalar",
            s1_d: "Telefonda ham, kompyuterda ham 1 soniyada ochiladigan, chiroyli va qulay saytlar. Reklamangizdan kirgan odam qiynalmasdan ariza qoldiradi, tushgan barcha ma'lumotlar esa zudlik bilan Telegramingizga keladi.",
            s1_pill: "Muddat: taxminan 4–8 ish kuni (loyihaga qarab)",
            s2_t: "Telegram Botlar & WebApp Do'konlar",
            s2_d: "Mijoz alohida ilova yuklamaydi. Telegram ichida tovar katalogini ko'radi, savatchaga soladi va Payme/Click orqali to'laydi. Buyurtmalar esa avtomatik tarzda sizning kanalingiz yoki botingizga tushadi.",
            s2_pill: "Muddat: taxminan 5–10 ish kuni (loyihaga qarab)",
            s3_t: "Ichki Boshqaruv Tizimlari (Mini CRM / Dashboard)",
            s3_d: "Qog'oz va daftardagi chalkashliklardan toliqdingizmi? Mijozlar bazasi, buyurtmalar statusi va tushgan pullarni bitta qulay ekranda nazorat qilish uchun sodda veb-panel qurib beraman.",
            s3_pill: "Muddat: taxminan 10–20 ish kuni (loyihaga qarab)",
            s4_t: "To'lov & Texnik Integratsiyalar",
            s4_d: "Mavjud saytingiz yoki botingizga Payme, Click, SMS xabarnomalar ulash, sayt tezligini 2-3 barobar oshirish va serverlarni sozlash.",
            s4_pill: "Muddat: taxminan 2–5 ish kuni",
            ch2_not_title: "Nimalarni o'z zimmamga olmayman:",
            ch2_not_desc: "O'zim yaxshi bilmaydigan yoki muddati real bo'lmagan ishlarga hech qachon rozi bo'lmayman. Agar loyihangiz mening yo'nalishimga to'g'ri kelmasa, buni boshidanoq ochiq aytaman.",
            read_next_cases: "3-Bob: Tajribamdan bir necha hikoya ↓",

            // Chapter 3: Real Cases
            ch3_tag: "3-BOB: HAYOTIY TAJRIBA",
            ch3_title: "Haqiqiy loyihalar hikoyasi: bizneslar nima muammo bilan kelgandi?",
            c1_badge: "1-Hikoya: Telegram do'kon",
            c1_t: "Mijozlar lichkada kutib qolmasligi uchun nima qildik?",
            c1_p1: "Bir do'kon egasi murojaat qildi: do'konida 100 dan ortiq tovar bor edi, lekin hamma mijoz lichkada narx va rasm so'rar, administrator ulgurmagani uchun xaridorlar boshqa joyga ketib qolardi.",
            c1_p2: "Biz Telegram ichida ochiladigan qulay WebApp do'kon qurdik. Rasmlar, razmerlar va Click/Payme to'lovi to'g'ridan-to'g'ri ulandi.",
            c1_res: "Natija: Hozir buyurtmalar kechasi ham to'liq avtomatik tarzda tushmoqda, menejerlar vaqti tejalyapti.",
            c2_badge: "2-Hikoya: Reklama oqlanmagan sayt",
            c2_t: "1 soniyada ochiladigan yangi sayt va Telegram bildirishnoma",
            c2_p1: "Xizmat ko'rsatish kompaniyasi reklama uchun pul sarflar, lekin eski sayt telefonda 5-6 soniyada ochilgani uchun tashrifchilar kutmasdan chiqib ketardi.",
            c2_p2: "Saytni toza Next.js da qayta qurdik, yuklanish tezligini 1.2 soniyaga tushirdik va foydalanuvchi ariza qoldirishi bilanoq ma'lumotlar xodimlarning Telegram guruhiga tushadigan qildik.",
            c2_res: "Natija: Reklamaga sarflangan har bir so'm 2 barobar ko'proq arizalar keltirmoqda.",
            c3_badge: "3-Hikoya: Daftardan qutulish",
            c3_t: "Kichik servis uchun buyurtmalarni boshqarish paneli",
            c3_p1: "Kompaniyada 4 nafar usta va kuniga 20-30 ta buyurtma bor edi. Barcha ma'lumotlar umumiy daftarga yozilar, qaysi buyurtma tayyor bo'lgani yoki pul qachon to'langani chalkashib ketardi.",
            c3_p2: "Ular uchun telefonda ham qulay ochiladigan ixcham boshqaruv paneli qurib berdim. Har bir usta o'z ishini belgilaydi, rahbar esa kunlik tushumni bitta ekranda ko'radi.",
            c3_res: "Natija: Chalkashliklar to'xtatildi, oylik hisobot chiqarish 3 kunlik ishdan 1 tugmaga aylandi.",
            read_next_rules: "4-Bob: Men bilan ishlash qoidalari ↓",

            // Chapter 4: Rules
            ch4_tag: "4-BOB: QOIDALAR",
            ch4_title: "Hamkorlik tamoyillari: siz nimaga ishonishingiz mumkin?",
            ch4_p1: "Dasturlash sohasida eng katta muammo — aloqaning yomonligi va va'dalarning bajarilmasligi. Men bilan bunday muammolar bo'lmasligi uchun quyidagi 4 ta aniq qoidaga amal qilaman:",
            r1_t: "To'g'ridan-to'g'ri muloqot",
            r1_d: "O'rtada vositachilar yo'q. Istalgan paytda Telegram orqali yozishingiz va loyihangiz qaysi bosqichda ekanligini so'rashingiz mumkin.",
            r2_t: "Bosqichma-bosqich ko'rsatish",
            r2_d: "Ishni oxirigacha yashirib o'tirmayman. Har bir qismini (dizayn, asosiy funksiyalar) tayyor bo'lishi bilan ko'rsatib, fikringizni olib boraman.",
            r3_t: "Kod to'liq sizning mulkingiz",
            r3_d: "Loyiha topshirilgach, barcha dastur kodlari (GitHub va server) sizga beriladi. Menga hech qanday sun'iy bog'liqlik bo'lib qolmaydi.",
            r4_t: "Topshirilgach 30 kun yoningizdaman",
            r4_d: "Ish bitishi bilan yo'qolib qolmayman. Sayt yoki bot ishga tushgach, 1 oy davomida har qanday texnik savollarga bepul yordam beraman.",
            read_next_contact: "5-Bob: G'oyangizni ayting va gaplashamiz ↓",

            // Chapter 5: Contact
            ch5_tag: "5-BOB: BOG'LANISH",
            ch5_title: "G'oyangiz bormi? Keling, birgalikda muhokama qilamiz",
            ch5_p1: "Hech qanday murakkab formalarsiz. Nima yasatmoqchiligingizni qisqacha yozing — men sizga qanday yechim ma'qul ekanini, qancha vaqt ketishini va adolatli narxini aytaman:",
            label_idea: "Nima yasatmoqchisiz? (Qisqacha g'oyangiz):",
            ph_idea: "Masalan: Menda kiyim do'koni bor, Telegramda to'lov qabul qiladigan mini-do'kon kerak...",
            label_name: "Ismingiz:",
            ph_name: "Ismingizni kiriting",
            label_contact: "Telegramingiz yoki telefoningiz:",
            ph_contact: "@username yoki +998 (90) 000-00-00",
            btn_send_tg: "Shu xabarni Telegramda yuborish →",
            msg_sent: "Xabaringiz tayyorlandi va Telegram ochilmoqda. Tez orada o'zim siz bilan bog'lanaman!",
            reach_direct: "Yoki menga to'g'ridan-to'g'ri yozing:",
            footer_text: "© 2026 Laziz Bozorov (lazizfullstack.dev). Barcha kodlar qo'lda, mehr bilan yozilgan.",
            footer_top: "Boshiga qaytish ↑"
        },

        ru: {
            title: "Лазиз Бозоров — Записки Разработчика | Сайты и Telegram Системы",
            header_status: "Открыт для новых проектов",
            btn_header_tg: "Написать в Telegram",
            nav_prologue: "Вступление",
            nav_price: "1. О Ценах",
            nav_services: "2. Что Я Делаю",
            nav_stories: "3. Реальный Опыт",
            nav_rules: "4. Правила",
            nav_contact: "5. Связаться",

            ch0_tag: "ВСТУПЛЕНИЕ",
            ch0_title: "Привет! Я Лазиз. Создаю быстрые сайты и Telegram-системы для реального бизнеса.",
            ch0_p1: "Живу в Ташкенте. Здесь нет шаблонных лозунгов, агентской бюрократии или пустых обещаний. Просто искренний рассказ о том, чем я могу быть полезен вашему делу.",
            ch0_p2: "Никаких посредников и менеджеров. С первого дня вы общаетесь напрямую с человеком, который пишет ваш код — со мной.",
            ch0_quote: "\"Моя цель — не просто продать строчки кода, а построить систему, которая приводит вам клиентов и экономит рабочее время.\"",
            ch0_skills_label: "Инструменты, которые использую ежедневно:",
            read_next_price: "Глава 1: Почему на сайте нет готовых цен? ↓",

            ch1_tag: "ГЛАВА 1: О ЦЕНАХ",
            ch1_title: "Почему я не пишу на сайте фикс: «Сайт за $300» или «Бот за $200»?",
            ch1_p1: "В интернете полно предложений с готовыми ценниками. Но в реальной жизни у каждого бизнеса свои задачи.",
            ch1_p2: "Одному человеку нужен лаконичный сайт-визитка — там нет сложного функционала, и он стоит недорого. Другому нужен крупный Telegram-магазин с каталогом на 1000 товаров, оплатой Click/Payme и синхронизацией склада. Загонять оба проекта под один ценник вслепую — считаю нечестным по отношению к клиенту.",
            ch1_box_title: "Как устроен мой подход?",
            ch1_step1_t: "1. Сначала вы рассказываете свою задачу:",
            ch1_step1_d: "Для кого продукт, какие ключевые функции нужны, чего хотите достичь.",
            ch1_step2_t: "2. Я подбираю самое простое и экономное решение:",
            ch1_step2_d: "Без навязывания лишних модулей и ненужных затрат.",
            ch1_step3_t: "3. После этого называю честную цену и точные сроки:",
            ch1_step3_d: "Озвученная цена фиксируется и не растет в процессе. Консультация — бесплатно.",
            ch1_note: "💡 Если у вас есть проект, лучший способ узнать стоимость — коротко описать задачу. За 15 минут я рассчитаю сроки и честную цену.",
            read_next_serv: "Глава 2: Что именно я могу сделать? ↓",

            ch2_tag: "ГЛАВА 2: ВОЗМОЖНОСТИ",
            ch2_title: "Что я умею делать качественно (и за что не берусь)",
            ch2_p1: "Я не претендую на то, что знаю абсолютно всё. Занимаюсь только проверенными направлениями, в которых разбираюсь отлично:",
            s1_t: "Быстрые Сайты & Landing Page",
            s1_d: "Сайты, которые открываются за 1 секунду на телефонах и компьютерах. Посетитель легко оставляет заявку, а данные сразу летят вам в Telegram.",
            s1_pill: "Сроки: ориентировочно 4–8 рабочих дней",
            s2_t: "Telegram Боты & WebApp Магазины",
            s2_d: "Покупателю не нужно скачивать приложение. Он выбирает товары прямо в Telegram, добавляет в корзину и платит через Click/Payme. Заказы моментально видит ваш админ.",
            s2_pill: "Сроки: ориентировочно 5–10 рабочих дней",
            s3_t: "Внутренние Системы (Mini CRM / Панели)",
            s3_d: "Устали от записей в тетрадях и потерянных лидов? Создам понятную веб-панель для контроля заказов, клиентов и кассы в одном месте.",
            s3_pill: "Сроки: ориентировочно 10–20 рабочих дней",
            s4_t: "Подключение Оплат & Интеграции",
            s4_d: "Интеграция Click, Payme, SMS-оповещений, ускорение работы текущего сайта и настройка серверов.",
            s4_pill: "Сроки: ориентировочно 2–5 рабочих дней",
            ch2_not_title: "За что я не берусь:",
            ch2_not_desc: "Никогда не соглашаюсь на то, в чем не уверен, или на нереалистичные сроки. Если ваш проект выходит за рамки моей компетенции — скажу об этом сразу и честно.",
            read_next_cases: "Глава 3: Истории из реальной практики ↓",

            ch3_tag: "ГЛАВА 3: РЕАЛЬНЫЙ ОПЫТ",
            ch3_title: "Истории из практики: с какими проблемами приходили клиенты?",
            c1_badge: "История 1: Telegram-магазин",
            c1_t: "Как мы избавили менеджеров от рутины в переписке?",
            c1_p1: "Владелец магазина одежды тратил часы, отвечая каждому в личке на вопросы о ценах и размерах. Клиенты уставали ждать и уходили к конкурентам.",
            c1_p2: "Мы создали интерактивный WebApp магазин внутри Telegram с понятным выбором и оплатой Click/Payme.",
            c1_res: "Результат: Заказы оформляются автоматически даже ночью, без участия менеджеров.",
            c2_badge: "История 2: Слив рекламного бюджета",
            c2_t: "Новый сайт со скоростью 1 секунда и уведомлениями в Telegram",
            c2_p1: "Компания по услугам крутила рекламу, но старый сайт грузился 6 секунд. Большинство людей закрывали вкладку, не дождавшись.",
            c2_p2: "Переписал сайт на Next.js, довел скорость до 1.2с и связал форму заявки с Telegram-группой сотрудников.",
            c2_res: "Результат: Конверсия рекламы выросла вдвое, ни одна входящая заявка больше не теряется.",
            c3_badge: "История 3: Прощай, блокнот",
            c3_t: "Панель управления заказами для небольшой сервисной компании",
            c3_p1: "Мастера вели все заказы в общей тетради. Регулярно путались статусы готовности и оплаты, а сведение отчетов занимало дни.",
            c3_p2: "Создал компактную веб-панель: мастера отмечают статусы с телефона, а руководитель видит ежедневную выручку в один клик.",
            c3_res: "Результат: Полный порядок в учете, месячный отчет формируется мгновенно.",
            read_next_rules: "Глава 4: Мои правила сотрудничества ↓",

            ch4_tag: "ГЛАВА 4: ПРАВИЛА",
            ch4_title: "Принципы работы: на что вы можете твердо рассчитывать?",
            ch4_p1: "В IT самая частая боль заказчиков — сорванные дедлайны и пропадающие фрилансеры. Я соблюдаю 4 железных правила:",
            r1_t: "Прямой диалог",
            r1_d: "Никаких посредников. В любой момент вы можете написать мне в Telegram и узнать текущий статус проекта.",
            r2_t: "Поэтапная демонстрация",
            r2_d: "Не прячу проект до финала. Показываю дизайн и работающие части по мере готовности, собирая вашу обратную связь.",
            r3_t: "Код принадлежит вам",
            r3_d: "Все исходники (GitHub, сервер, базы данных) после сдачи передаются вам без каких-либо скрытых привязок.",
            r4_t: "30 дней поддержки после сдачи",
            r4_d: "После запуска я остаюсь на связи. В течение 1 месяца бесплатно помогаю с техническими вопросами и нюансами.",
            read_next_contact: "Глава 5: Расскажите о вашей идее ↓",

            ch5_tag: "ГЛАВА 5: СВЯЗАТЬСЯ",
            ch5_title: "Есть задумка? Давайте обсудим её без лишней суеты",
            ch5_p1: "Никаких сложных анкет. Просто напишите пару слов о том, что требуется — я подскажу лучшее решение, сроки и честную стоимость:",
            label_idea: "Что требуется сделать? (Коротко о задаче):",
            ph_idea: "Например: Нужен Telegram-бот для магазина обуви с приемом оплаты Click...",
            label_name: "Ваше имя:",
            ph_name: "Введите имя",
            label_contact: "Telegram или телефон для связи:",
            ph_contact: "@username или +998 (90) 000-00-00",
            btn_send_tg: "Отправить это сообщение в Telegram →",
            msg_sent: "Сообщение сформировано, открываем Telegram. Скоро я лично свяжусь с вами!",
            reach_direct: "Или напишите мне напрямую:",
            footer_text: "© 2026 Лазиз Бозоров (lazizfullstack.dev). Написано вручную и с душой.",
            footer_top: "Наверх ↑"
        },

        en: {
            title: "Laziz Bozorov — Developer Stories | Websites & Telegram Systems",
            header_status: "Open for new projects",
            btn_header_tg: "Message on Telegram",
            nav_prologue: "Prologue",
            nav_price: "1. The Pricing",
            nav_services: "2. Capabilities",
            nav_stories: "3. Real Cases",
            nav_rules: "4. Principles",
            nav_contact: "5. Get in Touch",

            ch0_tag: "PROLOGUE",
            ch0_title: "Hi! I'm Laziz. I craft reliable websites and Telegram systems for businesses.",
            ch0_p1: "Based in Tashkent. You won't find agency buzzwords or inflated claims here. Just an honest conversation about what I build and how I can help your business grow.",
            ch0_p2: "No middle managers or corporate bureaucracy. From day one, you work directly with the engineer writing your code — myself.",
            ch0_quote: "\"My goal isn't merely selling lines of code, but building a system that brings you real customers and saves you hours every week.\"",
            ch0_skills_label: "Tools I work with daily:",
            read_next_price: "Chapter 1: Why are there no fixed prices? ↓",

            ch1_tag: "CHAPTER 1: THE PRICING",
            ch1_title: "Why don't I put rigid prices like \"$300\" or \"$500\" on this page?",
            ch1_p1: "You've seen standard pricing tables across the web: \"Website — $300\", \"Bot — $200\". But in reality, every business challenge is distinct.",
            ch1_p2: "One person needs a minimal single-page showcase — simple and low-cost. Another needs an inventory system with thousands of SKUs and integrated payments. Forcing both into the same price tag before listening is unfair to the client.",
            ch1_box_title: "How I actually work:",
            ch1_step1_t: "1. You share what you want to achieve:",
            ch1_step1_d: "Your business goal, target users, and essential capabilities.",
            ch1_step2_t: "2. I design the cleanest, most cost-effective path:",
            ch1_step2_d: "No unnecessary add-ons, only what solves your problem.",
            ch1_step3_t: "3. I provide an honest quote and clear timeline:",
            ch1_step3_d: "The agreed budget stays fixed. Consultations are always free.",
            ch1_note: "💡 The fastest way to get a price is simply to tell me your idea. I'll evaluate the scope and give you an honest quote within 15 minutes.",
            read_next_serv: "Chapter 2: What do I build best? ↓",

            ch2_tag: "CHAPTER 2: CAPABILITIES",
            ch2_title: "What I build reliably (and what I don't)",
            ch2_p1: "I don't claim to do everything. I focus strictly on battle-tested domains where I deliver top-notch results:",
            s1_t: "High-Speed Websites & Landing Pages",
            s1_d: "Websites that load in 1 second on mobile devices. Clean visuals, high conversion, and leads routed straight to your Telegram.",
            s1_pill: "Timeline: ~4–8 business days",
            s2_t: "Telegram Bots & WebApp Mini-Stores",
            s2_d: "Zero app download required. Users browse catalog items, add to cart, and check out directly via Click/Payme inside Telegram.",
            s2_pill: "Timeline: ~5–10 business days",
            s3_t: "Internal Management Dashboards (Mini CRM)",
            s3_d: "Tired of tracking orders on paper? A centralized, clean dashboard to oversee pipeline, customer records, and revenue.",
            s3_pill: "Timeline: ~10–20 business days",
            s4_t: "Payment & Technical Integrations",
            s4_d: "Integrating Click, Payme, SMS alerts, optimizing slow websites, and configuring secure servers.",
            s4_pill: "Timeline: ~2–5 business days",
            ch2_not_title: "What I do not take on:",
            ch2_not_desc: "I never accept work outside my expertise or impossible deadlines. If a project is not a great fit, I will tell you upfront.",
            read_next_cases: "Chapter 3: Real client stories ↓",

            ch3_tag: "CHAPTER 3: REAL STORIES",
            ch3_title: "Case stories: what problems did businesses bring to me?",
            c1_badge: "Story 1: Telegram Store",
            c1_t: "Eliminating manual DM replies for a retail shop",
            c1_p1: "A store owner spent entire days replying to repetitive DMs about sizes and prices, losing buyers who got tired of waiting.",
            c1_p2: "We built an in-app Telegram WebApp store with full catalog filtering and automatic checkout.",
            c1_res: "Result: Orders now process round-the-clock without manual intervention.",
            c2_badge: "Story 2: Fixing Ad Waste",
            c2_t: "A 1-second Next.js site connected to staff Telegram",
            c2_p1: "A service firm was spending ad dollars on a website that took 6 seconds to load on phones. Visitors left before seeing the offer.",
            c2_p2: "Rebuilt with Next.js (1.2s load), funneling form inquiries straight into the team Telegram group.",
            c2_res: "Result: Twice as many qualified leads captured from the same ad budget.",
            c3_badge: "Story 3: Ditching Paper Ledgers",
            c3_t: "A streamlined order tracking panel for a repair shop",
            c3_p1: "A 4-person repair shop tracked jobs in paper notebooks, constantly confusing completion and payment statuses.",
            c3_p2: "Built a lightweight mobile-friendly dashboard where technicians update statuses and owners view cashflow instantly.",
            c3_res: "Result: Zero lost jobs, and month-end audits take seconds instead of days.",
            read_next_rules: "Chapter 4: Working principles ↓",

            ch4_tag: "CHAPTER 4: PRINCIPLES",
            ch4_title: "Working rules: what can you count on?",
            ch4_p1: "The most common frustration with developers is ghosting and broken timelines. I adhere to 4 non-negotiable rules:",
            r1_t: "Direct Line of Contact",
            r1_d: "Zero middlemen. You can message me on Telegram anytime to check progress.",
            r2_t: "Milestone Demos",
            r2_d: "I don't hide code until the deadline. You see working prototypes along the way.",
            r3_t: "100% Code Ownership",
            r3_d: "Upon handover, all repository code, databases, and keys become solely yours.",
            r4_t: "30-Day Post-Launch Warranty",
            r4_d: "I don't disappear after deployment. Enjoy 30 days of free operational support.",
            read_next_contact: "Chapter 5: Tell me your idea ↓",

            ch5_tag: "CHAPTER 5: GET IN TOUCH",
            ch5_title: "Have an idea? Let's discuss it without friction",
            ch5_p1: "No complicated forms. Briefly describe what you'd like to build — I'll advise on the best architecture, realistic timeline, and honest cost:",
            label_idea: "What would you like to build? (Brief idea):",
            ph_idea: "e.g. I run an apparel shop and want a Telegram mini-app with automated payments...",
            label_name: "Your Name:",
            ph_name: "Enter your name",
            label_contact: "Your Telegram or phone number:",
            ph_contact: "@username or +998 (90) 000-00-00",
            btn_send_tg: "Send this message via Telegram →",
            msg_sent: "Message formatted, opening Telegram. I will personally reply shortly!",
            reach_direct: "Or message me directly:",
            footer_text: "© 2026 Laziz Bozorov (lazizfullstack.dev). Handcrafted with care.",
            footer_top: "Back to top ↑"
        }
    };

    /* --------------------------------------------------------------------------
       2. LANGUAGE SWITCHER CONTROLLER
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

        document.querySelectorAll('.lang-item').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    };

    document.querySelectorAll('.lang-item').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    /* --------------------------------------------------------------------------
       3. GREEN CODE RIBBON & READING PROGRESS SCROLLER
       -------------------------------------------------------------------------- */
    const codeRibbonProgress = document.getElementById('codeRibbonProgress');
    const codeRibbonHead = document.getElementById('codeRibbonHead');
    const readingProgressBar = document.getElementById('readingProgressBar');
    const codeTokens = document.querySelectorAll('.code-token');

    const updateScrollRibbon = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
        const percentage = (scrollFraction * 100).toFixed(2);

        // Update top bar
        if (readingProgressBar) {
            readingProgressBar.style.width = `${percentage}%`;
        }

        // Update vertical green ribbon
        if (codeRibbonProgress && codeRibbonHead) {
            codeRibbonProgress.style.height = `${percentage}%`;
            codeRibbonHead.style.top = `${percentage}%`;
        }

        // Light up tokens as green ribbon reaches them
        if (codeTokens.length > 0) {
            const activeCount = Math.floor(scrollFraction * codeTokens.length);
            codeTokens.forEach((token, index) => {
                if (index <= activeCount) {
                    token.classList.add('active-token');
                } else {
                    token.classList.remove('active-token');
                }
            });
        }
    };

    window.addEventListener('scroll', updateScrollRibbon, { passive: true });
    window.addEventListener('resize', updateScrollRibbon, { passive: true });
    updateScrollRibbon();

    /* --------------------------------------------------------------------------
       4. DIRECT TELEGRAM DISPATCH (NO FAKE POPUP MODALS)
       -------------------------------------------------------------------------- */
    const btnSendTg = document.getElementById('btnSendViaTelegram');
    const userIdea = document.getElementById('userIdea');
    const userName = document.getElementById('userName');
    const userContact = document.getElementById('userContact');
    const inlineSuccessMsg = document.getElementById('inlineSuccessMsg');

    if (btnSendTg) {
        btnSendTg.addEventListener('click', (e) => {
            e.preventDefault();

            const idea = (userIdea && userIdea.value.trim()) || "Loyiha bo'yicha maslahatlashmoqchiman.";
            const name = (userName && userName.value.trim()) || "";
            const contact = (userContact && userContact.value.trim()) || "";

            let tgMessage = "";
            if (currentLang === 'ru') {
                tgMessage = `Здравствуйте Лазиз!\n\n💡 Задача: ${idea}\n👤 Имя: ${name || 'Клиент'}\n📞 Контакт: ${contact || 'Чат Telegram'}`;
            } else if (currentLang === 'en') {
                tgMessage = `Hi Laziz!\n\n💡 Project Idea: ${idea}\n👤 Name: ${name || 'Client'}\n📞 Contact: ${contact || 'Telegram Chat'}`;
            } else {
                tgMessage = `Assalomu alaykum Laziz!\n\n💡 Loyiha g'oyasi: ${idea}\n👤 Ism: ${name || 'Mijoz'}\n📞 Aloqa: ${contact || 'Telegram Chat'}`;
            }

            const tgUrl = `https://t.me/lazizfullstack?text=${encodeURIComponent(tgMessage)}`;

            // Show polite inline notice
            if (inlineSuccessMsg) {
                inlineSuccessMsg.classList.remove('hidden');
            }

            // Open Telegram conversation directly
            window.open(tgUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // Initialize Language
    setLanguage(currentLang);
});
