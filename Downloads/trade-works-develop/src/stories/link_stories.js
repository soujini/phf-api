import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomLink from '../components/navigations/custom_links';
import { text, select } from '@storybook/addon-knobs';
import { px_to_rem_sizes, color } from '../utilities/themes';
import CustomInputLabel from '../components/data_display/custom_label';

const underline_options = {
  Hover: 'hover',
  Always: 'always',
  None: 'none',
};

const underline_default_value = 'hover';

storiesOf('Navigations/Links', module)
  .add('with knobs', () => (
    <>
      <CustomLink underline={select('Underline', underline_options, underline_default_value)}>
        {text('Label', 'Sign In')}
      </CustomLink>
    </>
  ))
  .add('link', () => (
    <>
      <CustomLink
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
        underline="hover"
        color="primary"
        label_color={color.primary_palette.black}
      >
        <label>Sign In</label>
      </CustomLink>
    </>
  ));
