import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));


function Coin_Icon(props) {
  const classes = useStyles();
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
        <SvgIcon {...props} viewBox="0 0 15 16">
          <defs>
            <path id="coin_svg__a" d="M0 0h14.245v16H0z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="coin_svg__b" fill={color.primary_palette.white}>
              <use xlinkHref="#coin_svg__a" />
            </mask>
            <path
              d="M13.602 10.62V9.28c-.116.35-.26.687-.43 1.008v.332h.43zm-12.436 0v-.156a6.638 6.638 0 01-.43-.915v1.07h.43zm11.584 2.078V11.09h-.07a6.897 6.897 0 01-.613.74v.868h.683zm-10.477 0l-.001-.77a6.853 6.853 0 01-.684-.805v1.575h.685zm10.684-5.576a5.837 5.837 0 00-5.835-5.835 5.837 5.837 0 00-5.835 5.835 5.837 5.837 0 005.835 5.835 5.837 5.837 0 005.835-5.835zM11.123 14.1v-1.446a6.815 6.815 0 01-.856.529v.917h.856zm-7.051 0v-.868a6.84 6.84 0 01-.857-.51V14.1h.857zm5.425.947v-1.522a6.717 6.717 0 01-.857.256v1.266h.857zm-3.797 0l-.001-1.245a6.867 6.867 0 01-.856-.242v1.487H5.7zm1.998.364v-1.485a6.88 6.88 0 01-.857.018v1.467h.857zM0 8.877V7.122A7.125 7.125 0 017.123 0a7.125 7.125 0 017.122 7.122v1.755A7.125 7.125 0 017.123 16 7.125 7.125 0 010 8.877z"
              fill={color.primary_palette.black}
              mask="url(#coin_svg__b)"
            />
            <g fill={getColor(props, 'stroke')}>
              <path d="M8.774 10.302l-1.467-.92a.426.426 0 00-.418.001l-1.426.91c-.691.44-1.09.153-.891-.642l.422-1.68a.428.428 0 00-.131-.398L3.558 6.5c-.633-.52-.483-.99.336-1.046l1.727-.118a.427.427 0 00.338-.247l.618-1.574c.3-.763.793-.764 1.099-.004l.646 1.607a.43.43 0 00.339.245l1.688.102c.819.05.972.517.343 1.043l-1.328 1.11a.426.426 0 00-.128.4l.424 1.636c.206.794-.191 1.085-.886.65" />
            </g>
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Coin_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Coin_Icon {...props} />
    </>
  );
}

export default Coin_Icon;
