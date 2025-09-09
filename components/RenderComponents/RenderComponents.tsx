import { COMPONENT_DEFINITIONS } from '@/data-provider/mappers/componentDefinitions';
import { UiComponent } from '@/data-provider/types/common';
import React from 'react';

type Props = {
  components: UiComponent[];
};

export const RenderComponents = ({ components }: Props) => {
  return (
    <div>
      {components.map((props, index) => {
        const Component = COMPONENT_DEFINITIONS[props.__typename].component;
        return <Component {...props} key={props.__typename + index} />;
      })}
    </div>
  );
};
