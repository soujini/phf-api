import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LandingImageArchitectual from './landing_image_Architectual';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';
import SvgBuilding from '../data_display/icons/Building';
/**
 *  component for landing page which is used to display images to the user before he sign in/ join in
 */

const useStyles = {
  ImageText: {
    fontSize: font_sizes.font_22,
    color: color.primary_palette.franklin_purple,
    textAlign: 'center',
    fontFamily: 'avenir_book_r',
    width: '21.375rem',
    margin: '0 auto',
    fontWeight: '500',
  },
  imgSize : {
    height: '11rem',
    border : `2.4px solid ${color.primary_palette.black}`
  },
  imgAlign : {
    marginLeft : '1.25rem'
  },
  spacing: {
    marginTop: '1.625em',
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
  border:{
    border: `1px solid` + color.primary_palette.franklin_purple,
    margin: '0 auto',
  },
  landing_candidate: {
    paddingTop: '3.0625em',
    paddingBottom: '1.6875em',
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
    left: '25%',
    top: '-3px',
  }, 
  margin: {
    margin: '0 auto',
  },
};

class LandingHiring extends Component {
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
        <Grid container>
          <Grid container md={11} className={classes.border}>
            <Grid container md={12} className={classes.candidate_heading}>
              <span className={classes.dotLeft}></span>
              <span className={classes.headingBg}>
                {strings.landing_page.titles.hiring_companies}{' '}
              </span>
              <span className={classes.dotRight}></span>
            </Grid>
            <Grid container md={12} className={classes.landing_candidate}>
              <Grid item md={4} className={classes.alignCenter}>
                {/* <LandingImageArchitectual></LandingImageArchitectual> */}
                <img src="/assets/images/Parseley.png" alt="Trade Works" className={classes.imgSize}/>
                <Grid className={classes.ImageText}>{strings.landing_page.titles.architectual_firms}</Grid>
              </Grid>
              <Grid item md={4} className={classes.alignCenter}>
                {/* <LandingImageArchitectual></LandingImageArchitectual> */}
                <img src="/assets/images/Parseley.png" alt="Trade Works" className={classes.imgSize}/>
                <Grid className={classes.ImageText}>{strings.landing_page.titles.interior_design_firms}</Grid>
              </Grid>
              <Grid item md={4} className={classes.alignCenter}>
                {/* <LandingImageArchitectual></LandingImageArchitectual> */}
                <img src="/assets/images/Parseley.png" alt="Trade Works" className={classes.imgSize}/>
                <Grid className={classes.ImageText}>{strings.landing_page.titles.plumbing_outfits}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingHiring);
