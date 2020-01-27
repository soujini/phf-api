import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
/**
 * Input Label Component to display the labels with 2 variations i.e.., one with input and other is a normal label
 * @param {*} props
 */
function CustomInputLabel(props) {
  /**
   * Function created to render when "is_input_label" is passed true in props
   */
  const render_InputLabel = () => {
    return <InputLabel {...props}>{props.label_name}</InputLabel>;
  };

  /**
   * Function created to render when "is_input_label" is passed flase in props
   */
  const render_htmlLabel = () => {
    return <label>{props.label_name}</label>;
  };

  return props && props.is_input_label ? render_InputLabel() : render_htmlLabel();
}

export default CustomInputLabel;
