import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Connections_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 27 28">
          <defs>
            <path id="connections_svg__a" d="M0 0h27v28H0z" />
          </defs>
          <g fill="none" fillRule="evenodd" opacity={0.475}>
            <mask id="connections_svg__b" fill={color.primary_palette.white}>
              <use xlinkHref="#connections_svg__a" />
            </mask>
            <path
              d="M21.364 25.347c-1.621 0-2.936-1.291-2.936-2.884s1.315-2.884 2.936-2.884S24.3 20.87 24.3 22.463s-1.315 2.884-2.936 2.884M5.636 17.642c-1.621 0-2.936-1.291-2.936-2.884s1.315-2.884 2.936-2.884 2.936 1.291 2.936 2.884-1.315 2.884-2.936 2.884m15.728-14.99c1.621 0 2.936 1.292 2.936 2.885 0 1.593-1.315 2.884-2.936 2.884s-2.936-1.291-2.936-2.884 1.315-2.884 2.936-2.884m0 14.273c-1.63 0-3.098.68-4.127 1.768l-6.015-3.205a5.466 5.466 0 00-.144-2.172l6.655-3.546a5.674 5.674 0 003.631 1.303c3.113 0 5.636-2.48 5.636-5.537C27 2.479 24.477 0 21.364 0c-3.112 0-5.635 2.48-5.635 5.537 0 .519.072 1.021.208 1.497l-6.623 3.53A5.673 5.673 0 005.636 9.22C2.523 9.221 0 11.701 0 14.758c0 3.058 2.523 5.536 5.636 5.536a5.665 5.665 0 004.203-1.849l5.955 3.173a5.475 5.475 0 00-.065.845c0 3.058 2.523 5.537 5.635 5.537C24.477 28 27 25.52 27 22.463c0-3.058-2.523-5.537-5.636-5.537"
              fill={getColor(props, 'stroke')}
              mask="url(#connections_svg__b)"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Connections_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Connections_Icon {...props} />
    </>
  );
}

export default Connections_Icon;
