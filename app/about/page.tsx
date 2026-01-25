export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        About Amputech
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">
        Amputech is focused on improving mobility outcomes through prosthetics-centered
        support, safety-first consulting, and practical technology enablement. Our goal
        is simple: help people move with greater confidence in real-world conditions.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card title="Mission">
          Improve real-world mobility outcomes with practical, reliable support.
        </Card>
        <Card title="Vision">
          Accessible, repeatable solutions that help people move safely and confidently.
        </Card>
        <Card title="Values">
          Safety, clarity, integrity, and follow-through.
        </Card>
      </div>

      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">Company story</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          <li><span className="font-medium">Phase 1:</span> Identify gaps in practical support and outcome consistency.</li>
          <li><span className="font-medium">Phase 2:</span> Build repeatable frameworks, resources, and tooling.</li>
          <li><span className="font-medium">Phase 3:</span> Expand offerings into productized solutions and partnerships.</li>
        </ul>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="font-semibold text-gray-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-gray-600">{children}</p>
    </div>
  );
}
