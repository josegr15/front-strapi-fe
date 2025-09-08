import { JSX } from 'react';

export const COMPONENT_TYPENAMES = [
  'ComponentComponentsUiArticleHeader',
  'ComponentComponentsUiArticleContent',
] as const;

export type ComponentTypename = (typeof COMPONENT_TYPENAMES)[number];

export const COMPONENT_DEFINITIONS = {
  ComponentComponentsUiArticleContent: {
    component: (data: any) => <div>Hi</div>, // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
    mapper: (data: any) => data, // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
  },
  ComponentComponentsUiArticleHeader: {
    component: (data: any) => <div>Hi</div>, // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
    mapper: (data: any) => data, // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
  },
} as const satisfies Record<
  ComponentTypename,
  {
    component: (data: any) => JSX.Element; // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
    mapper: (data: any) => any; // eslint-disable-line @typescript-eslint/no-explicit-any -- TODO: Fix types
  }
>;

type UiComponent = {
  __typename: ComponentTypename;
};
