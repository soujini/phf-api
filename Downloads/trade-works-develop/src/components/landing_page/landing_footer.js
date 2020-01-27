import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';

/**
 *  footer for landing page which is used to display footer to the user before he sign in/ join in
 */
const useStyles = {
  footerTxtStyle: {
    fontSize: font_sizes.font_15,
    fontWeight: 600,
    color: color.primary_palette.franklin_purple,
    height: '1.125rem',
    marginTop: '4.75rem',
    marginBottom : '3.125rem'
  },
};

class LandingFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid container item xs md={12} justify="center" alignItems="center" className={classes.footerTxtStyle}>
            {strings.landing_page.titles.footer_text}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingFooter);
