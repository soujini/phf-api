import React from 'react';
import { InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
/**
 * Input adornment component
 * @param {*} props
 */
function CustomInputAdornment(props) {
  /**
   * Applying the styles to the inputadornment component
   * @param {*} props
   */
  function styleInputAdornment(props) {
    return <InputAdornment {...props}>{props.children}</InputAdornment>;
  }
  /**
   * Custom styling the colors
   */
  const CustomInputAdornment = withStyles({
    root: {
      fontSize: props.fontSize ? props.fontSize : '1rem',
    },
  })(styleInputAdornment);

  return (
    <>
      <CustomInputAdornment {...props}>{props.children}</CustomInputAdornment>
    </>
  );
}

export default CustomInputAdornment;
