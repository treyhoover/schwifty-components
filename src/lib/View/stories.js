import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import View from "./index";

storiesOf('View', module)
  .add('default', () =>
    <View pa4 onClick={action('clicked')}>
      I'm in a View
    </View>
  );
