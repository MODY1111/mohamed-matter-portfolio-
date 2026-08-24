import type { LocalizedText } from "./works";

export type TimelineItem = {
  period: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: { en: "2016", de: "2016", ar: "2016" },
    role: {
      en: "Bachelor's Degree, Delta Academy for Computer Science and Technology",
      de: "Bachelorabschluss, Delta Academy for Computer Science and Technology",
      ar: "بكالوريوس، أكاديمية دلتا لعلوم وتقنية الحاسوب",
    },
    description: {
      en: "Bachelor's degree in Computer Science and Technology, Cairo, Egypt.",
      de: "Bachelorabschluss in Informatik und Technologie, Kairo, Ägypten.",
      ar: "بكالوريوس في علوم وتقنية الحاسوب، القاهرة، مصر.",
    },
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: { en: "Coursera", de: "Coursera", ar: "Coursera" },
    role: {
      en: "UI/UX Design Specialization, Coursera",
      de: "UI/UX-Design-Spezialisierung, Coursera",
      ar: "تخصص تصميم UI/UX، Coursera",
    },
    description: {
      en: "Online specialization covering UI/UX design fundamentals, user research, and prototyping.",
      de: "Online-Spezialisierung zu den Grundlagen von UI/UX-Design, Nutzerforschung und Prototyping.",
      ar: "تخصص عبر الإنترنت يغطي أساسيات تصميم UI/UX وأبحاث المستخدمين وبناء النماذج الأولية.",
    },
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
];
