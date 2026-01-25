import { faqs } from "../../content/faqs";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">FAQ</h1>
      <p className="mt-4 text-gray-600 leading-7">
        Common questions about Amputech’s prosthetics-focused support.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-gray-200 p-5"
          >
            <summary className="cursor-pointer list-none font-semibold text-gray-900">
              {f.q}
              <span className="float-right text-gray-400 group-open:rotate-180 transition">
                ▾
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
