import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Instagram_Outline_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 31 31">
          <g fill="none" fillRule="evenodd">
            <path
              d="M30.75 23.249a7.5 7.5 0 01-7.5 7.501h-15a7.5 7.5 0 01-7.5-7.501V8.25c0-4.143 3.356-7.5 7.5-7.5h15a7.5 7.5 0 017.5 7.5v14.999z"
              stroke={getColor(props, 'stroke')}
              strokeWidth={1.5}
            />
            <path
              d="M23.299 21.502a1.8 1.8 0 01-1.798 1.797H9.998A1.799 1.799 0 018.2 21.502v-7.676H11a5.114 5.114 0 00-.377 1.924c0 2.827 2.3 5.127 5.127 5.127s5.127-2.3 5.127-5.127c0-.68-.137-1.33-.38-1.924H23.3v7.676zm-10.225-7.676a3.299 3.299 0 012.676-1.375c1.1 0 2.075.544 2.676 1.375a3.28 3.28 0 01.625 1.924c0 1.819-1.482 3.3-3.301 3.3a3.305 3.305 0 01-3.301-3.3c0-.718.235-1.382.625-1.924zm9.467-5.29l.414-.001V11.712l-3.167.01-.01-3.177 2.763-.008zM21.5 6.376H9.998a3.627 3.627 0 00-3.623 3.623v11.504a3.626 3.626 0 003.623 3.623H21.5a3.627 3.627 0 003.624-3.623V9.998A3.628 3.628 0 0021.5 6.375z"
              fill={getColor(props, 'stroke')}
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Instagram_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Instagram_Icon {...props} />
    </>
  );
}

export default Instagram_Outline_Icon;
