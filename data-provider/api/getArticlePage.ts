import { getArticleBySlug } from '@/network/getArticleBySlug';
import { COMPONENT_DEFINITIONS } from '../mappers/componentDefinitions';

export const getArticlePage = async (slug: string) => {
  const data = await getArticleBySlug(slug);

  const { components, ...articlePage } = data;

  const mappedComponents = components.map(component => {
    const mapper = COMPONENT_DEFINITIONS[component.__typename].mapper;

    return mapper({ component, context: articlePage });
  });

  return {
    ...data,
    components: mappedComponents,
  };
};
