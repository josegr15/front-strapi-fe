import { getArticleById } from '@/data-provider/api/getArticleById';
import React from 'react';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ArticlePage = async ({ params }: Props) => {
  const { id } = await params;

  const article = await getArticleById(id);
  console.log('article', article);

  return <div>page</div>;
};

export default ArticlePage;
