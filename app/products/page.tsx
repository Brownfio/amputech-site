import Link from "next/link";
import { products } from "../../content/products";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Products
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">
        Preview offerings while product lines are finalized. Contact us to discuss
        availability and fit for your needs.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <div key={p.slug} className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{p.summary}</p>
            <div className="mt-4">
              <Link
                href={`/products/${p.slug}`}
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
