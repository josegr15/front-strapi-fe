import { BlocksContent } from '@strapi/blocks-react-renderer';
import { UiComponent } from '@/data-provider/mappers/componentDefinitions';

export type ArticleContentProps = UiComponent & {
  content: BlocksContent;
};
