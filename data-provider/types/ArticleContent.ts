import { UiComponent } from '../mappers/componentDefinitions';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export type ArticleContent = UiComponent & {
  content: BlocksContent;
};
