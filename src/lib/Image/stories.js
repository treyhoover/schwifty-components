import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from "./index";

storiesOf('Image', module)
  .add('default', () => <Image src="http://via.placeholder.com/350x150" />);
