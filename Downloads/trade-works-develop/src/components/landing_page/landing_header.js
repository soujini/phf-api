import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SvgTradeWorksIconSmall from '../data_display/icons/TradeWorksIconSmall';
import SvgFrStamp from '../data_display/icons/FrStamp';
import SvgTradeWorksIcon from '../data_display/icons/TradeWorksIcon';
import CustomButton from '../navigations/custom_buttons';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';
import CustomLink from '../navigations/custom_links';
import LoginModal from '../../pages/login/login';
/**
 * Header component for landing page which is displayed to the user before he sign in/ join in
 */

const useStyles = {
  headerGridStyle: {
    borderBottom: `1px solid ${color.primary_palette.border_opacity}`,
    height: '4.25rem',
  },
  joinUsBtnStyle: {
    width: '6.8125rem',
    height: '1.875rem',
    borderRadius: '9.8px',
    border: `2px solid ${color.primary_palette.highlight_purple}`,
  },
  joinUsBtnTxtStyle: {
    fontSize: font_sizes.font_18,
    fontWeight: '600',
    lineHeight: 'normal',
    color: color.primary_palette.franklin_purple,
  },
  loginTxtStyle: {
    fontSize: font_sizes.font_18,
    color: color.primary_palette.black,
    cursor : 'pointer'
  },
  iconAlign: {
    marginLeft: '0.9375rem',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
};

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: false,
    };
  }

  handle_join_us_btn_click = () => {
    this.props.history.push('/join_us');
  };

  handle_navigate_home = () => {
    this.props.history.push('/');
  };

  toggleLoginModal = () => {
    this.setState((prevState, prevProps) => {
      return {displayLogin: !prevState.displayLogin}
    });
  };

  render() {
    const { displayLogin } = this.state;
    const { classes, join_us, login } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={5}>
            <Grid container item xs className={classes.headerGridStyle} alignItems="center">
              <Grid item container xs={2} md={1} justify="center" className={classes.iconAlign}>
                <SvgTradeWorksIconSmall />
              </Grid>
              <Grid item container xs={2} md={1} justify="center" className={classes.iconAlign}>
                <img src="assets/images/icon_hat.png" alt="icon hat" />
              </Grid>
              <Grid item container xs={2} md={1} justify="center" className={classes.iconAlign}>
                {/* <SvgSmallFlipbook fontSize="1.5rem" Size="1.5rem"/> */}
                <img src="assets/images/flipbook_icon.PNG" alt="flipbook" />
              </Grid>
              <Grid item container xs={2} md={2} className={classes.iconAlign}>
                <SvgFrStamp />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              item
              xs
              justify="center"
              alignItems="center"
              onClick={this.handle_navigate_home}
              className={classes.cursorPointer}
            >
              <img src="assets/images/trade-works.png" alt="Trade Works" />
              {/* <SvgTradeWorksIcon /> */}
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container item xs justify="flex-end" alignItems="center" className={classes.headerGridStyle}>
              <Grid item xs={2} sm={3} md={2}>
                {/* Login link should appear before user joins */}
                {login && (
                  <CustomLink color="#000" onClick={this.toggleLoginModal}>
                    <label className={classes.loginTxtStyle}>{strings.landing_page.titles.log_in}</label>
                  </CustomLink>
                )}
              </Grid>
              <Grid item xs={3} sm={4} md={3}>
                {/* JOIN US button should appear before user joins */}
                {join_us && (
                  <CustomButton
                    variant="outlined"
                    color="primary"
                    className={classes.joinUsBtnStyle}
                    onClick={this.handle_join_us_btn_click}
                  >
                    <span className={classes.joinUsBtnTxtStyle}>{strings.landing_page.titles.join_us}</span>
                  </CustomButton>
                )}
              </Grid>
            </Grid>
          </Grid>
          <React.Fragment>
            {displayLogin && (
              <Grid container item justify="center" alignItems="center">
                <LoginModal
                  open={displayLogin}
                  closeModal={this.toggleLoginModal}
                />
                {/* <Modal
                    open={displayLogin}
                    aria-labelledby="modal-title"
                    disablePortal
                    aria-describedby="modal-description"
                    disableAutoFocus
                  >
                    <p>Login Modal</p>
                  </Modal> */}
              </Grid>
            )}
          </React.Fragment>
        </Grid>
      </>
    );
  }
}

export default withRouter(withStyles(useStyles, { withTheme: true })(LandingHeader));
