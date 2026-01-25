export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  body: string[];
  publishedAt: string; // ISO date string
  category: string;
};

export const posts: BlogPost[] = [
  {
    title: "3 Practical Ways to Improve Daily Mobility Outcomes",
    slug: "improve-daily-mobility-outcomes",
    excerpt:
      "Simple approaches that improve stability and confidence without requiring complex tools.",
    body: [
      "Mobility outcomes improve when habits are consistent and environments are supportive.",
      "Start with safety-first routines: clear walk paths, consistent footwear choices, and fatigue awareness.",
      "Document what works—small notes can prevent repeated trial-and-error."
    ],
    publishedAt: "2026-01-01",
    category: "Mobility"
  },
  {
    title: "What to Consider When Evaluating Prosthetic-Focused Solutions",
    slug: "evaluating-prosthetic-solutions",
    excerpt:
      "A decision framework to help compare options and choose what works in real life.",
    body: [
      "Begin with your daily demands: time-on-feet, terrain, work requirements, and comfort constraints.",
      "Prioritize maintainability and safety—then optimize for performance.",
      "Make decisions based on repeatable outcomes, not one-off best days."
    ],
    publishedAt: "2026-01-10",
    category: "Prosthetics"
  }
];
