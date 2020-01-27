import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Linkedin_Outline_Icon(props) {
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
          <g fill={getColor(props, 'stroke')} fillRule="evenodd">
            <path d="M15 0H5C2.237 0 0 2.238 0 5v10a5 5 0 005 5h10a5 5 0 005-5V5a5 5 0 00-5-5zm0 1c2.206 0 4 1.794 4 4v10c0 2.206-1.794 4-4 4H5c-2.206 0-4-1.794-4-4V5c0-2.206 1.794-4 4-4h10z" />
            <path d="M3.611 16.118h3.17V7.062h-3.17zM5.196 5.704a1.585 1.585 0 100-3.171 1.585 1.585 0 000 3.17M17.196 11.142c0-2.444-.527-4.08-3.376-4.08-1.369 0-2.288.509-2.664 1.223h-.039V7.062H8.592v9.057h2.64v-4.49c0-1.183.223-2.33 1.688-2.33 1.442 0 1.558 1.355 1.558 2.406v4.414h2.718v-4.977z" />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Linkedin_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Linkedin_Icon {...props} />
    </>
  );
}

export default Linkedin_Outline_Icon;
