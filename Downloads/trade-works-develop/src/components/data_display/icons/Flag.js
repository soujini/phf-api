import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Flag_Icon(props) {
  function styledIcon(props) {
    const classes = useStyles(props);
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 74 75">
          <g fill="none" fillRule="evenodd">
            <path
              d="M18.96 31.934c-.21-9.032-.28-17.773-.277-26.733 8.115.477 19.737-1.167 24.228 1.14 0 0-7.829-.623-8.29 2.285-.175 2.761-.034 18.694-.034 18.694s-7.45.515-10.406 1.808a107.92 107.92 0 00-5.22 2.806"
              fill="#C7DBF4"
            />
            <path
              d="M35.773 11.617c.053 5.831.32 11.71.348 17.54 15.598-1.268 15.734-11.305 36.743-9.206-19.269-13.88-29.478-3.22-37.091-8.334"
              fill="#C7DBF4"
            />
            <path
              d="M41.942 11.325c-2.346.54-5.261-.219-6.655-1.863l.097-1.082c2.104-2.034 4.662-1.686 6.76-1.482l-.202 4.427z"
              fill="#647076"
            />
            <path
              fill="#020303"
              d="M16.633 6.014l.919 67.897-3.202-.087-.92-67.802zM17.48 3.667C17.5 2.182 16.388.98 15.012 1.004c-1.378.022-2.526 1.26-2.547 2.745-.01.77.275 1.455.758 1.95l3.442-.057c.498-.485.803-1.207.815-1.975"
            />
            <ellipse fill={color.primary_palette.black} cx={15.5} cy={72.5} rx={9.5} ry={2.5} />
            <path
              d="M15.5 67c4.596 0 8.43.859 9.31 2H25v4H6v-4h.19c.88-1.141 4.714-2 9.31-2z"
              fill={color.primary_palette.black}
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Flag_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Flag_Icon {...props} />
    </>
  );
}

export default Flag_Icon;
