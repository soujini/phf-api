import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { color, font_sizes } from "../../utilities/themes";
import { Typography } from "@material-ui/core";
import SvgLittlePurpleStar from "../../components/data_display/icons/LittlePurpleStar";
import Element_Required_Icon from "../../components/data_display/icons/ElementRequiered";
import strings from "../../utilities/strings";
import CustomTextField from "../inputs/custom_textfields";
import CustomLink from "../navigations/custom_links";
import CustomRadioButton from "../inputs/custom_radio_button";
import CustomAutocomplete from "../inputs/custom_auto_complete";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = {
  joiningtext: {
    fontSize: font_sizes.font_25
  },
  spacing: {
    padding: "10px 0"
  },
  maincontent: {
    marginTop: "2.9375em"
  },
  joining: {
    width: "494px",
    margin: "0 auto",
    border: `1px solid` + color.primary_palette.franklin_purple,
    padding: "2.25em 3em"
  },
  maintrade: {
    marginTop: "10px",
    color: "#292929",
    fontSize: font_sizes.font_18
  },
  formhelper: {
    color: "#7e7e7e",
    fontSize: font_sizes.font_12
  },
  icon: {
    color: color.form_colors.blueberry_purple,
    fontSize: "0.625em",
    verticalAlign: "super",
    padding: "0 0.125em"
  },
  inputWidth: {
    width: "18.125em",
    "& .MuiFormControl-fullWidth": {
      margin: "0"
    },
    "& .MuiAutocomplete-root": {
      width: "18.125em"
    },
    "& .MuiInputBase-input": {
      textAlign: "center",
      fontSize: font_sizes.font_18,
      fontFamily: "gillsans_light"
    }
  },
  root: {
    margin: 0,
    marginTop: "-20px",
    "& .MuiInputBase-input": {
      textAlign: "center"
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: 0,
      fontSize: font_sizes.font_18,
      fontFamily: "gillsans_light"
    }
  },
  headingTxt: {
    fontFamily: "OptimaLT",
    fontSize: font_sizes.font_30,
    margin: "0 10px",
    color: color.form_colors.blueberry_purple
  },
  radio_text: {
    "& .MuiTypography-root": {
      fontSize: font_sizes.font_18
    },
    "& .MuiIconButton-label": {
      color: color.primary_palette.franklin_purple
    }
  },
  bold: {
    color: color.secondary_palette.grays.medium_gray,
    fontFamily: "gillsans_bold"
  },
  NotUsa: {
    color: color.form_colors.royal_purple_1
  }
};

class JoiningTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };
  }
  handleChange = event => {
    this.setState({
      option: event.target.value
    });
  };

  //TODO : replace with original images while integrating the landing page
  render() {
    console.log("trade", this.props.trades);
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid item container justify="center" md={12}>
            <Grid item container justify="center">
              <Grid container item justify="center">
                <Grid justify="center">
                  <SvgLittlePurpleStar />
                </Grid>
                <Typography
                  variant="h3"
                  component="h3"
                  color="primary"
                  className={classes.headingTxt}
                >
                  {strings.add_trade.titles.thank_you}
                </Typography>
                <Grid justify="center">
                  <SvgLittlePurpleStar />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify="center" md={12}>
            <Grid
              item
              container
              justify="center"
              className={classes.joiningtext}
            >
              {strings.add_trade.titles.develop}
            </Grid>
          </Grid>
          <Grid item container justify="center" md={12}>
            <Grid container className={classes.maincontent}>
              <Grid container className={classes.joining}>
                <Grid item container className={classes.spacing}>
                  <Grid item container justify="center" md={12}>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      md={4}
                      className={classes.maintrade}
                    >
                      {strings.add_trade.titles.main_trade}
                      <Element_Required_Icon
                        color={color.form_colors.blueberry_purple}
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      alignItems="flex-end"
                      md={8}
                      className={classes.inputWidth}
                    >
                      <CustomAutocomplete
                        className={classes.root}
                        SearchChange={this.onSearchChange}
                        id="debug"
                        debug
                        options={this.props.trades}
                        getOptionLabel={option => option.name}
                        placeholder={strings.add_trade.titles.Architecture}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      className={classes.formhelper}
                    >
                      <span>
                        {strings.add_trade.titles.what_you_do}
                        <span className={classes.bold}>
                          {strings.add_trade.titles.do}
                        </span>
                        {strings.add_trade.titles.what_you_do_remain}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container className={classes.spacing}>
                  <Grid item container justify="center" md={12}>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      md={5}
                      className={classes.maintrade}
                    >
                      {strings.add_trade.titles.location}
                      <Element_Required_Icon
                        color={color.form_colors.blueberry_purple}
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item container justify="flex-start" md={7}>
                      <CustomTextField
                        placeholder={strings.add_trade.titles.city_zip}
                        className={classes.inputWidth}
                      />
                    </Grid>
                    <Grid item container className={classes.formhelper} md={12}>
                      <Grid item container md={9}>
                        <Grid
                          item
                          container
                          justify="flex-start"
                          className={classes.formhelper}
                        >
                          {strings.add_trade.titles.currently_reside}{" "}
                        </Grid>
                      </Grid>
                      <Grid item container justify="flex-end" md={3}>
                        <CustomLink
                          container
                          justify="flex-end"
                          underline="always"
                          className={classes.NotUsa}
                        >
                          <label>{strings.add_trade.titles.not_usa} </label>
                        </CustomLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container className={classes.spacing}>
                  <Grid item container justify="flex-start" md={12}>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      md={7}
                      className={classes.maintrade}
                    >
                      {strings.add_trade.titles.student}{" "}
                      <Element_Required_Icon
                        color={color.form_colors.blueberry_purple}
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item container justify="flex-start" md={5}>
                      <RadioGroup
                        aria-label="position"
                        name="position"
                        row
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio color="primary" />}
                          label="YES"
                          labelPlacement="start"
                        />

                        <FormControlLabel
                          value="No"
                          control={<Radio color="primary" />}
                          label="NO"
                          labelPlacement="start"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(JoiningTrade);
