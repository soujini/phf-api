/**
 * Custom Button component derived from Material UI button.
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { color, font_sizes } from '../../utilities/themes';

/**
 * Button Component to used accross applications for navigations
 * @param {*} props
 */
function CustomButton(props) {
  function styleButton(props) {
    return <Button {...props}></Button>;
  }
  /**
   * Custom styling the colors
   */
  const CustomButton = withStyles({
    root: {
      '&:hover': {
        backgroundColor:
          props && typeof props.children !== 'object' ? color.primary_palette.highlight_purple : 'transparent',
        color: `${color.primary_palette.white}`,
      },
      '& .MuiButton-endIcon ': {
        position: props && props.custom_type === 'submit' ? 'absolute' : 'inherit',
        top: '1.5625rem', // hardcode values for special case
        right: '-0.9375rem', // hardcode values for special case
      },
      '& .MuiButton-startIcon ': {
        position: props && props.custom_type === 'submit' ? 'absolute' : 'inherit',
        top: '1.5625rem', // hardcode values for special case
        left: '-0.9375rem', // hardcode values for special case
      },
      '& .MuiButton-iconSizeSmall > *:first-child': {
        fontSize: font_sizes.font_10, //update
      },
      '& .MuiButton-iconSizeMedium > *:first-child': {
        fontSize: font_sizes.font_12,
      },
      '& .MuiButton-iconSizeLarge > *:first-child': {
        fontSize: font_sizes.font_14,
      },
    },
  })(styleButton);

  return (
    <>
      <CustomButton {...props} />
    </>
  );
}

export default CustomButton;
