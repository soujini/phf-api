import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { makeStyles } from '@material-ui/core/styles';

import { color, font_sizes } from '../utilities/themes';

import CustomInputAdornment from '../components/inputs/custom_input_adornment';
import CustomPlainInputField from '../components/inputs/custom_plain_input_field';
import CustomTextField from '../components/inputs/custom_textfields';
import Element_Required_Icon from '../components/data_display/icons/ElementRequiered';
import HidePassword_Icon from '../components/data_display/icons/HidePassword';

storiesOf('Inputs/Text Fields', module)
  .add('with knobs', () => (
    <>
      <CustomTextField label={text('Label', 'Sign In')} />
    </>
  ))
  .add('all', classes => (
    <>
      <div style={{ marginTop: '20px', marginBottom: '0.625em', marginLeft: '20px' }}>
        <h4 style={{ marginBottom: '2px' }}>Variation of TextFields acrross Product</h4>
        <div style={{ marginBottom: '0.625em', marginLeft: '20px' }}>
          <CustomTextField label="Name of inventor" />
        </div>
        <div style={{ marginBottom: '0.625em' }}>
          <CustomPlainInputField success={true} labelPlacement="top" label="Optional Subtitle" />
        </div>
        <div style={{ marginBottom: '0.625em' }}>
          <CustomPlainInputField
            success={true}
            label={
              <>
                Office Location
                <Element_Required_Icon style={{ fontSize: '10px' }} color="inherit"></Element_Required_Icon>
              </>
            }
            labelPlacement="top"
          />
        </div>
      </div>

      <div style={{ marginTop: '20px', marginBottom: '0.625em', marginLeft: '20px' }}>
        <h4 style={{ marginBottom: '2px' }}>Text Fields with Different Sizes</h4>
        <div style={{ marginBottom: '0.625em', marginLeft: '20px' }}>
          <CustomTextField
            label="Service Summary"
            disabled
            inputProps={{
              style: {
                width: '10rem',
                height: '2rem',
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '0.625em', marginLeft: '20px' }}>
          <CustomTextField
            label="Short Description of Entity"
            error
            inputProps={{
              style: {
                width: '15rem',
                height: '2rem',
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '0.625em' }}>
          <CustomPlainInputField labelPlacement="top" label="Institution" success={false} />
        </div>
      </div>

      <div style={{ marginTop: '20px', marginBottom: '0.625em', marginLeft: '20px' }}>
        <h4 style={{ marginBottom: '2px' }}>Custom TextFields acrross Product</h4>
        <div style={{ marginBottom: '0.625em' }}>
          <CustomTextField
            label="Email"
            inputProps={{
              style: {
                width: '18rem',
              },
            }}
            color={color.primary_palette.franklin_purple}
            icon={<Element_Required_Icon color="primary" />}
          />
        </div>
        <div style={{ marginBottom: '0.625em' }}>
          <CustomTextField
            label="Password"
            InputProps={{
              style: {
                width: '18rem',
              },
              endAdornment: (
                <CustomInputAdornment position="end" color="primary">
                  <HidePassword_Icon color="primary" />
                </CustomInputAdornment>
              ),
            }}
            color={color.primary_palette.franklin_purple}
            icon={<Element_Required_Icon color="primary" />}
          />
        </div>
      </div>
    </>
  ));
