import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  LinearProgress,
  Divider,
  Select,
  FormControl,
  InputLabel,
  Tabs,
  Tab
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SvgBenjaminApprentice from "../data_display/icons/BenjaminApprentice";
import SvgTradeWorksIcon from "../data_display/icons/TradeWorksIcon";
import { color, font_sizes, px_to_rem_sizes } from "../../utilities/themes";
import Coin_Icon from "../data_display/icons/Coin";
import strings from "../../utilities/strings";
import SvgTradeWorksIconSmall from "../data_display/icons/TradeWorksIconSmall";
import { Route, withRouter } from "react-router-dom";
import SvgFrStamp from "../data_display/icons/FrStamp";
import CustomTextField from "../inputs/custom_textfields";
import CustomInputLabel from "../data_display/custom_label";
import Chevron_Down_Icon from "../data_display/icons/Arrow_Chevron_Down";
import { string } from "prop-types";
import {
  ATLEAST_ONE_CAPITAL_LETTER,
  NUM_OR_SYMBOL,
  PASSWORD_REGEX,
  REGEX_EMAIL,
  REGEX_EMIAL_END_WITH_DOT,
  restrictLeadingSpace
} from "../../validations/validations";
/**
 * Common Header component across the application to be displayed to the user once the user logged in to the application
 */
const useStyles = {
  header_layout: {
    marginTop: "2rem",
    padding: "0 20px"
  },
  benjamin_logo: {
    width: "58.4px",
    height: "47.4px"
  },
  progressbar: {
    height: "4px",
    "&. MuiLinearProgress-colorPrimary": {
      backgroundColor: "#c7dbf4"
    },
    
  },
  current_position: {
    fontFamily: "avenir_black_r",
    fontSize: font_sizes.font_12,
    fontWeight: "900",
    color: color.primary_palette.black,
    textTransform: "uppercase"
  },
  current_welcome: {
    fontFamily: "avenir_black_r",
    fontSize: font_sizes.font_13,
    fontWeight: "900",
    color: color.primary_palette.black,
    textTransform: "uppercase"
  },
  current_position_value: {
    marginLeft: "16px"
  },
  coin_icon: {
    width: '18px',
    height: '18px',
    VerticalAlign: 'middle',
  },
  space: {
    margin: "0 10px"
  },
  header_right_block: {
    justifyContent: "flex-end",
    marginBottom: "4px"
  },
  iconAlign: {
    marginLeft: "0.3rem"
  },
  tw_icon: {
    width: "20.1px",
    height: "24px"
  },
  icon_hat: {
    width: "30px",
    height: "29px",
    opacity: "0.2"
  },
  flipbook_icon: {
    width: "29px",
    height: "28px"
  },
  fr_stamp: {
    width: "25px",
    height: "25px"
  },
  cart_icon: {
    opacity: "0.5",
    marginLeft: "3px"
  },
  img_cart: {
    width: "49px",
    height: "36px",
  },
  headings: {
    fontFamily: "gillsans_r",
    fontSize: "1.875em",
    fontWeight: "600",
    color: color.primary_palette.franklin_purple
  },
  divider: {
    width: "430px",
    height: "2px",
    backgroundColor: color.secondary_palette.grays.shadow_gray,
    marginTop: "10px"
  },
  divider1: {
    width: "433px",
    height: "2px",
    backgroundColor: color.secondary_palette.grays.shadow_gray,
    marginTop: "10px"
  },
  tw_icon_center: {
    display: "flex",
    justifyContent: "center",
    borderBottom: `2px solid ${color.secondary_palette.grays.shadow_gray}`,
    cursor: "pointer"
  },
  left_section: {
    borderBottom: `2px solid ${color.secondary_palette.grays.shadow_gray}`
  },
  left_section_align: {
    display: "flex",
    alignItems: "center",
    //marginBottom: '23.3px',
    height: "55px",
    marginBottom: "4px"
  },
  tabs: {
    "& .MuiTab-wrapper": {
      color: color.primary_palette.black,
      fontSize: "14px",
      fontFamily: "gillsans_r"
    },
    "& .MuiButtonBase-root.Mui-disabled": {
      opacity: "0.2"
    }
  },
  profile_icon: {
    width: "40px",
    height: "40px"
  },
  down_arrow_icon: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px"
  },
  people_search: {
    display: "flex",
    justifyContent: "center",
    opacity: "0.2",
    pointerEvents: "none"
  },
  people_search_icon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "18px 2px 0 0"
  },
  people_search_block: {
    "label + .MuiInput-formControl": {
      marginTop: "0"
    },
    "& .MuiFormControl-root": {
      width: "100%"
    },
    "& .MuiInputLabel-root": {
      marginLeft: "15px",
      fontSize: "13px",
      color: "black",
      padding: "5px 0"
    },
    "& .MuiInputBase-inputSelect": {
      padding: "3px"
    },
    "& .MuiSvgIcon-root": {
      padding: "4px",
      width: "9.5px"
    },
    "& .MuiTextField-root": {
      "& .MuiInputBase-input": {
        padding: "6px 0 0"
      },
      "& .MuiInputLabel-root": {
        fontFamily: "gillsans_r",
        fontSize: font_sizes.font_13,
        fontWeight: "300",
        color: color.secondary_palette.grays.shadow_gray
      }
    }
  },
  first_people_search_divider: {
    marginTop: "30px",
    width: "1px",
    height: "11px",
    backgroundColor: color.primary_palette.black
  },
  second_people_search_divider: {
    margin: "25px 8px 0 6px",
    width: "1px",
    height: "25px",
    backgroundColor: color.primary_palette.black
  },
  adv_search_label: {
    fontFamily: "gillsans_r",
    fontSize: font_sizes.font_14,
    color: color.primary_palette.franklin_purple
  },
  advanced_search_block: {
    margin: "15px 0 0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  happy_arrow: {
    marginRight: "5px"
  }
};

class Logged_In_Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      selected: null
    };
  }

  handle_on_link_click = () => {
    console.log();
  };

  handle_home_click = () => {
    this.props.history.push("/");
  };
  /**
   * Highlighting the link color on click of menu
   */
  handle_menu_change = (event, newValue) => {
    this.setState({ value: newValue, selected: null });
  };

  handle_menu_change_right = (event, newValue) => {
    this.setState({ selected: newValue, value: null });
  };

  render() {
    const { value, selected } = this.state;
    const { classes } = this.props;
    const userData = localStorage.getItem("user_data");
    return (
      <Grid container className={classes.header_layout}>
        <Grid item xs={5} className={classes.left_section}>
          <Grid container className={classes.left_section_align}>
            <Grid>
              <img
                src="/assets/icons/dragon_blue.svg"
                className={classes.benjamin_logo}
                alt="benjamin_apprentice"
              />
            </Grid>
            <Grid item className={classes.space}>
              <span className={classes.current_position}>
                <span>{strings.loggin_header.titles.current_position}</span>
                <span className={classes.current_position_value}>23</span>
              </span>
              <div className={classes.progressbar}>
                <LinearProgress variant="determinate" value={2} />
              </div>
            </Grid>
            <Grid item>
              <img
                src="/assets/icons/coin.svg"
                alt="coin_icon"
                className={classes.coin_icon}
              />
            </Grid>
          </Grid>
          <Grid item container justify="center" className={classes.headings}>
            {strings.loggin_header.titles.get_found}
          </Grid>
          <Divider variant="inset" className={classes.divider} />
          <Grid container item justify="center" alignItems="center">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handle_menu_change}
              className={classes.tabs}
            >
              <Tab label={strings.loggin_header.titles.search_jobs} disabled />
              <Tab label={strings.loggin_header.titles.my_profile} />
              <Tab
                label={strings.loggin_header.titles.active_employers}
                disabled
              />
            </Tabs>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          className={classes.tw_icon_center}
          onClick={this.handle_home_click}
        >
          <img
            src="/assets/images/trade-works.png"
            alt={strings.landing_page.titles.tradeWorks}
          />
        </Grid>
        <Grid item xs={5} className={classes.left_section}>
          <Grid container className={classes.header_right_block}>
            <Grid item>
              <Grid container>
                <Grid item className={classes.current_welcome}>
                  <span>{strings.loggin_header.titles.welcome}</span>
                  <span>&nbsp; {userData} !</span>
                </Grid>
              </Grid>
              <Grid container item xs alignItems="center" justify="flex-end">
                <Grid item justify="center">
                  <img
                    src="/assets/icons/trade_works_icon_small.svg"
                    className={classes.tw_icon}
                    alt="icon hat"
                  />
                </Grid>
                <Grid item justify="center" className={classes.iconAlign}>
                  <img
                    src="/assets/images/icon_hat.png"
                    className={classes.icon_hat}
                    alt="icon hat"
                  />
                </Grid>
                <Grid item justify="center" className={classes.iconAlign}>
                  <img
                    src="/assets/images/flipbook_icon.PNG"
                    className={classes.flipbook_icon}
                    alt="flipbook"
                  />
                </Grid>
                <Grid item className={classes.iconAlign}>
                  <img
                    src="/assets/icons/fr_stamp.svg"
                    className={classes.fr_stamp}
                    alt="flipbook"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginLeft: "10px" }}>
              <Grid container>
                <img
                  src="/assets/icons/profile.svg"
                  alt="coin_icon"
                  className={classes.profile_icon}
                />
              </Grid>
              <Grid container className={classes.down_arrow_icon}>
                <img
                  src="/assets/icons/filled_down_arrow.svg"
                  alt="coin_icon"
                />
              </Grid>
            </Grid>
            <Grid item className={classes.cart_icon}>
              <img className={classes.img_cart}
                src="/assets/icons/icon_shopping_cart.svg"
                alt={strings.image_text.alt_text.cart_icon}
              />
            </Grid>
          </Grid>
          <Grid item container justify="center" className={classes.headings}>
            {strings.loggin_header.titles.find_talent}
          </Grid>
          <Divider variant="inset" className={classes.divider1} />
          <Grid container item justify="center" alignItems="center">
            <Tabs
              className={classes.tabs}
              value={selected}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handle_menu_change_right}
            >
              <Tab label={strings.loggin_header.titles.post_jobs} disabled />
              <Tab
                label={strings.loggin_header.titles.manage_applicants}
                disabled
              />
              <Tab
                label={strings.loggin_header.titles.discover_candidates}
                disabled
              />
            </Tabs>
          </Grid>
        </Grid>
        <Grid container className={classes.people_search} xs={12}>
          <Grid item xs={1} className={classes.people_search_icon}>
            <img
              src="/assets/icons/search.svg"
              className={classes.right_icons}
              alt="icon hat"
            />
          </Grid>
          <Grid item xs={1} className={classes.people_search_block}>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="people-native-simple"
                style={{ marginLeft: "20px" }}
              >
                {strings.loggin_header.titles.people}
              </InputLabel>
              <Select
                native
                inputProps={{
                  name: `${strings.loggin_header.titles.people}`,
                  id: "people-native-simple"
                }}
                displayEmpty
                IconComponent={Chevron_Down_Icon}
              ></Select>
            </FormControl>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.first_people_search_divider}
          />
          <Grid item xs={2} className={classes.people_search_block}>
            <CustomTextField
              label={strings.loggin_header.titles.job_title_name_company}
              onKeyPress={e => restrictLeadingSpace(e)}
            />
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.second_people_search_divider}
          />
          <Grid item xs={2} className={classes.people_search_block}>
            <CustomTextField
              label={strings.loggin_header.titles.city_state_zip}
              onKeyPress={e => restrictLeadingSpace(e)}
            />
          </Grid>
          <Grid item xs={2} className={classes.advanced_search_block}>
            <Grid item xs={1} className={classes.happy_arrow}>
              <img
                src="/assets/icons/icon_happy_arrow.svg"
                alt={strings.loggin_header.titles.happy_arrow}
              />
            </Grid>
            <CustomInputLabel
              className={classes.adv_search_label}
              is_input_label={true}
              label_name={strings.loggin_header.titles.advanced_search}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => {
  return {
    user:
      (state.JoinUs.joinUsFormData.data &&
        state.JoinUs.joinUsFormData.data.data.user) ||
      ""
  };
})(withRouter(withStyles(useStyles, { withTheme: true })(Logged_In_Header)));
