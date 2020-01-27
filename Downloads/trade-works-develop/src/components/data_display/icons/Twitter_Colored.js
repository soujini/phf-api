import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Twitter_Color_Icon(props) {
  function styledIcon(props) {
    const classes = useStyles(props);
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.franklin_purple;
        }
      } else {
      }
      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 20 20">
          <g fill="none" fillRule="evenodd">
            <path
              d="M15.556 0A4.449 4.449 0 0120 4.444v11.112A4.449 4.449 0 0115.556 20H4.444A4.449 4.449 0 010 15.556V4.444A4.449 4.449 0 014.444 0h11.112"
              fill="#2DAAE1"
            />
            <path
              d="M16.85 4.22c-.574.349-1.212.6-1.89.737A2.949 2.949 0 0012.79 4c-1.643 0-2.974 1.356-2.974 3.03 0 .238.026.467.075.69-2.47-.126-4.664-1.333-6.13-3.165a3.05 3.05 0 00-.404 1.522c0 1.051.527 1.98 1.325 2.521a2.922 2.922 0 01-1.348-.378v.038c0 1.467 1.025 2.693 2.386 2.97a2.915 2.915 0 01-1.343.053c.379 1.203 1.476 2.08 2.779 2.103a5.9 5.9 0 01-4.406 1.255A8.317 8.317 0 007.31 16c5.472 0 8.464-4.616 8.464-8.62 0-.13-.003-.261-.008-.39a6.102 6.102 0 001.484-1.57 5.833 5.833 0 01-1.708.477 3.027 3.027 0 001.308-1.676"
              fill="#FFF"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Twitter_Outline_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Twitter_Outline_Icon {...props} />
    </>
  );
}

export default Twitter_Color_Icon;
