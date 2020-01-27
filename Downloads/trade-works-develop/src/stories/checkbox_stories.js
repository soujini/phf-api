import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomCheckbox from '../components/inputs/custom_checkbox';
// import SvgSmallCheckedCheckbox from '../Icons/SmallCheckedCheckbox';
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

storiesOf('Inputs/Checkbox', module)
  .add('with knobs', () => (
    <>
      <CustomCheckbox
        disabled={boolean('Disabled', false)}
        // checkedIcon={<SvgSmallCheckedCheckbox />}
        label={text('Label', 'Current Position ?')}
        labelPlacement={select('Placement', placement_options, placement_default_value)}
        text_transform={select('Text Transform', textTransform_options, textTransform_default_value)}
      ></CustomCheckbox>
    </>
  ))
  .add('all', () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <CustomCheckbox
          label="Make this my Profile Headline"
          // checkedIcon={<SvgSmallCheckedCheckbox />}
          text_transform="none"
        />
        <CustomCheckbox disabled label="Disabled Checkbox" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomCheckbox
        // checkedIcon={<SvgSmallCheckedCheckbox />}
        />
      </div>
    </>
  ));

//TODO : The jerk/disturbance for the checkbox when checked needs to be fixed
