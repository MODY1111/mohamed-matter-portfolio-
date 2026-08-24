import type { LocalizedText } from "./works";

export type TechItem = {
  name: string;
  duty: LocalizedText;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Figma",
    duty: {
      en: "Design systems, prototyping & handoff",
      de: "Design-Systeme, Prototyping & Übergabe",
      ar: "أنظمة تصميم، نماذج أولية، وتسليم",
    },
    image: { light: "/assets/images/section/tech-1.svg", width: 19, height: 28 },
    progress: 95,
  },
  {
    name: "Adobe Photoshop",
    duty: {
      en: "Raster graphics editor",
      de: "Bildbearbeitungsprogramm",
      ar: "برنامج تحرير الصور",
    },
    image: { light: "/assets/images/section/tech-3.svg", width: 29, height: 28 },
    progress: 75,
  },
  {
    name: "Visual Studio Code",
    duty: {
      en: "Code editor for prototype builds & handoff",
      de: "Code-Editor für Prototyp-Builds & Übergabe",
      ar: "محرر أكواد لبناء النماذج الأولية والتسليم",
    },
    image: { light: "/assets/images/section/tech-4.svg", width: 28, height: 28 },
    progress: 70,
  },
  {
    name: "ChatGPT",
    duty: {
      en: "AI research & content assistant",
      de: "KI-Recherche- und Content-Assistent",
      ar: "مساعد ذكاء اصطناعي للبحث والمحتوى",
    },
    image: { light: "/assets/images/section/tech-5.svg", width: 28, height: 28 },
    progress: 85,
  },
  {
    name: "Claude Code",
    duty: {
      en: "AI pair-programming for prototypes & sites",
      de: "KI-Pair-Programming für Prototypen & Websites",
      ar: "برمجة ثنائية بالذكاء الاصطناعي للنماذج والمواقع",
    },
    image: { light: "/assets/images/section/tech-6.svg", width: 28, height: 28 },
    progress: 80,
  },
];
