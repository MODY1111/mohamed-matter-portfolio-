import type { LocalizedText } from "./works";

export type Award = {
  name: string;
  publisher: LocalizedText;
  year: number;
  image: string;
};

export const awards: Award[] = [
  {
    name: "Awqaf Platform",
    publisher: { en: "Government Design System", de: "Behörden-Designsystem", ar: "نظام تصميم حكومي" },
    year: 2024,
    image: "/assets/images/section/award-1.jpg",
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
