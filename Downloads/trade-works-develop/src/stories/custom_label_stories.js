import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomInputLabel from '../components/data_display/custom_label';

storiesOf('Data Display/Label', module).add('Label with colors', () => (
  <>
    <CustomInputLabel is_input_label={true} label_name="Label with primary color applied" focused={true} />
    <CustomInputLabel is_input_label={true} label_name="Label if there is error" error={true} />
    <CustomInputLabel is_input_label={true} label_name="Default label across application" />
  </>
));

//TODO : The styling for label needs to be done
