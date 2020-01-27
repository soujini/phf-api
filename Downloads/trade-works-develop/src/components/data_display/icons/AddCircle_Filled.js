import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Add_Icon_Filled(props) {
  const classes = useStyles(props);
  function styledIcon(props) {

    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 36 50">
          <path
            d="M36 25c0 10.04-8.059 18.181-18 18.181-9.94 0-18-8.14-18-18.181S8.06 6.818 18 6.818c9.941 0 18 8.14 18 18.182"
            fill={props.color ? props.color : color.secondary_palette.grays.light_gray}
          />
          <path
            d="M29.062 22.512h-8.598v-8.685h-4.927v8.685h-8.6v4.977h8.6v8.684h4.927v-8.684h8.598v-4.977z"
            fill="#FEFEFE"
          />
        </SvgIcon>
      </span>
    );
  }
  /**
   * Custom styling the colors
   */
  const Custom_Add_Icon_Filled = withStyles({
    root: {
      '& > svg': {
        fontSize: '2rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Add_Icon_Filled {...props} />
    </>
  );
}

export default Add_Icon_Filled;
