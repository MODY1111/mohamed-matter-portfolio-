import type { LocalizedText } from "./works";

export type ToolCategory = "design" | "product" | "collaboration" | "ai";

export const toolCategoryLabels: Record<ToolCategory, LocalizedText> = {
  design: { en: "Design", de: "Design", ar: "التصميم" },
  product: { en: "Product", de: "Produkt", ar: "المنتج" },
  collaboration: { en: "Collaboration", de: "Zusammenarbeit", ar: "التعاون" },
  ai: { en: "AI", de: "KI", ar: "الذكاء الاصطناعي" },
};

export type TechItem = {
  name: string;
  duty: LocalizedText;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
  category: ToolCategory;
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
    category: "design",
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
    category: "design",
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
    category: "collaboration",
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
    category: "ai",
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
    category: "ai",
  },
];

export type ToolSkill = {
  label: LocalizedText;
  category: ToolCategory;
};

export const toolSkills: ToolSkill[] = [
  { category: "product", label: { en: "User Research", de: "Nutzerforschung", ar: "بحث المستخدمين" } },
  { category: "product", label: { en: "UX Strategy", de: "UX-Strategie", ar: "استراتيجية تجربة المستخدم" } },
  { category: "product", label: { en: "Prototyping", de: "Prototyping", ar: "النمذجة الأولية" } },
  { category: "product", label: { en: "Design Systems", de: "Design-Systeme", ar: "أنظمة التصميم" } },
  { category: "collaboration", label: { en: "Developer Handoff", de: "Übergabe an Entwickler", ar: "التسليم للمطورين" } },
  { category: "collaboration", label: { en: "Documentation", de: "Dokumentation", ar: "التوثيق" } },
  { category: "collaboration", label: { en: "Stakeholder Collaboration", de: "Zusammenarbeit mit Stakeholdern", ar: "التعاون مع أصحاب المصلحة" } },
];
