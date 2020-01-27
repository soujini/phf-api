import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));


function Element_Required_Icon(props) {
  const classes = useStyles();
  function styledIcon(props) {
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 16 16">
          <defs>
            <clipPath id="element_requiered_svg_svg__b">
              <use xlinkHref="#element_requiered_svg_svg__a" />
            </clipPath>
            <path d="M0 14.57V0h14.57v14.57H0z" id="element_requiered_svg_svg__a" />
          </defs>
          <path d="M0 14.57V0h14.57v14.57H0z" fill="none" />
          <g clipPath="url(#element_requiered_svg_svg__b)">
            <path d="M14.225 6.585H9.668a.345.345 0 01-.244-.589l2.465-2.465a.345.345 0 000-.488l-.362-.362a.345.345 0 00-.488 0L8.574 5.146a.345.345 0 01-.589-.244V.345A.345.345 0 007.64 0h-.71a.346.346 0 00-.345.345v4.557a.345.345 0 01-.589.244L3.531 2.681a.345.345 0 00-.488 0l-.362.362a.345.345 0 000 .488l2.465 2.465a.345.345 0 01-.244.59H.345A.345.345 0 000 6.93v.71c0 .19.154.345.345.345h4.557c.307 0 .462.372.244.59l-2.465 2.464a.345.345 0 000 .488l.362.362a.345.345 0 00.488 0l2.465-2.465a.345.345 0 01.589.244v4.558c0 .19.155.344.345.344h.71c.19 0 .345-.155.345-.344V9.668c0-.308.372-.462.589-.244l2.465 2.465a.345.345 0 00.488 0l.362-.362a.345.345 0 000-.488L9.424 8.574a.345.345 0 01.244-.59h4.557c.19 0 .345-.154.345-.344v-.71a.345.345 0 00-.345-.345" />
          </g>
        </SvgIcon>
      </span>
    );
  }
  /**
   * Custom styling the colors
   */
  const Custom_Required_Icon = withStyles({
    root: {
      '& > svg': {
        color: props.color ? props.color : color.secondary_palette.grays.light_gray,
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Required_Icon {...props} />
    </>
  );
}

export default Element_Required_Icon;
