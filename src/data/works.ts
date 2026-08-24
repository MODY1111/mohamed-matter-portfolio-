export type LocalizedText = { en: string; de: string; ar: string };

export type Work = {
  title: string;
  description: LocalizedText;
  year: string;
  role: LocalizedText;
  tags: string[];
  image: string;
  logo: string;
  link: string;
};

const uiuxRole: LocalizedText = {
  en: "UI/UX Designer",
  de: "UI/UX-Designer",
  ar: "مصمم UI/UX",
};

export const works: Work[] = [
  {
    title: "Velora",
    description: {
      en: "Smart investing, simplified — a fintech app with a clean, guided experience for AI-backed portfolio tracking and investment decisions",
      de: "Intelligentes Investieren, einfach gemacht — eine Fintech-App mit klarer, geführter Nutzererfahrung für KI-gestütztes Portfolio-Tracking und Anlageentscheidungen",
      ar: "استثمار ذكي وبسيط — تطبيق تقنية مالية بتجربة واضحة وموجهة لتتبع المحافظ الاستثمارية واتخاذ قرارات الاستثمار بدعم الذكاء الاصطناعي",
    },
    year: "2025",
    role: uiuxRole,
    tags: ["Fintech", "Mobile App", "Figma"],
    image: "/assets/images/section/work-1.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/247864931/Velora-Smart-Investing-Simplified",
  },
  {
    title: "Epic Club Manager",
    description: {
      en: "A SaaS dashboard for sports club management, replacing spreadsheets and group chats with a single intentional interface for bookings and operations",
      de: "Ein SaaS-Dashboard für die Verwaltung von Sportvereinen, das Excel-Tabellen und Gruppenchats durch eine einzige durchdachte Oberfläche für Buchungen und Abläufe ersetzt",
      ar: "لوحة تحكم SaaS لإدارة الأندية الرياضية، تستبدل جداول البيانات ومحادثات المجموعات بواجهة واحدة مدروسة للحجوزات والعمليات",
    },
    year: "2025",
    role: uiuxRole,
    tags: ["SaaS", "Dashboard", "Figma"],
    image: "/assets/images/section/work-2.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/253235969/Epic-Club-Manager-Sports-Club-SaaS-Dashboard",
  },
  {
    title: "Qoot App",
    description: {
      en: "E-commerce mobile app design with custom monster-themed graphics and marketing visuals built end-to-end in Figma",
      de: "Design einer E-Commerce-Mobile-App mit individuellen Monster-Grafiken und Marketing-Visuals, vollständig in Figma umgesetzt",
      ar: "تصميم تطبيق تجارة إلكترونية بجرافيكس مخصصة بطابع الوحوش ومرئيات تسويقية، منفذ بالكامل عبر Figma",
    },
    year: "2024",
    role: uiuxRole,
    tags: ["E-commerce", "Mobile App", "Figma"],
    image: "/assets/images/section/work-3.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/214531707/Qoot-App",
  },
  {
    title: "Health Kingdom",
    description: {
      en: "Telemedicine platform enabling virtual consultations and remote physical exams, designed around trust, clarity, and clinical accessibility",
      de: "Telemedizin-Plattform für virtuelle Beratungen und Fernuntersuchungen, gestaltet für Vertrauen, Klarheit und klinische Zugänglichkeit",
      ar: "منصة طب عن بُعد تتيح استشارات افتراضية وفحوصات جسدية عن بعد، مصممة على أساس الثقة والوضوح وسهولة الوصول السريري",
    },
    year: "2023",
    role: uiuxRole,
    tags: ["Healthcare", "Web App", "Figma"],
    image: "/assets/images/section/work-4.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/174509403/Health-kingdom-remote-physical-exams",
  },
  {
    title: "Revive",
    description: {
      en: "A second-hand marketplace with purpose — e-commerce UI/UX and brand identity built around sustainability",
      de: "Ein Second-Hand-Marktplatz mit Sinn — E-Commerce-UI/UX und Markenidentität rund um das Thema Nachhaltigkeit",
      ar: "سوق للمنتجات المستعملة له هدف — تصميم UI/UX وهوية بصرية للتجارة الإلكترونية مبنية على الاستدامة",
    },
    year: "2023",
    role: uiuxRole,
    tags: ["E-commerce", "Brand Identity", "Figma"],
    image: "/assets/images/section/work-5.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/230711533/Revive-A-Second-Hand-Marketplace-With-Purpose",
  },
  {
    title: "Preserving Memories",
    description: {
      en: "A QR-code-based emotional experience exploring how families preserve and revisit memories, blending illustration and brand identity",
      de: "Ein QR-Code-basiertes emotionales Erlebnis darüber, wie Familien Erinnerungen bewahren und wieder aufleben lassen — eine Verbindung aus Illustration und Markenidentität",
      ar: "تجربة عاطفية قائمة على رمز QR تستكشف كيف تحافظ العائلات على ذكرياتها وتستعيدها، بمزيج من الرسم التوضيحي والهوية البصرية",
    },
    year: "2023",
    role: uiuxRole,
    tags: ["Brand Identity", "Illustration", "Web Design"],
    image: "/assets/images/section/work-7.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/gallery/227788333/Preserving-Memories-QR-based-Emotional-Experience",
  },
  {
    title: "Therapy & Counseling Platform",
    description: {
      en: "Arabic (RTL) web design for a mental health and counseling service — booking sessions, connecting with specialists, and starting the first conversation with ease",
      de: "Arabisches (RTL) Webdesign für einen Beratungsdienst im Bereich mentale Gesundheit — Terminbuchung, Kontakt zu Fachleuten und ein einfacher Einstieg ins erste Gespräch",
      ar: "تصميم موقع عربي (من اليمين لليسار) لخدمة استشارات نفسية — حجز الجلسات، التواصل مع المختصين، وبدء أول محادثة بسهولة",
    },
    year: "2025",
    role: uiuxRole,
    tags: ["Healthcare", "Arabic / RTL", "Web Design"],
    image: "/assets/images/section/work-8.png",
    logo: "/assets/images/logo/logo-mvp-dark.svg",
    link: "https://www.behance.net/mohamedmatter",
  },
];
