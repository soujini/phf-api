import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomGroupCheckbox from '../components/inputs/custom_group_checkbox';
//sample json object
const sampleJson = [
  {
    id: 28,
    Title: 'Photoshop',
  },
  {
    id: 56,
    Title: 'Illustrator',
  },
  {
    id: 89,
    Title: 'InDesign',
  },
  {
    id: 89,
    Title: 'InCopy',
  },
];

storiesOf('Inputs/Group Checkbox', module)
  .add('Label', () => (
    <>
      <CustomGroupCheckbox
        label="Computer Skills"
        // checkedIcon={<SvgSmallCheckedCheckbox />}
        options={sampleJson}
        isLabeled
      />
    </>
  ))
  .add('Non Labeled', () => (
    <CustomGroupCheckbox
      // checkedIcon={<SvgSmallCheckedCheckbox />}
      options={sampleJson}
      isLabeled={false}
    />
  ))
  .add('disabled', () => <CustomGroupCheckbox disabled label="Disabled" />);
