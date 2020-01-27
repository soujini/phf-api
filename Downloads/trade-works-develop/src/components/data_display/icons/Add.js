import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Add_Icon_Outlined(props) {
  const getColor = (props, line_type) => {
    let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

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

  const classes = useStyles(props);
  function styledIcon(props) {

    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="2 -2 24 30">
          <g fill="none" fillRule="evenodd">
            <circle
              stroke={getColor(props, 'stroke')}
              strokeWidth={1.5}
              fillOpacity={0.8}
              fill={color.primary_palette.white}
              cx={13}
              cy={13}
              r={13}
            />
            <g fill={getColor(props, 'stroke')}>
              <path d="M12 5h3v17h-3z" />
              <path d="M22 12v3H5v-3z" />
            </g>
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Add_Icon = withStyles({
    root: {
      '& > svg': {
        fontSize: '1.65rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Add_Icon {...props} />
    </>
  );
}

export default Add_Icon_Outlined;
