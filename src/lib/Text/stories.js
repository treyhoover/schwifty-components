import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from "./index";

storiesOf('Text', module)
  .add('default', () => <Text>Hello!</Text>)
  .add('resizable', () => <Text as="h1" f1>Whoa!</Text>)
  .add('with fonts', () => <Text f2 sans-serif>Much better</Text>);