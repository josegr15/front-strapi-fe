import { BlocksContent } from '@strapi/blocks-react-renderer';

type ArticleNode = {
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
};

export type ArticlesResult = {
  data: {
    articles: ArticleNode[];
  };
};
