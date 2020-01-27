import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { color, font_sizes } from "../../utilities/themes";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import _ from "lodash";

import strings from "../../utilities/strings";
import CustomButton from "../navigations/custom_buttons";
import CustomLink from "../navigations/custom_links";
import Close_Icon from "../data_display/icons/Close";
import Element_Required_Icon from "../data_display/icons/ElementRequiered";
import CompassRose_Icon from "../data_display/icons/CompassRose";
import CustomPlainInputField from "../inputs/custom_plain_input_field";
import Add_Icon_Outlined from "../../components/data_display/icons/Add";
import CustomCheckbox from "../inputs/custom_checkbox";
import CustomAutocomplete from "../inputs/custom_auto_complete";
import { JoinusApi } from "../../redux/api";

const useStyles = {
  add_experience: {
    border: `1px solid` + color.primary_palette.franklin_purple,
    padding: "2.5625em",
    width: '700px',
  },
  cross: {
    textAlign: "right"
  },
  cross_icon: {
    fontSize: font_sizes.font_15
  },
  addlink: {
    fontSize: font_sizes.font_25,
    fontWeight: "300",
    textTransform: "uppercase"
  },
  addMain: {
    textAlign: "center",
    paddingBottom: "0.625em"
  },
  icon: {
    fontSize: font_sizes.font_10,
    color: color.primary_palette.franklin_purple,
    verticalAlign: "super"
  },
  root: {
    "& .MuiFormControl-root": {
      border: `1px solid` + color.secondary_palette.grays.light_gray,
      margin: 0
    }
  },
  compass: {
    fontSize: font_sizes.font_21
  },
  spanColor: {
    fontSize: font_sizes.font_14
  },
  margin: {
    width: "100%",
    "& .MuiFormControlLabel-labelPlacementTop": {
      margin: 0,
      width: "100%"
    },
    "& .MuiInputBase-root": {
      width: "100%",
      border: `solid 1px` + color.secondary_palette.grays.shadow_gray,
      padding: "0.875em 1.0625em"
    },
    '& .MuiInputBase-root': {
      padding:'0.875em 0',
      width: '100%',
      border: `solid 1px` + color.secondary_palette.grays.shadow_gray,
    }
  },
  spacing: {
    padding: "0.1875em 0",
    fontSize: font_sizes.font_14
  },
  spacing_block: {
    padding: "0.3125em 0"
  },
  month: {
    width: "96%",
    "& .MuiInputBase-root": {
      height: "1.5625em",
      borderRadius: 0,
      padding: 0
    },
    "& .MuiSelect-root": {
      padding: 0
    },
    "& label + .MuiInput-formControl": {
      marginTop: 0
    },
    "& .MuiSelect-select": {
      "&:focus": {
        background: "none"
      }
    }
  },
  colorbtn: {
    color: color.secondary_palette.grays.shadow_gray + `!important`,
    width: "100%",
    textTransform: "capitalize",
    fontSize: font_sizes.font_14
  },
  colortext: {
    fontSize: font_sizes.font_12,
    color: color.secondary_palette.grays.shadow_gray,
    fontFamily: "avenir_roman"
  },
  icon_font: {
    "& .MuiSvgIcon-root": {
      fontSize: font_sizes.font_14
    }
  },
  entity_font: {
    fontSize: font_sizes.font_12,
    color: color.secondary_palette.grays.shadow_gray
  },
  textArea: {
    width: "100%",
    height: "3.0625em !important",
    resize: "none",
    outline: "none"
  },
  listTextArea: {
    width: "100%",
    padding: "0.25em 0 0 1.125em",
    margin: 0
  },
  checkboxSpacing: {
    margin: 0,
    marginBottom: "0.125em",
    "& .MuiCheckbox-root": {
      padding: 0
    }
  },
  checkboxpostion: {
    margin: 0,
    marginBottom: "0.125em",
    marginTop: "-0.125em",
    "& .MuiCheckbox-root": {
      padding: 0
    }
  },
  spacing_btn: {
    paddingTop: "1.875em"
  },
  spacing_block1: {
    paddingTop: "15px"
  },
  addtext: {
    fontSize: font_sizes.font_14,
        fontWeight: 600,
  },
  add_icon: {
    verticalAlign: "middle"
  },
  align: {
    fontSize: font_sizes.font_14,
    padding: "0 10px"
  },
  NotUsa: {
    color: color.form_colors.royal_purple_1
  }
};

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.onTextInput = _.debounce(this.onTextInput, 500);
    this.state = {
      fetchingInstitutes: false,
      institutes: []
    };
  }

  handleInput = evt => {
    this.text = evt.target.value;
    this.onTextInput();
  };

  onTextInput = () => {
    if (_.size(this.text) >= 3) {
      this.setState({ fetchingInstitutes: true }, async () => {
        const res = await JoinusApi.fetchAllInstitutes({ name: this.text });
        const { data } = res;
        if (!data.error.error) {
          this.setState({ institutes: data.data, fetchingInstitutes: false });
        }
      });
    }
  };

  onInstituteSelect = (e, value) => {
    console.log(e, value);
  };

  render() {
    const { classes } = this.props;
    const { fetchingInstitutes, institutes } = this.state;
    return (
      <>
        <div className={classes.add_experience}>
          <div className={classes.addMain}>
            <div className={classes.addlink}>
              {strings.add_education.titles.add_education}
            </div>
            <div className={classes.addtext}>
              {strings.add_education.titles.edu_describe}
            </div>
            <div className={classes.addtext}>
              {strings.add_education.titles.add_school}
            </div>
          </div>
          <div className={classes.spacing_block}>
            <Grid container md={12}>
              <Grid
                container
                justify="flex-start"
                md={6}
                className={classes.spacing}
              >
                {strings.add_education.titles.institution}
                <Element_Required_Icon
                  color={color.form_colors.blueberry_purple}
                  className={classes.icon}
                />
              </Grid>
              <Grid container justify="flex-end" md={6}>
                <CompassRose_Icon
                  color={color.form_colors.blueberry_purple}
                  className={classes.compass}
                />
              </Grid>
            </Grid>
            <CustomAutocomplete
              disableOpenOnFocus
              className={classes.root}
              SearchChange={this.onSearchChange}
              onChange={this.onInstituteSelect}
              options={institutes}
              getOptionLabel={option => option.name}
              loading={fetchingInstitutes}
              id="debug"
              freeSolo
              debug
              placeholder={strings.add_education.titles.select_school}
              onTextChange={this.handleInput}
            />
          </div>
          <div className={classes.spacing_block}>
            <div className={classes.spacing}>
              {strings.add_education.titles.subtitle}
            </div>
            <div className={classes.margin}>
              <CustomPlainInputField placeholder={strings.add_education.titles.candidate} />
            </div>
          </div>
          <div className={classes.spacing_block}>
            <Grid container md={12}>
              <Grid container justify="flex-start" md={4}>
                <Grid container justify="flex-start" className={classes.spanColor} md={6}>
                  {strings.add_education.titles.city_state}
                </Grid>
                <Grid container justify="flex-end" className={classes.spanColor} md={6}>
                <CustomLink
                  container
                  justify="flex-end"
                  underline="always"
                  className={classes.NotUsa}
                >
                  <label>{strings.add_trade.titles.not_usa} </label>
                </CustomLink>
                </Grid>
                <Grid container justify="flex-end" md={12}>
                  <div className={classes.margin}>
                    <CustomPlainInputField />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.spacing_block}>
            <Grid container md={12}>
              <Grid container justify="flex-start" md={5}>
                <div>
                  <span className={classes.spanColor}>
                    {strings.add_education.titles.from}
                  </span>
                  <Element_Required_Icon
                    color={color.form_colors.blueberry_purple}
                    className={classes.icon}
                  />
                </div>
                <Grid container justify="flex-start" md={12}>
                  <Grid container justify="flex-start" md={6}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container justify="flex-end" md={6}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={2}></Grid>
              <Grid container justify="flex-start" md={5}>
                <Grid
                  container
                  justify="flex-start"
                  className={classes.spanColor}
                >
                  {strings.add_education.titles.expected_graduation}
                </Grid>
                <Grid container justify="flex-start" md={12}>
                  <Grid container justify="flex-start" md={6}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container justify="flex-end" md={6}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className={classes.spacing_block}>
            <Grid container md={12}>
              <Grid container justify="flex-start" md={6}>
                <div>
                  <span className={classes.spanColor}>
                    {strings.add_education.titles.program_level}
                  </span>
                  <Element_Required_Icon
                    color={color.form_colors.blueberry_purple}
                    className={classes.icon}
                  />
                </div>
                <Grid container justify="flex-start" md={12}>
                  <Grid container justify="flex-start" md={12}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid md={2}></Grid> */}
              <Grid container justify="flex-start" md={6}>
                <Grid container justify="flex-start" className={classes.align}>
                  {strings.add_education.titles.degree}
                </Grid>
                <Grid container justify="flex-end" md={12}>
                  <Grid container justify="flex-end" md={12}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className={classes.spacing_block}>
            <Grid container md={12}>
              <Grid container justify="flex-start" md={6}>
                <div>
                  <span className={classes.spanColor}>
                    {strings.add_education.titles.Major}
                  </span>
                  <Element_Required_Icon
                    color={color.form_colors.blueberry_purple}
                    className={classes.icon}
                  />
                </div>
                <Grid container justify="flex-start" md={12}>
                  <Grid container justify="flex-start" md={12}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="flex-start" md={6}>
                <Grid container justify="flex-start" className={classes.align}>
                  {strings.add_education.titles.minor}
                </Grid>
                <Grid container justify="flex-end" md={12}>
                  <Grid container justify="flex-end" md={12}>
                    <FormControl variant="outlined" className={classes.month}>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className={classes.spacing_block}>
            <div>
              <div className={classes.spacing}>
                {strings.add_education.titles.headline}
                <Element_Required_Icon
                  color={color.form_colors.blueberry_purple}
                  className={classes.icon}
                />
                <span className={classes.spanColor}>
                  <CustomCheckbox
                    className={classes.checkboxSpacing}
                  ></CustomCheckbox>
                  {strings.add_education.titles.make_headline}
                </span>
              </div>
              <div className={classes.margin}>
                <CustomPlainInputField />
                <Grid
                  container
                  justify="flex-start"
                  md={12}
                  className={classes.colortext}
                >
                  {strings.add_education.titles.now_displayed}
                </Grid>
              </div>
            </div>
            <div className={classes.spacing_block1}>
              <Grid container justify="flex-start" md={12}>
                <Grid
                  container
                  justify="flex-start"
                  md={6}
                  className={classes.spanColor}
                >
                  {strings.add_education.titles.highlights}
                </Grid>
                <ul className={classes.listTextArea}>
                  <li>
                    <Grid container justify="flex-start" md={12}>
                      <TextareaAutosize
                        className={classes.textArea}
                      ></TextareaAutosize>
                    </Grid>
                  </li>
                </ul>
                <Grid container justify="flex-start" md={12}>
                  <CustomButton className={classes.colorbtn}>
                    <Grid
                      container
                      justify="flex-start"
                      md={12}
                      className={classes.icon_font}
                    >
                      <Grid
                        container
                        justify="flex-start"
                        md={12}
                        className={classes.spanColor}
                      >
                        <Add_Icon_Outlined className={classes.add_icon} />{" "}
                        {strings.add_education.titles.add_highlight}
                      </Grid>
                    </Grid>
                  </CustomButton>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(AddEducation);
