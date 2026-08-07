export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2016",
    role: "Bachelor's Degree, Delta Academy for Computer Science and Technology",
    description:
      "Bachelor's degree in Computer Science and Technology, Cairo, Egypt.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "Coursera",
    role: "UI/UX Design Specialization, Coursera",
    description:
      "Online specialization covering UI/UX design fundamentals, user research, and prototyping.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
];
