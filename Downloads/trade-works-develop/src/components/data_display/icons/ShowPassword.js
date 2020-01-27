import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function ShowPassword_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 21 13">
          <path
            d="M8.085 4.914a.988.988 0 00-.985.983c-.008.57.42 1.02.978 1.029a.994.994 0 001.004-1.003.99.99 0 00-.997-1.009zm10.907 1.978a11.509 11.509 0 00-6.457-3.861 4.543 4.543 0 012.159 3.861 4.544 4.544 0 01-2.158 3.86 11.51 11.51 0 006.456-3.86zm-13.413 0c0-1.634.866-3.056 2.158-3.861a11.506 11.506 0 00-6.456 3.861 11.51 11.51 0 006.456 3.86 4.542 4.542 0 01-2.158-3.86zm14.694 0l-.244.309a12.517 12.517 0 01-9.892 4.805A12.518 12.518 0 01.244 7.201L0 6.892l.244-.31a12.521 12.521 0 019.893-4.805 12.52 12.52 0 019.892 4.805l.244.31zM.036 5.305C2.389 2.074 6.039 0 10.137 0c4.097 0 7.747 2.074 10.099 5.305C17.884 2.494 14.234.69 10.137.69 6.039.69 2.389 2.494.036 5.305z"
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
  const Custom_ShowPassword_Icon = withStyles({
    root: {
      '& > svg': {
        // fontSize: '1.2rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_ShowPassword_Icon {...props} />
    </>
  );
}

export default ShowPassword_Icon;
