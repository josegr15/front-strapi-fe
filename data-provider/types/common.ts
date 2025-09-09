export const COMPONENT_TYPENAMES = [
  'ComponentComponentsUiArticleHeader',
  'ComponentComponentsUiArticleContent',
] as const;

export type ComponentTypename = (typeof COMPONENT_TYPENAMES)[number];

export type UiComponent = {
  __typename: ComponentTypename;
};
