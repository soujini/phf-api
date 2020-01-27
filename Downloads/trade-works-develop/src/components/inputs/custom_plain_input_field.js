import React from 'react';
import CustomInputLabel from '../data_display/custom_label';
import { Input } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { color, font_sizes } from '../../utilities/themes';
import { withStyles } from '@material-ui/core/styles';
/**
 * TextField component normal input without deriving it from material-ui
 * @param {*} props
 */
function CustomPlainInputField(props) {
  /**
   * Applying the styles to the input component
   * @param {*} props
   */
  function styleInput(props) {
    return <Input {...props} />;
  }
  /**
   * Style customization for inputs
   */
  const CustomPlainInputField = withStyles({
    root: {
      border: props.error ? `1px solid ${color.primary_palette.christmas_red}` : '',
      border: props.success ? `1px solid ${color.wizard_box_colors.pine_green}` : '',
      height: '1.5625em',
      width: props.width ? props.width : '25.5625em',
      padding: props.padding ? props.padding : '0 0.5em',
      fontSize: props.fontSize ? props.fontSize : font_sizes.font_14,
    },
  })(styleInput);
  /**
   * Style customization for formcontrol label
   */
  const CustomFormControl = withStyles({
    root: {
      textTransform: props.text_transform ? props.text_transform : '',
      alignItems: 'flex-start',
      color: props.error ? color.primary_palette.christmas_red : '',
    },
  })(FormControlLabel);

  return (
    <>
      <CustomFormControl
        inputProps={{ style: { fontSize: font_sizes.font_18 } }}
        labelPlacement={props.labelPlacement ? props.labelPlacement : 'top'}
        label={props.label ? props.label : ''}
        control={<CustomPlainInputField {...props} />}
        {...props}
      />
    </>
  );
}

export default CustomPlainInputField;
