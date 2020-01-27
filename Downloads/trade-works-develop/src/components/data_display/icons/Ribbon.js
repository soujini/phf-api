import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Ribbon_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 36 49">
          <defs>
            <path id="purple__ribbon_svg__a" d="M0 0h35.104v49H0z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="purple__ribbon_svg__b" fill={color.primary_palette.white}>
              <use xlinkHref="#purple__ribbon_svg__a" />
            </mask>
            <path
              d="M21.921 24.496l-3.03-.557-1.225 2.826-2.685-1.51-2.077 2.276-2.05-2.3-.552.302c-.133 8.91 1.657 19.23 4.52 23.468 2.26-7.368 6.238-11.415 6.238-11.415.78-.027 6.35 4.195 14.044 4.026-7.365-5.795-13.183-17.116-13.183-17.116zm-3.677-1.77l-1.091 2.516-2.39-1.345-1.85 2.027-1.824-2.048-2.407 1.315-1.06-2.53-2.704.463-.18-2.736-2.709-.441.718-2.647-2.418-1.296 1.537-2.27L0 11.724l2.192-1.65-1.113-2.507 2.609-.848-.239-2.732 2.743.045.662-2.663 2.58.933L10.924 0l2.137 1.72L15.218.027l1.463 2.321 2.59-.901.63 2.668 2.742-.012-.271 2.73 2.598.88-1.142 2.494 2.171 1.675-1.89 1.988 1.51 2.29-2.435 1.265.685 2.656-2.712.407-.215 2.734-2.698-.495z"
              fill={getColor(props, 'stroke')}
              mask="url(#purple__ribbon_svg__b)"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Ribbon_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Ribbon_Icon {...props} />
    </>
  );
}

export default Ribbon_Icon;
