import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ComponentTypename } from './common';

export type GuideChapter = {
  chapterName: string;
  content: BlocksContent;
  title: string;
};

export type GuidePage = {
  documentId: string;
  __typename: string;
  title: string;
  slug: string;
  description: BlocksContent;
  publishedDate: string;
  summary: string;
  guide_chapters: GuideChapter[];
  components: {
    __typename: ComponentTypename;
  }[];
};

export type GuideResponse = {
  data: {
    guidePages: GuidePage[];
  };
};
