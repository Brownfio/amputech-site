import Link from "next/link";
import { services } from "../../content/services";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Services
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">
        Practical support designed to improve prosthetic and mobility outcomes with
        safety-first guidance and clear next steps.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{s.summary}</p>
            <div className="mt-4">
              <Link
                href={`/services/${s.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
