import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Check_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.primary_palette.pine_green;

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
        <SvgIcon {...props} viewBox="0 0 14 14">
          <path
            d="M13.564 0S7.333 3.976 4 10.323c0 0-.385-2.534-1.77-2.915-1.384-.38-2.23.34-2.23.34s1.36 1.92 2 3.5A47.205 47.205 0 013.026 14l2.025-1.39S7.263 5.605 14 .572L13.564 0z"
            fill={getColor(props, 'stroke')}
            fillRule="evenodd"
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Check_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Check_Icon {...props} />
    </>
  );
}

export default Check_Icon;
