import { gql } from '@/graphql/getContent';
import { ArticlesResult } from '@/data-provider/types/article';
import { ARTICLES_BY_SLUG_QUERY } from '@/graphql/queries/articlesBySlug';

export const getArticleBySlug = async (slug: string) => {
  const response = await gql<ArticlesResult>(ARTICLES_BY_SLUG_QUERY, { slug });
  return response.data.articles[0];
};
