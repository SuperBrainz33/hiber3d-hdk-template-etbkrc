import { HNode, render, Animation } from '@hiber3d/hdk-react';
import { Avatar, Ground } from '@hiber3d/hdk-react-components';

const World = () => (
  <HNode y={-1}>
    <Ground />
    <Animation
      animation={{
        z: [0, 10],
        duration: 5,
        easing: 'LINEAR',
        loop: 'RESTART',
      }}
    >
      <Avatar animation="an_default_walk" />
    </Animation>
  </HNode>
);

render(<World />, { environment: 'sunrise_01' });
