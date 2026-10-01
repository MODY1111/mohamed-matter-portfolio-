import type { LocalizedText } from "./works";

export type Award = {
  name: string;
  publisher: LocalizedText;
  year: number;
  image: string;
  highlight?: LocalizedText;
};

export const awards: Award[] = [
  {
    name: "Awqaf Platform",
    publisher: { en: "Government Design System", de: "Behörden-Designsystem", ar: "نظام تصميم حكومي" },
    year: 2024,
    image: "/assets/images/section/award-1.jpg",
    highlight: {
      en: "Built the Awqaf platform's design system from scratch with Figma Variables, Components, and Design Tokens.",
      de: "Das Design-System der Awqaf-Plattform von Grund auf mit Figma Variables, Components und Design Tokens aufgebaut.",
      ar: "بنيت نظام تصميم منصة أوقاف من الصفر باستخدام Figma Variables وComponents وDesign Tokens.",
    },
  },
  {
    name: "Emirates Red Crescent",
    publisher: { en: "Government Platform & Dashboard", de: "Behördenplattform & Dashboard", ar: "منصة ولوحة تحكم حكومية" },
    year: 2023,
    image: "/assets/images/section/award-2.jpg",
  },
  {
    name: "Arabi AI",
    publisher: { en: "AI Product Interface", de: "KI-Produktoberfläche", ar: "واجهة منتج ذكاء اصطناعي" },
    year: 2023,
    image: "/assets/images/section/award-3.jpg",
  },
  {
    name: "Al Ain Finance",
    publisher: { en: "Fintech App", de: "Fintech-App", ar: "تطبيق تقنية مالية" },
    year: 2022,
    image: "/assets/images/section/award-4.jpg",
  },
];
