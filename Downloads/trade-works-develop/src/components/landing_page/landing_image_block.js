import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { color } from '../../utilities/themes';

/**
 *  component for landing page which is used to display images to the user before he sign in/ join in
 */
const useStyles = {
  wrapper_content: {
    position: 'relative',
    height: '15.5rem',
    margin: '0 auto',
    width: '75%',
  },
  images1: {
    left: '3.875rem',
    zIndex: 4,
    position: 'absolute',
    top: '11px',
  },
  images2: {
    position: 'absolute',
    top: '7.25rem',
    left: '3.875rem',
  },
  images3: {
    position: 'absolute',
    left: '7.8125rem',
    top: '3.125rem',
    'z-index': 2,
  },
  images4: {
    position: 'absolute',
    top: '3.125rem',
    'z-index': 5,
    left: '19px',
  },
  imageSize: {
    height: '5.5em',
    width: '4.9375em',
    border : `1.7px solid ${color.primary_palette.black}`
  },
};

class LandingImagesBlock extends Component {
  constructor(props) {
    super(props);
  }

  //TODO : replace with original images while integrating the landing page
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container className={classes.wrapper_content}>
          <Grid item justify="center" className={classes.images1}>
            <img src="/assets/images/image1.png" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images2}>
            <img src="/assets/images/image2.png" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images3}>
            <img src="/assets/images/image3.png" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images4}>
            <img src="/assets/images/image4.png" alt="image" className={classes.imageSize} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingImagesBlock);
