import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function ElevatorPitch_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 32 19">
          <g fill="#7A7A7A" fillRule="evenodd">
            <path d="M16.933 16.32c.38.654.342 1.378-.385 1.8-.727.42-1.386.104-1.765-.552-.144-.248-1.98-4.845-2.454-5.757-.127.244-.554.806-.981 1.369.15-.67.238-3.021.017-4.008.745.682 2.83 1.776 3.485 1.978-.7.091-1.4.182-1.675.171.555.866 3.614 4.75 3.758 4.999M17.01 6.243a1.15 1.15 0 11-2.298 0 1.15 1.15 0 012.298 0M11.61 7.074a1.149 1.149 0 11-1.99 1.15 1.149 1.149 0 011.99-1.15M7.35 10.493a1.15 1.15 0 11-1.15 1.992 1.15 1.15 0 011.15-1.992M5.37 15.534a1.15 1.15 0 11-.001 2.299 1.15 1.15 0 010-2.299M26.352 15.534a1.15 1.15 0 110 2.299 1.15 1.15 0 010-2.299M24.372 10.493a1.15 1.15 0 111.15 1.991 1.15 1.15 0 01-1.15-1.99M20.11 7.074a1.15 1.15 0 111.992 1.15 1.15 1.15 0 01-1.991-1.15" />
            <path d="M2.579 16.735h26.564C28.928 9.588 23.06 3.837 15.86 3.837c-7.2 0-13.066 5.75-13.282 12.898zm-2.58 2.236v-2.11C0 8.116 7.117 1 15.862 1c8.746 0 15.86 7.115 15.86 15.86v2.11H0z" />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_ElevatorPitch_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_ElevatorPitch_Icon {...props} />
    </>
  );
}

export default ElevatorPitch_Icon;
