import { getGuidePage } from '@/data-provider/api/getGuidePage';
import { RenderComponents } from '@/components/RenderComponents/RenderComponents';
import React from 'react';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const GuidePage = async ({ params }: Props) => {
  const { slug } = await params;

  const guidePage = await getGuidePage(slug);

  return (
    <div>
      Guide PAge <RenderComponents components={guidePage.components} />
    </div>
  );
};

export default GuidePage;
