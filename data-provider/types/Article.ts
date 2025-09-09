import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ComponentTypename } from './common';

export type ArticlePage = {
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

export type ArticlesResponse = {
  data: {
    articles: ArticlePage[];
  };
};

export type ArticleResponse = {
  data: {
    article: ArticlePage;
  };
};
