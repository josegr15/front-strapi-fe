'use server';

import { gql } from '@/graphql/getContent';
import { ARTICLES_QUERY } from '@/graphql/queries/article';
import { ArticlesResult } from './types/Article';

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

  return articles;
};
