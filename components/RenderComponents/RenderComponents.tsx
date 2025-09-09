import React from 'react';
import {
  COMPONENT_DEFINITIONS,
  UiComponent,
} from '@/data-provider/mappers/components';

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
