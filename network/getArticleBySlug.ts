import { gql } from '@/graphql/getContent';
import { ArticlesResponse } from '@/data-provider/types/article';
import { ARTICLES_BY_SLUG_QUERY } from '@/graphql/queries/articlesBySlug';

export const getArticleBySlug = async (slug: string) => {
  const response = await gql<ArticlesResponse>(
    ARTICLES_BY_SLUG_QUERY,
    { slug },
    { cache: 'no-store' }
  );
  return response.data.articles[0];
};
