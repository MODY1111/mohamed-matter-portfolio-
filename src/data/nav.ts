export type NavItem = {
  href: string;
  label: { en: string; de: string; ar: string };
  icon: string;
  separator?: "before" | "after";
};

export const navItems: NavItem[] = [
  { href: "#home", label: { en: "Home", de: "Start", ar: "الرئيسية" }, icon: "icon-home", separator: "after" },
  { href: "#about", label: { en: "About", de: "Über mich", ar: "نبذة عني" }, icon: "icon-user-circle" },
  { href: "#experience", label: { en: "Experience", de: "Erfahrung", ar: "الخبرة" }, icon: "icon-service" },
  { href: "#education", label: { en: "Education", de: "Ausbildung", ar: "التعليم" }, icon: "icon-edu" },
  { href: "#work", label: { en: "Work", de: "Projekte", ar: "الأعمال" }, icon: "icon-high-light" },
  { href: "#service", label: { en: "Services", de: "Leistungen", ar: "الخدمات" }, icon: "icon-service" },
  { href: "#tech", label: { en: "Tech", de: "Tech-Stack", ar: "الأدوات" }, icon: "icon-tech-stack" },
  { href: "#testimonial", label: { en: "Trusted By", de: "Referenzen", ar: "موثوق من قبل" }, icon: "icon-tes", separator: "after" },
  { href: "#contact", label: { en: "Contact", de: "Kontakt", ar: "تواصل" }, icon: "icon-send" },
];
