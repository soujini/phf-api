import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import Checkbox_Icon from '../data_display/icons/Checkbox';
import Checkbox_Checked_Icon from '../data_display/icons/CheckedCheckbox';

/**
 * Checkbox component with 2 variations i.e., with label and without label
 * @param {*} props
 */
function CustomCheckbox(props) {
  function styleCheckBox(props) {
    //TODO: Please get the checked icon from props.
    return (
      <Checkbox
        {...props}
        icon={<Checkbox_Icon style={{ fontSize: '0.85rem' }} />}
        checkedIcon={<Checkbox_Checked_Icon style={{ fontSize: '1.2rem' }} />}
        style={{ width: '20px' }}
      />
    );
  }
  /**
   * Custom styling the colors
   */
  const CustomChechbox = withStyles({
    root: {},
    checked: {},
  })(styleCheckBox);
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
      <CustomFormControl control={<CustomChechbox {...props} />} {...props} />
    </>
  );
}

export default CustomCheckbox;
