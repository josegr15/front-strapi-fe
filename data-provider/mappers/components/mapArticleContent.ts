import { ArticleContentProps } from '@/components/ArticleContent/ArticleContent.types';
import { ArticlePage } from '@/data-provider/types/article';
import { ArticleContent } from '@/data-provider/types/ArticleContent';

type Props = {
  component: ArticleContent;
  context?: ArticlePage;
};

export const mapArticleContent = ({
  component,
  context,
}: Props): ArticleContentProps => {
  return {
    __typename: component.__typename,
    content: context?.content || [],
  };
};
