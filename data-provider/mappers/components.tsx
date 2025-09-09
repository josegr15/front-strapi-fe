/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from 'react';
import { ArticleContent } from '@/components/ArticleContent/ArticleContent';
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader';
import { mapArticleHeader } from './components/mapArticleHeader';
import { ArticleHeader as ArticleHeaderType } from '@/data-provider/types/ArticleHeader';
import { mapArticleContent } from './components/mapArticleContent';
import { ArticleContent as ArticleContentType } from '@/data-provider/types/ArticleContent';

export const COMPONENT_TYPENAMES = [
  'ComponentComponentsUiArticleHeader',
  'ComponentComponentsUiArticleContent',
] as const;

export type ComponentTypename = (typeof COMPONENT_TYPENAMES)[number];

export type UiComponent = {
  __typename: ComponentTypename;
};

export const COMPONENT_DEFINITIONS = {
  ComponentComponentsUiArticleContent: {
    component: (props: any) => <ArticleContent {...props} />,
    mapper: (data: any) => mapArticleContent(data as ArticleContentType),
  },
  ComponentComponentsUiArticleHeader: {
    component: (data: any) => <ArticleHeader {...data} />,
    mapper: (data: any) => mapArticleHeader(data as ArticleHeaderType),
  },
} as const satisfies Record<
  ComponentTypename,
  {
    component: (data: any) => JSX.Element;
    mapper: (data: any) => UiComponent;
  }
>;
