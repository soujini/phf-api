import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Checkbox_Checked_Icon(props) {
  const classes = useStyles(props);
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
        <SvgIcon {...props} viewBox="0 0 16 16">
          <g fill="none" fillRule="evenodd">
            <path d="M.5 3.5h12v12H.5z" fill={color.primary_palette.white} stroke={getColor(props, 'stroke')} />
            <path
              d="M15.533 0S8.856 4.26 5.286 11.06c0 0-.413-2.714-1.896-3.122C1.906 7.529 1 8.302 1 8.302s1.456 2.058 2.142 3.75A50.577 50.577 0 014.242 15l2.17-1.489S8.782 6.006 16 .613L15.533 0z"
              fill={color.primary_palette.pine_green}
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_CheckboxChecked_Icon = withStyles({
    root: {
      '& > svg': {
        fontSize: '1.2rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_CheckboxChecked_Icon {...props} />
    </>
  );
}

export default Checkbox_Checked_Icon;
