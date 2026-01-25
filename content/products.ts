export type Product = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    title: "Prosthetic Solutions (Preview)",
    slug: "prosthetic-solutions-preview",
    summary:
      "Curated offerings designed to support stability, comfort, and confidence in prosthetic use.",
    description:
      "A focused set of prosthetic-centered solutions and resources designed to support safe, repeatable outcomes.",
    specs: [
      { label: "Category", value: "Prosthetics" },
      { label: "Availability", value: "Preview / evolving" },
      { label: "Primary outcome", value: "Confidence + function" }
    ]
  },
  {
    title: "Mobility Toolkit (Preview)",
    slug: "mobility-toolkit-preview",
    summary:
      "Guidance, checklists, and resources for individuals, families, and partner organizations.",
    description:
      "A practical toolkit for improving consistency: routines, checklists, and simple decision frameworks.",
    specs: [
      { label: "Category", value: "Mobility + Safety" },
      { label: "Availability", value: "Preview / evolving" },
      { label: "Primary outcome", value: "Safety + repeatability" }
    ]
  }
];
