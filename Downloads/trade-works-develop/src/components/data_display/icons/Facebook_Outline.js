import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function FaceBook_Outline_Icon(props) {
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
            <path d="M14.999 0h-10A4.999 4.999 0 000 5v10a5 5 0 004.999 5h10A5 5 0 0020 15V5a5 5 0 00-5.001-5m0 1A4.005 4.005 0 0119 5v10c0 2.206-1.795 4-4.001 4h-10A4.004 4.004 0 011 15V5c0-2.206 1.794-4 3.999-4h10" />
            <path d="M8.334 16.25h2.5V10h1.854l.228-2.5H10.93v-1c0-.487.325-.6.553-.6h1.401V3.758l-1.93-.008c-2.144 0-2.632 1.598-2.632 2.62V7.5H7.085V10h1.25v6.25z" />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_FaceBook_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_FaceBook_Icon {...props} />
    </>
  );
}

export default FaceBook_Outline_Icon;
