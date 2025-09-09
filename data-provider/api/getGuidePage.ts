import { getGuideBySlug } from '@/network/getGuideBySlug';
import { COMPONENT_DEFINITIONS } from '../mappers/componentDefinitions';

export const getGuidePage = async (slug: string) => {
  const data = await getGuideBySlug(slug);

  const { components, ...guidePage } = data;

  const mappedComponents = components.map(component => {
    const mapper = COMPONENT_DEFINITIONS[component.__typename].mapper;

    return mapper({ component, context: guidePage });
  });

  return {
    ...data,
    components: mappedComponents,
  };
};
