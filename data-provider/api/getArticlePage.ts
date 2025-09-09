import { getArticleBySlug } from '@/network/getArticleBySlug';
import { COMPONENT_DEFINITIONS } from '../mappers/componentDefinitions';

export const getArticlePage = async (slug: string) => {
  const data = await getArticleBySlug(slug);

  const components = data.components;

  const mappedComponents = components.map(component => {
    const mapper = COMPONENT_DEFINITIONS[component.__typename].mapper;

    return mapper(component);
  });

  return {
    ...data,
    components: mappedComponents,
  };
};
