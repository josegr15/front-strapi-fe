import { ARTICLE_BY_ID_QUERY } from '@/graphql/queries/articleById';
import { gql } from '@/graphql/getContent';
import { ArticleNode } from '../types/article';

export const getArticleById = async (id: string) => {
  const article = await gql<ArticleNode>(ARTICLE_BY_ID_QUERY, { id });
  return article;
};
