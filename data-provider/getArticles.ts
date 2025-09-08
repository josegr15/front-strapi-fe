'use server';

import { gql } from '@/graphql/getContent';
import { ARTICLES_QUERY } from '@/graphql/queries/article';
import { mapImage } from './mappers/mapImage';
import { ArticlesResult } from './types/article';

type Props = {
  sort?: string;
  limit?: number;
};

export const getArticles = async ({
  sort = 'createdAt:desc',
  limit = 25,
}: Props = {}) => {
  const articles = await gql<ArticlesResult>(
    ARTICLES_QUERY,
    { sort: [sort], limit },
    { next: { revalidate: 60 } }
  );

  console.log('articles result', articles);

  return {
    ...articles,
    data: {
      ...articles.data,
      articles: articles.data.articles.map(article => ({
        ...article,
        Image: mapImage(article.Image),
      })),
    },
  };
};
