import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LandingImagesBlock from './landing_image_block';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';
import SvgBuilding from '../data_display/icons/Building';

/**
 *  component for landing page which is used to display images to the user before he sign in/ join in
 */
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
    fontSize: font_sizes.font_25,
    color: color.primary_palette.franklin_purple,
    position: 'relative',
  },
  border:{
    border: `1px solid` + color.primary_palette.franklin_purple,
    margin: '0 auto',
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
    left: '38.5%',
    top: '-3px',
  },
  margin: {
    margin: '0 auto',
  },
};

class LandingCandidate extends Component {
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
            <Grid container md={12} className={classes.candidate_heading} >
              <span className={classes.dotLeft}></span>
              <span className={classes.headingBg}>
                {strings.landing_page.titles.find_best_candidates}
              </span>
              <span className={classes.dotRight}></span>
              </Grid>
            <Grid item container justify="center" md={12} className={classes.landing_candidate}>
              <Grid justify="center" className={classes.wrapper}>
                <LandingImagesBlock />
                <Grid className={classes.textAlign}>{strings.landing_page.titles.architecture_candidates}</Grid>
              </Grid>
              <Grid justify="center" container className={classes.wrapper}>
                <LandingImagesBlock />
                <Grid className={classes.textAlign}>{strings.landing_page.titles.interior_design}</Grid>
              </Grid>
              <Grid justify="center" container className={classes.wrapper}>
                <LandingImagesBlock />
                <Grid className={classes.textAlign}>{strings.landing_page.titles.plumbing_heros}</Grid>
              </Grid>
              <Grid justify="center" container className={classes.wrapper}>
                <LandingImagesBlock />
                <Grid className={classes.textAlign}>{strings.landing_page.titles.contractor_counsel}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingCandidate);
