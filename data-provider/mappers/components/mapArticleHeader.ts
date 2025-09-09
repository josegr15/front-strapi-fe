import { ArticleHeaderProps } from '@/components/ArticleHeader/ArticleHeader.types';
import { ArticleHeader } from '@/data-provider/types/ArticleHeader';

export const mapArticleHeader = (data: ArticleHeader): ArticleHeaderProps => {
  return {
    __typename: data.__typename,
    title: data.Title,
  };
};
