import { BlocksContent } from '@strapi/blocks-react-renderer';
import { UiComponent } from '@/data-provider/mappers/components';

export type ArticleContentProps = UiComponent & {
  content: BlocksContent;
};
