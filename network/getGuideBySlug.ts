import { GuideResponse } from '@/data-provider/types/guide';
import { gql } from '@/graphql/getContent';
import { GUIDE_BY_SLUG_QUERY } from '@/graphql/queries/guideBySlug';

export const getGuideBySlug = async (slug: string) => {
  const response = await gql<GuideResponse>(GUIDE_BY_SLUG_QUERY, { slug });

  return response.data.guidePages[0];
};
