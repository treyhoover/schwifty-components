import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from "./index";

storiesOf('Card', module)
  .add('default', () =>
    <Card pa4 onClick={action('clicked')}>
      I'm in a Card
    </Card>
  );
