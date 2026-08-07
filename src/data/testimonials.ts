export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

// PLACEHOLDER — replace with real client quotes. These are illustrative
// sample testimonials, not actual feedback from Mohamed's clients.
export const testimonials: Testimonial[] = [
  {
    text: "Mohamed owned the entire design process for our platform—from early research to a design system our developers could actually build from. The handoff was clean and nothing got lost in translation.",
    authorName: "Sample Client 1",
    authorRole: "Product Manager, Government Platform",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    text: "We needed a dashboard that made sense of a lot of messy data. He turned it into something our team actually enjoys using every day.",
    authorName: "Sample Client 2",
    authorRole: "Operations Lead, SaaS Dashboard",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    text: "Despite a tight launch schedule, he delivered a polished, well-documented mobile app design. Every screen felt intentional, and our developers had everything they needed to build it.",
    authorName: "Sample Client 3",
    authorRole: "Founder, Mobile App",
    image: "/assets/images/section/tes-3.jpg",
  },
];
