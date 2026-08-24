import type { LocalizedText } from "./works";

export type Service = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  images: string[];
  expanded: boolean,
};

export const services: Service[] = [
  {
    id: "service-1",
    title: { en: "Discover", de: "Entdecken", ar: "استكشاف" },
    description: {
      en: "Research users, stakeholders, and market opportunities.",
      de: "Nutzer, Stakeholder und Marktchancen recherchieren.",
      ar: "بحث المستخدمين وأصحاب المصلحة وفرص السوق.",
    },
    tags: ["User Research", "Stakeholder Interviews", "Market Analysis"],
    images: ["/assets/images/process/discover.svg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: { en: "Define", de: "Definieren", ar: "تحديد" },
    description: {
      en: "Transform insights into clear product strategies.",
      de: "Erkenntnisse in klare Produktstrategien überführen.",
      ar: "تحويل الرؤى إلى استراتيجيات منتج واضحة.",
    },
    tags: ["Problem Framing", "Product Strategy", "Requirements"],
    images: ["/assets/images/process/define.svg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: { en: "Design", de: "Gestalten", ar: "تصميم" },
    description: {
      en: "Create intuitive interfaces with scalable systems.",
      de: "Intuitive Interfaces mit skalierbaren Systemen gestalten.",
      ar: "إنشاء واجهات سهلة الاستخدام بأنظمة قابلة للتوسع.",
    },
    tags: ["UI Design", "Design Systems", "Figma"],
    images: ["/assets/images/process/design.svg"],
    expanded: false,
  },
  {
    id: "service-4",
    title: { en: "Prototype", de: "Prototyping", ar: "نمذجة" },
    description: {
      en: "Build realistic interactive experiences.",
      de: "Realistische, interaktive Erlebnisse erstellen.",
      ar: "بناء تجارب تفاعلية واقعية.",
    },
    tags: ["Interactive Prototypes", "Auto Layout", "Motion"],
    images: ["/assets/images/process/prototype.svg"],
    expanded: false,
  },
  {
    id: "service-5",
    title: { en: "Validate", de: "Validieren", ar: "تحقق" },
    description: {
      en: "Test, measure, and refine every interaction.",
      de: "Jede Interaktion testen, messen und verfeinern.",
      ar: "اختبار وقياس وتحسين كل تفاعل.",
    },
    tags: ["Usability Testing", "Iteration", "Feedback"],
    images: ["/assets/images/process/validate.svg"],
    expanded: false,
  },
  {
    id: "service-6",
    title: { en: "Deliver", de: "Liefern", ar: "تسليم" },
    description: {
      en: "Production-ready designs with complete design systems.",
      de: "Produktionsreife Designs mit vollständigen Design-Systemen.",
      ar: "تصاميم جاهزة للإنتاج مع أنظمة تصميم متكاملة.",
    },
    tags: ["Developer Handoff", "Design Tokens", "Documentation"],
    images: ["/assets/images/process/deliver.svg"],
    expanded: false,
  },
];
