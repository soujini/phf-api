import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function ArrowRight_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {
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
        <SvgIcon {...props} viewBox="0 0 10 10">
          <path
            stroke={getColor(props, 'stroke')}
            fill={getColor(props, 'fill')}
            d="M9 4.5L0 9V0z"
            fillRule="evenodd"
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_ArrowRight_Icon = withStyles({
    root: {
      '& > svg': {
        // fontSize: '1.65rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_ArrowRight_Icon {...props} />
    </>
  );
}

export default ArrowRight_Icon;
