import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
  size: {
    width: '100%',
  },
};

class LandingImageArchitectual extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <img className={classes.size} src="/assets/images/outsourcing.jpg"></img>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingImageArchitectual);
