import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import CustomButton from '../components/navigations/custom_buttons';
import Ribbon from '../components/data_display/icons/Ribbon';
import Add_Icon_Outlined from '../components/data_display/icons/AddCircle';
import Minus_Icon_Outlined from '../components/data_display/icons/MinusCircle';
import Chevron_Down_Icon from '../components/data_display/icons/Arrow_Chevron_Down';

const color_options = {
  Primary: 'primary',
  Secondary: 'secondary',
  Default: 'default',
  Inherit: 'inherit',
};
const color_default_value = 'primary';

const variant_options = {
  Contained: 'contained',
  Text: 'text',
  Outlined: 'outlined',
};
const variant_default_value = 'outlined';

const size_options = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
};
const size_default_value = 'medium';

storiesOf('Navigations/Button', module)
  .add('with knobs', () => (
    <>
      <CustomButton
        onClick={action('click')}
        variant={select('Variants', variant_options, variant_default_value)}
        color={select('Colors', color_options, color_default_value)}
        disabled={boolean('Disabled', false)}
        size={select('Size', size_options, size_default_value)}
      >
        {text('Label', 'Continue')}
      </CustomButton>
    </>
  ))
  .add('all buttons', () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton onClick={action('click')} variant="outlined" color="primary">
          Continue
        </CustomButton>
        <CustomButton onClick={action('click')} variant="text" color="inherit">
          Post
        </CustomButton>
        <CustomButton onClick={action('click')} variant="contained" color="primary">
          Edit
        </CustomButton>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="small"
          style={{ fontSize: '0.625rem' }}
        >
          Done
        </CustomButton>
        <CustomButton onClick={action('click')} variant="outlined" color="primary" style={{ fontSize: '0.75rem' }}>
          Update Skills
        </CustomButton>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="large"
          style={{ fontSize: '0.875rem' }}
        >
          Advance Search
        </CustomButton>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="small"
          style={{ fontSize: '0.625rem' }}
          endIcon={<Add_Icon_Outlined color="primary" style={{ fontSize: 'inherit' }} />}
        >
          Add
        </CustomButton>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="small"
          style={{ fontSize: '0.625rem' }}
          startIcon={<Minus_Icon_Outlined color="primary" style={{ fontSize: 'inherit' }} />}
        >
          collapse
        </CustomButton>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="large"
          custom_type="submit"
          endIcon={<Ribbon color="primary" style={{ fontSize: '40px' }} />}
        >
          Continue
        </CustomButton>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton onClick={action('click')} disabled variant="contained" color="secondary" size="large">
          Disabled Button
        </CustomButton>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <CustomButton onClick={action('click')} variant="text">
          <Add_Icon_Outlined style={{ fontSize: '20px' }} color="primary" />
        </CustomButton>
        <CustomButton onClick={action('click')} variant="text">
          <Chevron_Down_Icon style={{ fontSize: '12px' }} />
        </CustomButton>
      </div>
    </>
  ));
