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
    width: '92%',
  },
  images1: {
    position: 'absolute',
    left: '3.875rem',
    'z-index': 4,
    top: '3.5625em',
  },
  images2: {
    position: 'absolute',
    top: '8.25rem',
    left: '6.6875em',
  },
  images3: {
    position: 'absolute',
    'z-index': 2,
    left: '12.25em',
    top: '4.3125em',
  },
  images4: {
    position: 'absolute',
    'z-index': 5,
    top: '7.25em',
  },
  images5: {
    position: 'absolute',
    left: '8em',
  },
  images6: {
    position: 'absolute',
    left: '1.1875em',
  },
  imageSize: {
    width: '5.0625em',
    height: '5.0625em',
    border : `1.8px solid`+ color.wizard_box_colors.shadow_gray
  },
};

class LandingImagesBlockLogo extends Component {
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
            <img src="/assets/images/Ktate.jpg" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images2}>
            <img src="/assets/images/Drake_A.jpg" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images3}>
            <img src="/assets/images/Pchase.jpg" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images4}>
            <img src="/assets/images/Gplumbin.jpg" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images5}>
            <img src="/assets/images/Ktate.jpg" alt="image" className={classes.imageSize} />
          </Grid>
          <Grid item justify="center" className={classes.images6}>
            <img src="/assets/images/Drake_A.jpg" alt="image" className={classes.imageSize} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingImagesBlockLogo);
