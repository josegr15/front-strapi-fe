import { ArticleContentProps } from '@/components/ArticleContent/ArticleContent.types';
import { ArticleContent } from '@/data-provider/types/ArticleContent';

export const mapArticleContent = (
  data: ArticleContent
): ArticleContentProps => {
  return {
    __typename: data.__typename,
    content: data.content,
  };
};
