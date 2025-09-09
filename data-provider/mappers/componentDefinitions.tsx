/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from 'react';
import { ArticleContent } from '@/components/ArticleContent/ArticleContent';
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader';
import { mapArticleHeader } from './components/mapArticleHeader';
import { ComponentTypename, UiComponent } from '../types/common';
import { mapArticleContent } from './components/mapArticleContent';

type MapperProps = {
  component: any;
  context?: any;
};

type ComponentConfig = {
  component: (data: any) => JSX.Element;
  mapper: (props: MapperProps) => UiComponent;
};

type ComponentDefinitions = Record<ComponentTypename, ComponentConfig>;

export const COMPONENT_DEFINITIONS = {
  ComponentComponentsUiArticleContent: {
    component: (props: any) => <ArticleContent {...props} />,
    mapper: props => mapArticleContent(props),
  },
  ComponentComponentsUiArticleHeader: {
    component: (data: any) => <ArticleHeader {...data} />,
    mapper: props => mapArticleHeader(props),
  },
} as const satisfies ComponentDefinitions;
