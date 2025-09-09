import { GuideDetailsProps } from '@/components/GuideDetails/GuideDetails.types';
import { GuideDetail } from '@/data-provider/types/GuideDetail';
import { GuidePage } from '@/data-provider/types/guide';

type Props = {
  component: GuideDetail;
  context?: GuidePage;
};

export const mapGuideDetails = (props: Props): GuideDetailsProps => {
  return {
    __typename: props.component.__typename,
    title: props.component.Title,
  };
};
