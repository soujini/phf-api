import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Add_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {

    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 18 18">
          <path
            d="M9 18c-5 0-9-4-9-9s4-9 9-9 9 4 9 9c0 4.9-4.1 9-9 9zM9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.9 7.3h-4.6V3.8h-2v4.6H3.8v2h4.6V15h2v-4.6H15V8.3z"
            fill={props.color ? props.color : color.secondary_palette.grays.light_gray}
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Add_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Add_Icon {...props} />
    </>
  );
}

export default Add_Icon;
