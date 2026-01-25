import Link from "next/link";
import { posts } from "../../content/posts";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Insights
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600 leading-7">
        Practical guidance and frameworks related to prosthetics, mobility, and safety.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border border-gray-200 p-6">
            <div className="text-xs font-medium text-gray-500">
              {p.category} • {new Date(p.publishedAt).toLocaleDateString()}
            </div>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{p.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${p.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Read →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
