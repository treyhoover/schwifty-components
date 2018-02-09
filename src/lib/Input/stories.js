import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from "./index";

storiesOf('View', module)
  .add('default', () =>
    <Input onClick={action('clicked')} />
  );
