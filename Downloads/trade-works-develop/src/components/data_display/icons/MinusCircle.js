// import React from 'react';

// const SvgMinusCircle = props => (
//   <svg width={18} height={18} {...props}>
//     <g fill="none" fillRule="evenodd">
//       <circle stroke="#A2A2A2" strokeWidth={1.038} fillOpacity={0.8} fill="#FFF" cx={9} cy={9} r={9} />
//       <rect
//         fill="#9C9C9C"
//         transform="rotate(90 9.51 9.061)"
//         x={8.471}
//         y={3.176}
//         width={2.077}
//         height={11.769}
//         rx={1.038}
//       />
//     </g>
//   </svg>
// );

// export default SvgMinusCircle;

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Minus_Icon_Outlined(props) {
  const getColor = (props, line_type) => {
    let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

    if (props && props.color === 'primary') {
      if (line_type === 'stroke') {
        colorValue = color.primary_palette.franklin_purple;
      }
      if (line_type === 'fill') {
        colorValue = color.primary_palette.white;
      }
    } else {
    }

    return colorValue;
  };

  function styledIcon(props) {
    const classes = useStyles(props);

    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 -2 20 22">
          <g fill="none" fillRule="evenodd">
            <circle
              stroke={getColor(props, 'stroke')}
              strokeWidth={1.038}
              fillOpacity={0.8}
              fill={color.primary_palette.white}
              cx={9}
              cy={9}
              r={9}
              y={3.176}
            />
            <rect
              fill={getColor(props, 'stroke')}
              transform="rotate(90 9.51 9.061)"
              x={8.471}
              y={3.176}
              width={2.077}
              height={11.769}
              rx={1.038}
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Minus_Icon = withStyles({
    root: {
      '& > svg': {
        fontSize: '1.65rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Minus_Icon {...props} />
    </>
  );
}

export default Minus_Icon_Outlined;
