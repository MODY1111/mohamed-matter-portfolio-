export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean,
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Discover",
    description: "Research users, stakeholders, and market opportunities.",
    tags: ["User Research", "Stakeholder Interviews", "Market Analysis"],
    images: ["/assets/images/process/discover.svg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "Define",
    description: "Transform insights into clear product strategies.",
    tags: ["Problem Framing", "Product Strategy", "Requirements"],
    images: ["/assets/images/process/define.svg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Design",
    description: "Create intuitive interfaces with scalable systems.",
    tags: ["UI Design", "Design Systems", "Figma"],
    images: ["/assets/images/process/design.svg"],
    expanded: false,
  },
  {
    id: "service-4",
    title: "Prototype",
    description: "Build realistic interactive experiences.",
    tags: ["Interactive Prototypes", "Auto Layout", "Motion"],
    images: ["/assets/images/process/prototype.svg"],
    expanded: false,
  },
  {
    id: "service-5",
    title: "Validate",
    description: "Test, measure, and refine every interaction.",
    tags: ["Usability Testing", "Iteration", "Feedback"],
    images: ["/assets/images/process/validate.svg"],
    expanded: false,
  },
  {
    id: "service-6",
    title: "Deliver",
    description: "Production-ready designs with complete design systems.",
    tags: ["Developer Handoff", "Design Tokens", "Documentation"],
    images: ["/assets/images/process/deliver.svg"],
    expanded: false,
  },
];
