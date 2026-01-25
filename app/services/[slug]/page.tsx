import { notFound } from "next/navigation";
import { services } from "../../../content/services";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {service.title}
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">{service.summary}</p>

      <div className="mt-10 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">What this includes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
          {service.content.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
