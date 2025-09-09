import { getArticlePage } from '@/data-provider/api/getArticlePage';
import { RenderComponents } from '@/components/RenderComponents/RenderComponents';
import React from 'react';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ArticlePage = async ({ params }: Props) => {
  const { id } = await params;

  const article = await getArticlePage(id);

  return (
    <div>
      <RenderComponents components={article.components} />
    </div>
  );
};

export default ArticlePage;
