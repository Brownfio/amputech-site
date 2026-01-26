import Link from "next/link";

export default function AdaptiveComfortLinerPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Adaptive Comfort Liner</h1>
      <p className="mt-4 text-gray-600 leading-7">
        A modular prosthetic liner engineered for day-long comfort, adjustable fit, and easy maintenance. Ideal for active users and clinical workflows.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Key benefits</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li>Customizable cushioning for improved comfort</li>
            <li>Durable, moisture-wicking materials for everyday use</li>
            <li>Easy to clean and maintain between fittings</li>
            <li>Designed for compatibility with common socket systems</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Specifications</h2>
          <dl className="mt-3 text-sm text-gray-600 space-y-2">
            <div>
              <dt className="font-medium">Sizes</dt>
              <dd>Multiple sizes and custom trims available</dd>
            </div>
            <div>
              <dt className="font-medium">Materials</dt>
              <dd>Medical-grade foam, breathable textile liner</dd>
            </div>
            <div>
              <dt className="font-medium">Use cases</dt>
              <dd>Daily wear, sports, and rehabilitation settings</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-600">
          For pricing, customization, and clinical integration, get in touch and we’ll discuss fitment and timelines.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Contact Us
          </Link>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 px-5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}