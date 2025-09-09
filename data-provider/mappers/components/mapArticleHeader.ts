import { ArticleHeaderProps } from '@/components/ArticleHeader/ArticleHeader.types';
import { ArticleHeader } from '@/data-provider/types/ArticleHeader';

type Props = {
  component: ArticleHeader;
};

export const mapArticleHeader = ({ component }: Props): ArticleHeaderProps => {
  return {
    __typename: component.__typename,
    title: component.Title,
  };
};
