import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Checkbox_Icon(props) {
  const classes = useStyles();
  function styledIcon(props) {
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.white;
        }
      }

      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 13 13">
          <path
            stroke={getColor(props, 'stroke')}
            fill={color.primary_palette.white}
            d="M.5.5h12v12H.5z"
            fillRule="evenodd"
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Checkbox_Icon = withStyles({
    root: {
      '& > svg': {
        fontSize: '1rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Checkbox_Icon {...props} />
    </>
  );
}

export default Checkbox_Icon;
