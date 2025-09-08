// app/page.tsx
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { getArticles } from "@/data-provider/getArticles";

export default async function Home() {
  const result = await getArticles();

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Articles</h1>
      <ul className="space-y-4">
        {result.data.articles.map((article) => (
          <li key={article.documentId} className="border rounded-lg p-4">
            <h2 className="text-xl font-medium">{article.title}</h2>
            <BlocksRenderer content={article.content} />
            <Link href={`/articles/${article.slug}`} className="text-blue-600">
              Read →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
