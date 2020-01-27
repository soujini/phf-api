import React from 'react';
import { TextField, FormControlLabel, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
/**
 * TextField component with 3 variations i.e., Standard, Outlined, Filled and the props should be passed from the conatiner/wrapper component
 * @param {*} props
 */
function CustomTextField(props) {
  return (
    <>
      {props.icon ? (
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>{props.icon}</Grid>
          <Grid item>
            <TextField {...props} />
          </Grid>
        </Grid>
      ) : (
        <TextField {...props} />
      )}
    </>
  );
}

export default CustomTextField;
