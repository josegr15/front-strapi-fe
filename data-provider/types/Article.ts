import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ComponentTypename } from '../mappers/components';

export type ArticleNode = {
  documentId: string;
  title: string;
  slug: string;
  content: BlocksContent;
  createdAt: string;
  Image: {
    url: string;
    alternativeText: string;
  };
  __typename: string;
  components: {
    __typename: ComponentTypename;
  }[];
};

export type ArticlesResult = {
  data: {
    articles: ArticleNode[];
  };
};

export type ArticleResponse = {
  data: {
    article: ArticleNode;
  };
};
