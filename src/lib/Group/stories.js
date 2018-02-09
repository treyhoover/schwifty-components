import React from 'react';
import { storiesOf } from '@storybook/react';
import Group from "./index";

storiesOf('Group', module)
  .add('default', () =>
    <Group pa4>
      I'm in a Group
    </Group>
  );
