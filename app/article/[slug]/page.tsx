import { getArticlePage } from '@/data-provider/api/getArticlePage';
import { RenderComponents } from '@/components/RenderComponents/RenderComponents';
import React from 'react';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ArticlePage = async ({ params }: Props) => {
  const { slug } = await params;

  const article = await getArticlePage(slug);

  return (
    <div>
      <RenderComponents components={article.components} />
    </div>
  );
};

export default ArticlePage;
