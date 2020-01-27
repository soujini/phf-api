import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomRadioButton from '../components/inputs/custom_radio_button';
import { text, boolean, select } from '@storybook/addon-knobs';

const placement_options = {
  Bottom: 'bottom',
  End: 'end',
  Start: 'start',
  Top: 'top',
};
const placement_default_value = 'end';

const textTransform_options = {
  Uppercase: 'uppercase',
  Capitalize: 'capitalize',
  Lowercase: 'lowercase',
};
const textTransform_default_value = 'capitalize';

storiesOf('Inputs/Radio Button', module)
  .add('with knobs', () => (
    <>
      <CustomRadioButton
        disabled={boolean('Disabled', false)}
        label={text('Label', 'Bullet Points')}
        label_placement={select('Placement', placement_options, placement_default_value)}
        text_transform={select('Text Transform', textTransform_options, textTransform_default_value)}
      ></CustomRadioButton>
    </>
  ))
  .add('all', () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <CustomRadioButton input_props={{ 'aria-label': 'basic' }} label="Basic" label_placement="top" />
        <CustomRadioButton
          input_props={{ 'aria-label': 'professional' }}
          label="Professional"
          label_placement="bottom"
        />
        <CustomRadioButton input_props={{ 'aria-label': 'converstional' }} label="Conversional" label_placement="top" />
        <CustomRadioButton input_props={{ 'aria-label': 'fluent' }} label="Fluent" label_placement="bottom" />
        <CustomRadioButton input_props={{ 'aria-label': 'native' }} label="native" label_placement="top" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomRadioButton
          input_props={{ 'aria-label': 'yes' }}
          label="Yes"
          label_placement="start"
          text_transform="uppercase"
        />
        <CustomRadioButton
          input_props={{ 'aria-label': 'no' }}
          label="no"
          label_placement="start"
          text_transform="uppercase"
        />
      </div>
    </>
  ));
