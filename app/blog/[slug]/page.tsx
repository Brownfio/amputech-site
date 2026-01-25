import { notFound } from "next/navigation";
import { posts } from "../../../content/posts";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="text-xs font-medium text-gray-500">
        {post.category} • {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
        {post.title}
      </h1>
      <p className="mt-4 text-gray-600 leading-7">{post.excerpt}</p>

      <div className="mt-10 space-y-5 text-sm leading-7 text-gray-700">
        {post.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
