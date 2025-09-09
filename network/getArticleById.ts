import { ARTICLE_BY_ID_QUERY } from '@/graphql/queries/articleById';
import { gql } from '@/graphql/getContent';
import { ArticleResponse } from '@/data-provider/types/article';

export const getArticleById = async (id: string) => {
  const article = await gql<ArticleResponse>(ARTICLE_BY_ID_QUERY, { id });
  return article;
};
