import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function CompassRose_Icon(props) {
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
      } else {
      }
      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 21 21">
          <g fill="none" fillRule="evenodd">
            <path
              fill={getColor(props, 'stroke')}
              d="M10.256 0L7.75 7.749 0 10.256l7.749 2.507 2.507 7.75 2.508-7.75 7.749-2.507-7.75-2.507L10.258 0z"
            />
            <path
              fill={color.primary_palette.white}
              d="M10.256.805l2.292 7.08.019.06-2.31 2.311h9.45l-7.08 2.29-.06.02-2.31-2.31v9.451l-2.291-7.08-.02-.06 2.31-2.31H.806v-.001l7.14-2.31 2.31 2.31z"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_CompassRose_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_CompassRose_Icon {...props} />
    </>
  );
}

export default CompassRose_Icon;
