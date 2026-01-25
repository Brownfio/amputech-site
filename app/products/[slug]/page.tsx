import { notFound } from "next/navigation";
import { products } from "../../../content/products";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {product.title}
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">{product.summary}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            {product.description}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Specs</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {product.specs.map((s) => (
              <div key={s.label}>
                <dt className="text-gray-500">{s.label}</dt>
                <dd className="font-medium text-gray-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
