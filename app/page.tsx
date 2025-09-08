// app/page.tsx
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { getArticles } from '@/data-provider/getArticles';

export default async function Home() {
  const result = await getArticles();

  console.log('result', result);

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Articles</h1>
      <ul className="space-y-4">
        {result.data.articles.map(article => (
          <li key={article.documentId} className="border rounded-lg p-4">
            <h2 className="text-xl font-medium">{article.title}</h2>
            <Image
              src={article.Image.url}
              alt={article.Image.alternativeText || article.title}
              width={100}
              height={100}
            />
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
