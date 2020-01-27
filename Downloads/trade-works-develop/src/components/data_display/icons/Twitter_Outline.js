import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Twitter_Outline_Icon(props) {
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
            <path d="M15 0H5C2.237 0 0 2.238 0 5v10a5 5 0 005 5h10a5 5 0 005-5V5a5 5 0 00-5-5m0 1c2.206 0 4 1.794 4 4v10c0 2.206-1.794 4-4 4H5c-2.206 0-4-1.794-4-4V5c0-2.206 1.794-4 4-4h10" />
            <path d="M15.905 5.184c-.495.29-1.045.5-1.629.613A2.582 2.582 0 0012.404 5C10.988 5 9.84 6.13 9.84 7.525c0 .198.023.39.065.575A7.32 7.32 0 014.62 5.462a2.477 2.477 0 00-.348 1.27c0 .875.454 1.648 1.142 2.1a2.585 2.585 0 01-1.162-.315v.031c0 1.223.884 2.244 2.057 2.476a2.594 2.594 0 01-1.158.043 2.562 2.562 0 002.396 1.753 5.197 5.197 0 01-3.186 1.081c-.207 0-.41-.01-.612-.035A7.348 7.348 0 007.681 15c4.717 0 7.296-3.847 7.296-7.183a7.06 7.06 0 00-.007-.326 5.162 5.162 0 001.28-1.307 5.164 5.164 0 01-1.473.397c.53-.312.936-.807 1.128-1.397" />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Twitter_Outline_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Twitter_Outline_Icon {...props} />
    </>
  );
}

export default Twitter_Outline_Icon;
