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
    title: { en: "Product Thinking", de: "Produktdenken", ar: "التفكير المنتجي" },
    description: {
      en: "Turning business requirements into clear product experiences.",
      de: "Geschäftsanforderungen in klare Produkterlebnisse übersetzen.",
      ar: "تحويل متطلبات الأعمال إلى تجارب منتج واضحة.",
    },
    tags: ["Stakeholder Collaboration", "Requirements", "Product Strategy"],
    images: ["/assets/images/process/discover.svg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: { en: "UX Strategy", de: "UX-Strategie", ar: "استراتيجية تجربة المستخدم" },
    description: {
      en: "Mapping complex workflows and identifying opportunities for simplification.",
      de: "Komplexe Arbeitsabläufe abbilden und Möglichkeiten zur Vereinfachung erkennen.",
      ar: "رسم مسارات العمل المعقدة وتحديد فرص التبسيط.",
    },
    tags: ["User Research", "Workflow Mapping", "Problem Framing"],
    images: ["/assets/images/process/define.svg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: { en: "Interface Design", de: "Interface-Design", ar: "تصميم الواجهات" },
    description: {
      en: "Creating polished, accessible interfaces that scale.",
      de: "Ausgefeilte, zugängliche Interfaces gestalten, die mitwachsen.",
      ar: "تصميم واجهات أنيقة وسهلة الاستخدام قابلة للتوسع.",
    },
    tags: ["UI Design", "Accessibility", "Figma"],
    images: ["/assets/images/process/design.svg"],
    expanded: false,
  },
  {
    id: "service-4",
    title: { en: "Design Systems", de: "Design-Systeme", ar: "أنظمة التصميم" },
    description: {
      en: "Building reusable foundations that keep products consistent.",
      de: "Wiederverwendbare Grundlagen schaffen, die Produkte konsistent halten.",
      ar: "بناء أسس قابلة لإعادة الاستخدام تحافظ على تناسق المنتج.",
    },
    tags: ["Design Tokens", "Components", "Figma Variables"],
    images: ["/assets/images/process/prototype.svg"],
    expanded: false,
  },
  {
    id: "service-5",
    title: { en: "Prototyping", de: "Prototyping", ar: "النمذجة الأولية" },
    description: {
      en: "Making ideas tangible before they reach development.",
      de: "Ideen greifbar machen, bevor sie in die Entwicklung gehen.",
      ar: "تجسيد الأفكار قبل أن تصل إلى مرحلة التطوير.",
    },
    tags: ["Interactive Prototypes", "Auto Layout", "Motion"],
    images: ["/assets/images/process/validate.svg"],
    expanded: false,
  },
  {
    id: "service-6",
    title: { en: "Design Handoff", de: "Design-Übergabe", ar: "تسليم التصميم" },
    description: {
      en: "Working closely with developers to ensure the design survives implementation.",
      de: "Enge Zusammenarbeit mit Entwicklern, damit das Design die Umsetzung übersteht.",
      ar: "العمل عن قرب مع المطورين لضمان بقاء التصميم كما هو أثناء التنفيذ.",
    },
    tags: ["Developer Handoff", "Documentation", "Design Tokens"],
    images: ["/assets/images/process/deliver.svg"],
    expanded: false,
  },
];
