import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CustomToggleButton from '../components/inputs/custom_toggle_button';

storiesOf('Inputs/Toggle Button', module)
  .add('Toggle Button', () => (
    <>
      <CustomToggleButton 
      left_text = 'Edit Mode'
      right_text = 'Public View'
      />
    </>
  ))