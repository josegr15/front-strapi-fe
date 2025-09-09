/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from 'react';
import { ArticleContent } from '@/components/ArticleContent/ArticleContent';
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader';
import { mapArticleHeader } from './components/mapArticleHeader';
import { ArticleHeader as ArticleHeaderType } from '@/data-provider/types/ArticleHeader';
import { mapArticleContent } from './components/mapArticleContent';
import { ArticleContent as ArticleContentType } from '@/data-provider/types/ArticleContent';
import { ComponentTypename, UiComponent } from '../types/common';

type ComponentConfig = {
  component: (data: any) => JSX.Element;
  mapper: (data: any) => UiComponent;
};

type ComponentDefinitions = Record<ComponentTypename, ComponentConfig>;

export const COMPONENT_DEFINITIONS = {
  ComponentComponentsUiArticleContent: {
    component: (props: any) => <ArticleContent {...props} />,
    mapper: (data: any) => mapArticleContent(data as ArticleContentType),
  },
  ComponentComponentsUiArticleHeader: {
    component: (data: any) => <ArticleHeader {...data} />,
    mapper: (data: any) => mapArticleHeader(data as ArticleHeaderType),
  },
} as const satisfies ComponentDefinitions;
