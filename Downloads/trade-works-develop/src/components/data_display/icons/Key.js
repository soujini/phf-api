import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Key_Icon(props) {
  function styledIcon(props) {
    const classes = useStyles(props);
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.variant === 'outlined') {
        if (props && props.color === 'primary') {
          if (line_type === 'stroke') {
            colorValue = color.primary_palette.franklin_purple;
          }
          if (line_type === 'fill') {
            colorValue = color.primary_palette.white;
          }
        } else {
          if (line_type === 'fill') {
            colorValue = color.primary_palette.white;
          }
        }
      }

      if (props && props.variant === 'filled') {
        if (props && props.color === 'primary') {
          if (line_type === 'stroke') {
            colorValue = color.primary_palette.franklin_purple;
          }
          if (line_type === 'fill') {
            colorValue = color.primary_palette.franklin_purple;
          }
        } else {
        }
      }

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.white;
        }
      } else {
      }

      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 31 14">
          <defs>
            <path id="filled_key_svg__a" d="M0 0h30.947v14H0z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="filled_key_svg__b" fill={color.primary_palette.white}>
              <use xlinkHref="#filled_key_svg__a" />
            </mask>
            <path
              d="M29.686 5.37l-16.023-.106c-.26-.532-.701-.882-1.202-.882-.496 0-.932.343-1.193.866l-1.184-.008c.44-.553.703-1.257.703-2.026C10.787 1.44 9.382 0 7.647 0 5.915 0 4.509 1.44 4.509 3.214c0 .113.006.224.017.333a3.063 3.063 0 00-1.385-.333C1.406 3.214 0 4.654 0 6.428c0 1.776 1.406 3.214 3.14 3.214.498 0 .966-.121 1.385-.333a3.25 3.25 0 00-.017.333c0 1.776 1.406 3.215 3.14 3.215 1.734 0 3.14-1.44 3.14-3.215a3.24 3.24 0 00-.793-2.13l1.28.009c.262.515.695.854 1.186.854.486 0 .913-.333 1.176-.838l9.64.063V14l1.694-.006v-1.916l1.742-.006v1.915l1.793-.006V7.6h1.23c1.624 0 1.624-2.23-.05-2.23"
              fill={getColor(props, 'fill')}
              stroke={getColor(props, 'stroke')}
              mask="url(#filled_key_svg__b)"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Key_Icon = withStyles({
    root: {
      '& > svg': {
        // fontSize: '1.65rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Key_Icon {...props} />
    </>
  );
}

export default Key_Icon;
