import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LandingImagesBlockLogo from '../landing_page/landing_company_logo_block';
import LandingImagesBlock from '../landing_page/landing_image_block';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';
import SvgBuilding from '../data_display/icons/Building';

const useStyles = {
  wrapper: {
    flex: '0 0 25%',
  },
  textAlign: {
    textAlign: 'center',
    fontSize: font_sizes.font_22,
    color: color.primary_palette.franklin_purple,
  },
  candidate_heading: {
    borderBottom: `1px solid ${color.primary_palette.franklin_purple}`,
    marginTop: '3.5625rem',
    marginBottom: '2.8125rem',
  },
  border:{
    border: `1px solid` + color.primary_palette.franklin_purple,
    margin: '0 auto',
  },
  candidate_heading: {
    fontSize: font_sizes.font_25,
    color: color.primary_palette.franklin_purple,
    position: 'relative',
  },
  headingBg: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '-26px',
    left: '62px',
    padding: '10px',
  },
  landing_candidate: {
    paddingTop: '3.0625em',
    paddingBottom: '1.6875em',
  },
  spacing: {
    marginTop: '1.625em',
  },
  dotLeft: {
    width: '6px',
    height: '6px',
    backgroundColor: color.primary_palette.franklin_purple,
    borderRadius: '50%',
    left: '56px',
    top: '-3px',
    position: 'absolute',
  },
  dotRight: {
    width: '6px',
    height: '6px',
    backgroundColor: color.primary_palette.franklin_purple,
    borderRadius: '50%',
    position: 'absolute',
    left: '30.5%',
    top: '-3px',
  },
  margin: {
    margin: '0 auto',
  },
};

class LandingImagesMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
      <Grid container className={classes.spacing}>
      <Grid container md={11} justify="flex-end" className={classes.margin}>
        <Grid container md={12} justify="flex-end"><SvgBuilding /></Grid>
      </Grid>
      <Grid container >
        <Grid container md={11} className={classes.border}>
          <Grid container md={12} className={classes.candidate_heading}>
              <span className={classes.dotLeft}></span>
              <span className={classes.headingBg}>
                {strings.landing_page.titles.pursue_your_dream_job}
              </span>
              <span className={classes.dotRight}></span>
          </Grid>
          <Grid container md={12} className={classes.landing_candidate}>
            <Grid justify="center" className={classes.wrapper}>
              <LandingImagesBlockLogo />
              <Grid className={classes.textAlign}> {strings.landing_page.titles.architecture_positions}</Grid>
            </Grid>
            <Grid justify="center" className={classes.wrapper}>
              <LandingImagesBlockLogo />
              <Grid className={classes.textAlign}> {strings.landing_page.titles.interior_design_careers}</Grid>
            </Grid>
            <Grid justify="center" className={classes.wrapper}>
              <LandingImagesBlockLogo />
              <Grid className={classes.textAlign}> {strings.landing_page.titles.plumbing_gigs}</Grid>
            </Grid>
            <Grid justify="center" className={classes.wrapper}>
              <LandingImagesBlockLogo />
              <Grid className={classes.textAlign}> {strings.landing_page.titles.contractor_openings}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingImagesMain);
