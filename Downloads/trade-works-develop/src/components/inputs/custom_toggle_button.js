import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

import CustomInputLabel from '../data_display/custom_label'
import {tradework_theme, font_sizes, color} from "../../utilities/themes"

/**
 * Custom toggle Component to switch between two values
 * @param {*} props 
 */

 /**
  * custom styles written to style dots
  */

const useStyles = makeStyles(theme => ({
  uncheck_dot : {
    position: 'absolute',
    fontSize: font_sizes.font_30,
    top: '-0.25rem',
    transform: 'translateX(5.625rem)',
    color : color.primary_palette.franklin_purple,
    zIndex:1
  },
  checked_dot : {
    position: 'absolute',
    fontSize: font_sizes.font_30,
    top: '-0.25rem',
    transform: 'translateX(7.875rem)',
    color : color.primary_palette.franklin_purple,
    zIndex:1
  }

}));

function CustomToggleButton(props) {
  const Styleclasses = useStyles();
   /**
  * Styles used to create the custom toggle switch 
  * @param {*} props 
  */
  const CustomSwitch = withStyles(tradework_theme => ({
    root: {
      width: '3.4375rem',
      height: '1.25rem',
      padding: 0,
      margin: tradework_theme.spacing(1)
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(2.375rem)",
        "& + $track": {
          backgroundColor: color.secondary_palette.grays.background_gray,
          opacity: 1,
          border: `1px solid`+color.secondary_palette.grays.shadow_gray
        },
        dotAlign : {
          
        }
      },
      "&$focusVisible $thumb": {
        color: color.secondary_palette.grays.background_gray,
        border: `6px solid`+color.primary_palette.white
      }
    },
    thumb: {
      width: '0.875rem',
      height: '0.9375rem',
      color : color.primary_palette.franklin_purple
    },
    track: {
      height : '78%',
      borderRadius: 55 / 2,
      border: `1px solid`+color.secondary_palette.grays.shadow_gray,
      backgroundColor: color.secondary_palette.grays.background_gray,
      opacity: 1,
    },
    checked: {},
    focusVisible: {}
  }))(({ classes, ...props }) => {
    return (

      /**
       * The styles were wrapped up in a switch tag and returned
       */
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
      />
    );
  });

 /**
  * The entire component was wrapped up in a grid to align in a single line
  */
 
  return (
    <>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item><CustomInputLabel label_name = {props.left_text}></CustomInputLabel></Grid>
          <Grid item className={Styleclasses.uncheck_dot}>.</Grid>
          <Grid item>
            <CustomSwitch
              {...props}
            />
          </Grid>
          <Grid item className={Styleclasses.checked_dot}>.</Grid>
          <Grid item><CustomInputLabel label_name = {props.right_text}></CustomInputLabel></Grid>
        </Grid>
    </>
  );
}

export default CustomToggleButton;


