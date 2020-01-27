import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { color, font_sizes } from '../../utilities/themes';
/**
 * TextField component with 3 variations i.e., Standard, Outlined, Filled and the props should be passed from the conatiner/wrapper component
 * @param {*} props
 */
function CustomForm(props) {
  const useStyles = makeStyles({
    container: {
      width: 360,
      minHeight: 550,
      border: 'solid 2px #410166',
      backgroundColor: 'var(--white-two)',
      marginTop: 72,
      paddingBottom: 32,
      padding: '0 60px',
      margin: '0 auto',
      textAlign: 'center',
    },
    image: {
      marginTop: 32,
      marginBottom: 13,
    },
    joinus: {
      color: '#410166',
      fontSize: 24,
      marginTop: '3rem'
    },
  });

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div className={classes.container}>
        <h4 direction="row" justify="center" className={classes.joinus}>
          JOIN US
        </h4>
        <form {...props} />
      </div>
    </Grid>
  );
}

export default CustomForm;
