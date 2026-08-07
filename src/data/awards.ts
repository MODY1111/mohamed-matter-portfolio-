export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "Awqaf Platform", publisher: "Government Design System", year: 2024, image: "/assets/images/section/award-1.jpg" },
  { name: "Emirates Red Crescent", publisher: "Government Platform & Dashboard", year: 2023, image: "/assets/images/section/award-2.jpg" },
  { name: "Arabi AI", publisher: "AI Product Interface", year: 2023, image: "/assets/images/section/award-3.jpg" },
  { name: "Al Ain Finance", publisher: "Fintech App", year: 2022, image: "/assets/images/section/award-4.jpg" },
];
