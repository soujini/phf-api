import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import { text, boolean, select } from '@storybook/addon-knobs';

import Element_Required_Icon from '../components/data_display/icons/ElementRequiered';
import Add_Icon from '../components/data_display/icons/AddCircle';
import Add_Icon_Filled from '../components/data_display/icons/AddCircle_Filled';
import Add_Icon_Outlined from '../components/data_display/icons/Add';
import Minus_Icon_Outlined from '../components/data_display/icons/MinusCircle';
import ArrowRight_Icon from '../components/data_display/icons/ArrowRight';
import ArrowDown_Icon from '../components/data_display/icons/ArrowDown';
import Chevron_Down_Icon from '../components/data_display/icons/Arrow_Chevron_Down';
import Checkbox_Icon from '../components/data_display/icons/Checkbox';
import Checkbox_Checked_Icon from '../components/data_display/icons/CheckedCheckbox';
import Check_Icon from '../components/data_display/icons/Check';
import Close_Icon from '../components/data_display/icons/Close';
import Close_Style_Icon from '../components/data_display/icons/Close_Skecthed';
import ChequeredFlag_Icon from '../components/data_display/icons/ChequeredFlag';
import Flag_Icon from '../components/data_display/icons/Flag';
import Coin_Icon from '../components/data_display/icons/Coin';
import CompassRose_Icon from '../components/data_display/icons/CompassRose';
import Connections_Icon from '../components/data_display/icons/Connections';
import Edit_Circle_Icon from '../components/data_display/icons/Edit';
import ElevatorPitch_Icon from '../components/data_display/icons/ElevatorPitch';
import FaceBook_Outline_Icon from '../components/data_display/icons/Facebook_Outline';
import Flipbook_Icon from '../components/data_display/icons/Flipbook';
import HidePassword_Icon from '../components/data_display/icons/HidePassword';
import Twitter_Outline_Icon from '../components/data_display/icons/Twitter_Outline';
import Twitter_Color_Icon from '../components/data_display/icons/Twitter_Colored';
import Linkedin_Outline_Icon from '../components/data_display/icons/Linkedin_Outline';
import Instagram_Outline_Icon from '../components/data_display/icons/Instagram_Outline';
import Key_Icon from '../components/data_display/icons/Key';
import Ribbon_Icon from '../components/data_display/icons/Ribbon';
import ShowPassword_Icon from '../components/data_display/icons/ShowPassword';

const size_options = {
  x_small: '0.75rem',
  small: '0.875rem',
  medium: '1.25rem',
  default: '1.5rem',
  large: '1.875em',
  x_large: '3.25rem',
};
const size_default_value = '1.5rem';

const color_options = {
  franklin_purple: '#410166',
  highlight_purple: '#801FB8',
  christmas_red: '#C01F2A',
  pine_green: '#426618',
  fafa_gray: '#FAFAFA',
  light_gray: '#9B9B9B',
};
const color_default_value = '#9B9B9B';

const variant_options = {
  outline: 'outlined',
  filled: 'filled',
};
const variant_default_value = 'outlined';

storiesOf('Data Display/Icons', module)
  .add('with knobs', () => (
    <>
      <ArrowRight_Icon
        style={{ fontSize: select('Size', size_options, size_default_value) }}
        color={select('Color', color_options, color_default_value)}
        variant={select('Variant', variant_options, variant_default_value)}
      ></ArrowRight_Icon>
    </>
  ))
  .add('all', () => (
    <>
      <div>
        <h4> General Icons</h4>
        <Grid container>
          <Grid item xs={1}>
            <Add_Icon />
          </Grid>
          <Grid item xs={1}>
            <Add_Icon_Filled />
          </Grid>
          <Grid item xs={1}>
            <Add_Icon_Outlined />
          </Grid>
          <Grid item xs={1}>
            <Minus_Icon_Outlined />
          </Grid>
          <Grid item xs={1}>
            <ArrowRight_Icon variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <ArrowDown_Icon variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <Chevron_Down_Icon />
          </Grid>
          <Grid item xs={1}>
            <Checkbox_Icon />
          </Grid>

          <Grid item xs={1}>
            <Checkbox_Checked_Icon />
          </Grid>
          <Grid item xs={1}>
            <Check_Icon />
          </Grid>
          <Grid item xs={1}>
            <Close_Icon />
          </Grid>
          <Grid item xs={1}>
            <Close_Style_Icon />
          </Grid>
          <Grid item xs={1}>
            <ChequeredFlag_Icon />
          </Grid>

          <Grid item xs={1}>
            <Element_Required_Icon />
          </Grid>
          <Grid item xs={1}>
            <Coin_Icon />
          </Grid>
          <Grid item xs={1}>
            <CompassRose_Icon />
          </Grid>
          <Grid item xs={1}>
            <Connections_Icon />
          </Grid>

          <Grid item xs={1}>
            <Ribbon_Icon />
          </Grid>
          <Grid item xs={1}>
            <HidePassword_Icon />
          </Grid>
          <Grid item xs={1}>
            <ShowPassword_Icon />
          </Grid>
          <Grid item xs={1}>
            <Key_Icon />
          </Grid>
          <Grid item xs={1}>
            <Flipbook_Icon />
          </Grid>
        </Grid>
      </div>

      {/* <Element_Required_Icon fontSize="large" color="primary" />
      <Element_Required_Icon style={{ fontSize: '40px' }} /> */}
      <div>
        <h4> External App Icons</h4>
        <Grid container>
          <Grid item xs={1}>
            <ElevatorPitch_Icon />
          </Grid>
          <Grid item xs={1}>
            <FaceBook_Outline_Icon />
          </Grid>
          <Grid item xs={1}>
            <Instagram_Outline_Icon />
          </Grid>
          <Grid item xs={1}>
            <Linkedin_Outline_Icon />
          </Grid>
          <Grid item xs={1}>
            <Twitter_Outline_Icon />
          </Grid>
        </Grid>
      </div>
      <div>
        <h4> Colored Icons</h4>
        <Grid container>
          <Grid item xs={1}>
            <Edit_Circle_Icon />
          </Grid>
          <Grid item xs={1}>
            <Flag_Icon />
          </Grid>
          <Grid item xs={1}>
            <Twitter_Color_Icon />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </>
  ));
