import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Chevron_Down_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.franklin_purple;
        }
      }
      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 12 6">
          <path
            stroke={getColor(props, 'stroke')}
            d="M0 0l6 6 6-6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Chevron_Down_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Chevron_Down_Icon {...props} />
    </>
  );
}

export default Chevron_Down_Icon;
