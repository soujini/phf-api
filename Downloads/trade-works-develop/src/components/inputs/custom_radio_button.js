import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { color } from '../../utilities/themes';
/**
 * Radio button component added to check the desired sinle select option
 * @param {*} props
 */
function CustomRadioButton(props) {
  /**
   * Custom styling the colors
   */
  const CustomRadio = withStyles({
    root: {
      color: props.inActiveColor ? props.inActiveColor : color.secondary_palette.grays.light_gray,
      '&$checked': {
        color: props.color ? props.color : color.primary_palette.franklin_purple,
      },
    },
    checked: {},
  })(Radio);

  /**
   * Custom styling the colors
   */
  const CustomFormControl = withStyles({
    root: {
      textTransform: props.text_transform ? props.text_transform : '',
    },
  })(FormControlLabel);

  return (
    <>
      <CustomFormControl
        control={<CustomRadio {...props} inputProps={props.input_props} />}
        label={props.label}
        labelPlacement={props.label_placement}
        {...props}
      />
    </>
  );
}

export default CustomRadioButton;
