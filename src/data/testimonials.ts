export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

// PLACEHOLDER — replace with real client quotes. These are template sample
// testimonials, not actual feedback from Mohamed's clients.
export const testimonials: Testimonial[] = [
  {
    text: "Working with him was seamless. The interface came out fast, modern, and easy to update—exactly what our team needed.",
    authorName: "Sample Client 1",
    authorRole: "Head of Product",
    image: "/assets/images/section/tes-1.svg",
  },
  {
    text: "He shaped our vision into a strong product. The process was clear, fast, and the result gave our team the professional edge we needed.",
    authorName: "Sample Client 2",
    authorRole: "Co-Founder",
    image: "/assets/images/section/tes-2.svg",
  },
  {
    text: "Despite a tight launch schedule, he delivered a clean, well-documented handoff. It's modern, easy to manage, and fits our needs perfectly.",
    authorName: "Sample Client 3",
    authorRole: "Marketing Director",
    image: "/assets/images/section/tes-3.svg",
  },
];
