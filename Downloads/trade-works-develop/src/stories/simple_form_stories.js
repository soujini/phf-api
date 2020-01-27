import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomInputLabel from '../components/data_display/custom_label';
import HidePassword_Icon from '../components/data_display/icons/HidePassword';
import CustomForm from '../components/inputs/custom_form';
import CustomInputAdornment from '../components/inputs/custom_input_adornment';
import CustomTextField from '../components/inputs/custom_textfields';
import CustomLink from '../components/navigations/custom_links';
import { px_to_rem_sizes, color } from '../utilities/themes';
import CustomButton from '../components/navigations/custom_buttons';
import Ribbon from '../components/data_display/icons/Ribbon';
import Element_Required_Icon from '../components/data_display/icons/ElementRequiered';

storiesOf('Inputs/Forms', module).add('Form', () => (
  <>
    <CustomForm>
      <div style={{ marginBottom: '0.625em' }}>
        <CustomTextField
          label="First Name"
          inputProps={{
            style: {
              width: '19.5625em',
            },
          }}
          icon={<Element_Required_Icon color={color.primary_palette.franklin_purple} />}
        />
      </div>
      <div style={{ marginBottom: '0.625em' }}>
        <CustomTextField
          label="Last Name"
          inputProps={{
            style: {
              width: '19.5625em',
            },
          }}
          icon={<Element_Required_Icon color={color.primary_palette.franklin_purple} />}
        />
      </div>
      <div style={{ marginBottom: '0.625em' }}>
        <CustomTextField
          label="Email Address"
          inputProps={{
            style: {
              width: '19.5625em',
            },
          }}
          icon={<Element_Required_Icon color={color.primary_palette.franklin_purple} />}
        />
      </div>
      <div style={{ marginBottom: '0.625em' }}>
        <CustomTextField
          label="Password"
          inputProps={{
            style: {
              width: '18.1rem',
            },
          }}
          InputProps={{
            endAdornment: <CustomInputAdornment position="end" component={HidePassword_Icon} />,
          }}
          icon={<Element_Required_Icon color={color.primary_palette.franklin_purple} />}
        />
      </div>
      <div style={{ marginBottom: '0.625em', marginLeft: '1em' }}>
        <CustomTextField
          label="Phone Number"
          inputProps={{
            style: {
              width: '19.5625em',
            },
          }}
        />
      </div>
      {/* <div style={{ marginTop: '2rem' }}>
        <CustomInputLabel is_input_label={true} style={{ marginLeft: '4em' }} label_name="I'm a:" focused={true} />
        <div style={{ marginTop: '1rem', marginLeft: '4rem' }}>
          <CustomLink
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            underline="none"
            width={px_to_rem_sizes.size_1}
          >
            Company
          </CustomLink>
          <CustomLink
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            underline="always"
            color="primary"
            width={px_to_rem_sizes.size_1}
          >
            Individual
          </CustomLink>
        </div>
      </div> */}
      <div style={{ marginTop: '2rem' }}>
        <CustomButton
          onClick={action('click')}
          variant="outlined"
          color="primary"
          size="large"
          custom_type="submit"
          style={{ width: '215px' }}
          endIcon={<Ribbon color="primary" style={{ fontSize: '40px' }} />}
        >
          JOIN
        </CustomButton>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <div>
          Already have a FR account?
          <CustomLink
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            underline="always"
            color="primary"
            width={px_to_rem_sizes.size_1}
          >
            Sign In
          </CustomLink>
        </div>
      </div>
      <div style={{ marginTop: '0.2rem' }}>
        <div>
          By signing up, you agree to FR’s
          <CustomLink
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            underline="always"
            color="default"
            width={px_to_rem_sizes.size_1}
          >
            Terms of Service
          </CustomLink>
        </div>
      </div>
    </CustomForm>
  </>
));
