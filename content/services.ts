export type Service = {
  title: string;
  slug: string;
  summary: string;
  content: string[];
};

export const services: Service[] = [
  {
    title: "Prosthetic Product Support",
    slug: "prosthetic-product-support",
    summary:
      "Support across evaluation, setup, alignment considerations, and ongoing optimization—focused on function and safety.",
    content: [
      "Review goals, lifestyle needs, and constraints (terrain, time-on-feet, work demands).",
      "Identify practical options and decision criteria (durability, stability, maintenance).",
      "Create a clear plan for next steps and follow-through."
    ]
  },
  {
    title: "Mobility & Safety Consulting",
    slug: "mobility-and-safety",
    summary:
      "Safety-first mobility guidance with practical recommendations that work in daily life.",
    content: [
      "Risk identification: slips/trips, fatigue patterns, and environmental hazards.",
      "Stability-focused recommendations and habits that are easy to maintain.",
      "Simple checklists for repeatable outcomes."
    ]
  },
  {
    title: "Technology Enablement",
    slug: "technology-enablement",
    summary:
      "Lightweight systems and workflows to support individuals, caregivers, and organizations.",
    content: [
      "Streamline communication and follow-ups with clear handoffs.",
      "Build simple tools to reduce friction and improve consistency.",
      "Practical documentation that non-technical stakeholders can use."
    ]
  }
];
