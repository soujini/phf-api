import { Grid, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import strings from '../../../utilities/strings';
import { color, font_sizes } from '../../../utilities/themes';
import Close_Icon from '../../data_display/icons/Close';
import CustomButton from '../../navigations/custom_buttons';
import { Route, withRouter } from 'react-router-dom';

const useStyles = {
  popup: {
    backgroundColor: color.secondary_palette.grays.fafa_gray,
    padding: '1.25rem',
    border: `2px solid ${color.primary_palette.franklin_purple}`,
    marginTop: '70px',
    width: '600px',
    margin: '0 auto',
  },
  welcomeTextAlign: {
    textAlign: 'center',
    color: color.primary_palette.franklin_purple,
    fontSize: font_sizes.font_35,
    fontFamily: 'Zapfino',
    textTransform: 'capitalize',
    height: '5.25rem',
  },
  textPurse: {
    textAlign: 'center',
    fontSize: font_sizes.font_24,
  },
  btn: {
    border: `1px solid ${color.primary_palette.franklin_purple}`,
    paddingRight: '2.8125rem',
    paddingLeft: '2.8125rem',
    marginTop: '1.8125rem',
    marginBottom: '1.875rem',
  },
};

class SuccessPopupContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeIcon: this.props && this.props.closeIcon ? this.props.closeIcon : false,
    };
  }

  closeModal = () => {
    this.setState({
      closeIcon: false,
    });
    this.props.closeModal();
  };

  handle_click_registration = () => {
    this.closeModal();
    this.props.history.push('/joinus_wizard');
  };

  render() {
    const { classes, open } = this.props;
    const { closeIcon } = this.state;
    return (
      <>
        {
          <Modal
            open={open}
            aria-labelledby="modal-title"
            disablePortal
            aria-describedby="modal-description"
            disableAutoFocus
          >
            <Grid container className={classes.modalStyle}>
              {/* <Grid md={4}></Grid> */}
              <Grid container justify="center" className={classes.popup}>
                <Grid container justify="flex-end" md={12}>
                  <CustomButton onClick={this.props.closePopup}>
                    <Close_Icon onClick={this.closeModal} />
                  </CustomButton>
                </Grid>
                <Grid container justify="center" md={12}>
                  <img src="../assets/images/sucessDragonLogo.PNG" alt="" />
                  <Grid container justify="center" className={classes.welcomeTextAlign}>
                    {strings.success_modal.titles.welcome}
                  </Grid>
                </Grid>
                <Grid md={12} justify="center" className={classes.textPurse}>
                  {strings.success_modal.titles.pursue_your_dream_job}
                </Grid>
                <Grid container justify="center" md={12}>
                  <CustomButton color="primary" className={classes.btn} onClick={this.handle_click_registration}>
                    {strings.success_modal.titles.begin}
                  </CustomButton>
                </Grid>
                <Grid></Grid>
              </Grid>
              {/* <Grid md={4}></Grid> */}
            </Grid>
          </Modal>
        }
      </>
    );
  }
}

export default withRouter(withStyles(useStyles, { withTheme: true })(SuccessPopupContent));
