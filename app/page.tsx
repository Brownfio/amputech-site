import Link from "next/link";

const services = [
  {
    title: "Product Development",
    description:
      "From concept to prototype to production—engineering support focused on reliability, manufacturability, and performance.",
  },
  {
    title: "Systems Integration",
    description:
      "Integrate hardware, software, and workflows into a cohesive system with clear documentation and maintainable architecture.",
  },
  {
    title: "Technical Consulting",
    description:
      "Practical guidance on design tradeoffs, validation, compliance readiness, and scaling from pilot to full deployment.",
  },
];

const featuredProducts = [
  {
    name: "Adaptive Comfort Liner",
    description:
      "A modular prosthetic liner engineered for day-long comfort, adjustable fit, and easy maintenance. Ideal for active users.",
    href: "/products/adaptive-comfort-liner",
  },
  {
    name: "Smart Socket Adapter",
    description:
      "A compact adapter that enables sensor integration for socket alignment monitoring and simple connectivity to clinical tools.",
    href: "/products/smart-socket-adapter",
  },
];

const testimonials = [
  {
    quote:
      "Amputech helped us reduce fitting time and improved patient comfort with practical, evidence-driven changes.",
    name: "Dr. Sarah Lee",
    company: "Beacon Prosthetics",
  },
  {
    quote:
      "Their technology-first approach opened remote care options and made follow-up much simpler for our team.",
    name: "Mark Johnson",
    company: "MobilityFirst",
  },
];

const differentiators = [
  {
    title: "Execution-First",
    description:
      "We focus on shippable outcomes and operational readiness—not just slide decks.",
  },
  {
    title: "Engineering Discipline",
    description:
      "Versioned decisions, documented tradeoffs, and pragmatic design choices you can defend.",
  },
  {
    title: "Performance & Reliability",
    description:
      "Speed, stability, and maintainability are treated as requirements, not afterthoughts.",
  },
  {
    title: "Clarity for Non-Technical Teams",
    description:
      "We translate complexity into decisions, timelines, and deliverables that stakeholders understand.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-600">
              Advanced Technology Solutions
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Build reliable products and systems that perform in the real world.
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Amputech delivers engineering-led services and product solutions
              with a focus on clarity, speed, and operational readiness.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800"
              >
                Request Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Stat label="Delivery" value="Fast iterations" />
            <Stat label="Quality" value="Production-ready output" />
            <Stat label="Approach" value="Documented decisions" />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Services
              </h2>
              <p className="mt-2 text-gray-600">
                Engineering support that moves from problem to shipped solution.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-medium text-blue-600 hover:text-blue-700 md:inline"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 p-6 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {s.description}
                </p>
                <div className="mt-5">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/services"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Why Amputech
          </h2>
          <p className="mt-2 text-gray-600">
            Practical engineering, strong communication, and outcomes you can
            stand behind.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Featured Products
              </h2>
              <p className="mt-2 text-gray-600">
                Productized offerings designed to scale and stay maintainable.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-blue-600 hover:text-blue-700 md:inline"
            >
              View products →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProducts.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-gray-200 p-6 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {p.description}
                </p>
                <div className="mt-5">
                  <Link
                    href={p.href}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/products"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View products →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            What partners say
          </h2>
          <p className="mt-2 text-gray-600">
            Trusted feedback from partners and customers.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <blockquote className="text-sm leading-6 text-gray-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-gray-900">
                  {t.name} <span className="text-gray-500">— {t.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Ready to discuss your project?
                </h2>
                <p className="mt-2 text-gray-600">
                  Share your goals, constraints, and timeline. We’ll respond with
                  clear next steps.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Contact Amputech
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 text-base font-semibold text-gray-900">{value}</div>
    </div>
  );
}
