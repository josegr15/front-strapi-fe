import { getArticleById } from '@/network/getArticleById';
import { COMPONENT_DEFINITIONS } from '../mappers/components';

export const getArticlePage = async (id: string) => {
  const { data } = await getArticleById(id);

  const components = data.article.components;

  const mappedComponents = components.map(component => {
    const mapper = COMPONENT_DEFINITIONS[component.__typename].mapper;

    return mapper(component);
  });

  return {
    ...data,
    components: mappedComponents,
  };
};
