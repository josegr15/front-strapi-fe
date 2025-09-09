import { UiComponent } from '../mappers/components';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export type ArticleContent = UiComponent & {
  content: BlocksContent;
};
