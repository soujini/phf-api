import React from "react";
import {
  Breadcrumbs,
  Grid,
  Paper,
  InputAdornment,
  Modal,
  colors
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import strings from "../../utilities/strings";
import { color, font_sizes } from "../../utilities/themes";
import {
  FieldControl,
  FieldGroup,
  FormBuilder,
  Validators
} from "react-reactive-form";
import ShowPassword_Icon from "../../components/data_display/icons/ShowPassword";
import SvgTradeWorksIcon from "../../components/data_display/icons/TradeWorksIcon";
import Close_Icon from "../../components/data_display/icons/Close";
import CustomButton from "../../components/navigations/custom_buttons";
import { Route, withRouter } from "react-router-dom";
import { LoginActions } from "../../redux/actions";
import {
  ATLEAST_ONE_CAPITAL_LETTER,
  NUM_OR_SYMBOL,
  PASSWORD_REGEX,
  REGEX_EMAIL,
  REGEX_EMIAL_END_WITH_DOT,
  restrictLeadingSpace
} from "../../validations/validations";
import CustomInputLabel from "../../components/data_display/custom_label";
import Element_Required_Icon from "../../components/data_display/icons/ElementRequiered";
import HidePassword_Icon from "../../components/data_display/icons/HidePassword";
import SvgLightingBolt from "../../components/data_display/icons/LightingBolt";
import Ribbon from "../../components/data_display/icons/Ribbon";
import CustomCheckbox from "../../components/inputs/custom_checkbox";
import CustomTextField from "../../components/inputs/custom_textfields";
import CustomLink from "../../components/navigations/custom_links";

const useStyles = {
  popup: {
    backgroundColor: color.secondary_palette.grays.fafa_gray,
    padding: "1.125rem",
    border: `2px solid ${color.primary_palette.franklin_purple}`,
    marginTop: "70px",
    width: "360px",
    margin: "0 auto"
  },
  closeBtn: {
    padding: 0,
    minWidth: "20px",
    "& .MuiButton-label": {
      "& svg": {
        fontSize: "1.25rem"
      }
    }
  },
  formContainer: {
    paddingTop: "18px",
    paddingLeft: "4.8125rem",
    paddingRight: "4.8125rem"
  },
  submit_button: {
    width: "13.39375rem",
    border: `0.08125rem solid ${color.form_colors.blueberry_purple}`,
    backgroundColor: color.primary_palette.white,
    margin: "1rem 0 1rem 0",
    fontSize: "21.3px",
    padding: "0 21px"
  },
  auto_email: {
    color: color.primary_palette.christmas_red,
    position: "relative",
    top: "8px",
    "& .MuiFormControlLabel-label": {
      fontSize: "0.625em"
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: 0
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.625em",
      color: color.primary_palette.black,
      marginLeft: "2px",
      display: "inline-block"
    }
  },
  errorText: {
    position: "relative",
    top: "-0.5625rem",
    fontSize: font_sizes.font_12,
    color: color.primary_palette.christmas_red
  },
  successText: {
    position: "relative",
    top: "-0.5625rem",
    fontSize: font_sizes.font_12,
    color: color.form_colors.sucess_color
  },
  textfieldSpark: {
    "& .MuiInput-underline:hover:after": {
      borderBottomColor: color.primary_palette.highlight_purple,
      transform: "scaleX(100)"
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "0.5px solid rgba(0, 0, 0, 0.87)"
    }
  },
  textfield: {
    fontSize: font_sizes.font_18,
    color: color.form_colors.textfield_color,
    width: "100%",
    marginBottom: "12px",
    "& .MuiInput-underline:hover:after": {
      borderBottomColor: color.primary_palette.highlight_purple,
      transform: "scaleX(100)",
      transitionDuration: "1s"
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "0.5px solid rgba(0, 0, 0, 0.87)"
    },
    "& .MuiInput-underline:after": {
      bottom: "0",
      content: "",
      display: "block",
      left: "0",
      margin: "0 auto",
      position: "absolute",
      right: "0",
      transform: "scaleX(0)",
      transition: "all 4s",
      width: "1%"
    },
    "& .MuiFormLabel-root.Mui-focused": {
      fontSize: font_sizes.font_14
    },
    "& .MuiFormHelperText-root.Mui-error": {
      margin: "0",
      position: "relative",
      top: "0.25rem"
    },
    "& .MuiInputBase-input": {
      padding: "6px 0 2px"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: `${color.primary_palette.franklin_purple} !important`
    }
  },
  textFieldSuccess: {
    fontSize: font_sizes.font_18,
    color: color.form_colors.textfield_color,
    width: "100%",
    marginBottom: "12px",
    "& .MuiFormLabel-root.Mui-focused": {
      fontSize: font_sizes.font_14
    },
    "& .MuiFormHelperText-root.Mui-error": {
      margin: "0",
      position: "relative",
      top: "0.25rem"
    },
    "& .MuiInputBase-input": {
      padding: "6px 0 2px"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: color.form_colors.sucess_color
    },
    "& .MuiInput-underline:after": {
      textAlign: "center",
      transition: ".3s width ease-in-out !important",
      borderBottomColor: color.form_colors.sucess_color
    }
  },
  footerContainer: {
    textAlign: "center",
    fontSize: "14px",
    padding: "0 12px 12px",
    color: color.form_colors.royal_purple_1
  }
};

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      loginError: null,
      isInputSpark: false,
      hasEmailError: false,
      closeIcon: false,
      showPassword: false,
      showEmailSuggestion: false,
      isLightBolt: false,
      firstNameValid: false,
      lastNameValid: false,
      message: ""
    };
    this.initForm();
  }

  initForm = () => {
    this.loginForm = FormBuilder.group({
      email: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.maxLength(20)])
      ],
      prepopulateEmail: [""]
    });
  };

  componentDidMount() {
    /**
     * to open the email autocomplete statement
     */
    this.loginForm.get("email").valueChanges.subscribe(val => {
      if (REGEX_EMIAL_END_WITH_DOT.test(val)) {
        this.loginForm
          .get("prepopulateEmail")
          .setValue("", { emitModelToViewChange: false, emitEvent: false });
        this.setState({ showEmailSuggestion: true });
      } else {
        this.setState({ showEmailSuggestion: false });
        this.setState({ hasEmailError: val && !REGEX_EMAIL.test(val) });
        if (/^[0-9.\b]+$/.test(val)) {
          if (val.indexOf(".") !== -1) {
            val = val.replace(/\./g, "");
          }
          if (val && val.length >= 10) {
            val = val.slice(0, 10);
          }
          if (val && val.length === 10) {
            val = val.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3");
            this.setState({ hasEmailError: false });
          }
          this.loginForm.get("email").setValue(val, {
            emitModelToViewChange: false,
            emitEvent: false
          });
        }
      }
    });

    this.loginForm.valueChanges.subscribe(val => {
      const { clearLogInProps } = this.props;
      clearLogInProps();
    });

    if (this.props.openSucessModal) {
      this.loginForm.reset();
    }
  }

  clearErrors = () => {
    const { clearLogInProps } = this.props;
    clearLogInProps();
    this.setState({
      loginError: null,
      hasEmailError: false
    });
  };

  /**
   * on submitting the form
   */
  submitForm = () => {
    const { login } = this.props;
    this.clearErrors();
    login(this.loginForm.value, () => {
      this.props.history.push("/joinus_wizard");
    });
  };

  /**
   * checking for eight characters in passsword validation
   */
  hasEightChars = () => {
    const text = this.loginForm.get("password").value || "";
    return text.length >= 8;
  };
  /**
   * checking for atleast one capital letter in passsword validation
   */
  hasCapitalLetter = () => {
    const text = this.loginForm.get("password").value || "";
    return ATLEAST_ONE_CAPITAL_LETTER.test(text);
  };
  /**
   * checking for number or symbol in passsword validation
   */
  hasNumberOrSymbol = () => {
    const text = this.loginForm.get("password").value || "";
    return NUM_OR_SYMBOL.test(text);
  };
  /**
   * checking for passsword validation
   */
  hasPasswordValidation = () => {
    const text = this.loginForm.get("password").value || "";
    return PASSWORD_REGEX.test(text);
  };
  /**
   * to set the email when autosuggest popup is clicked
   */
  prepopulateEmail = (value, e) => {
    this.loginForm
      .get("email")
      .setValue(value, { emitModelToViewChange: false });
    this.setState({ showEmailSuggestion: false });
  };

  handleClickShowPassword = () => {
    let showPassword = !this.state.showPassword;
    this.setState({
      showPassword
    });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  closeModal = () => {
    this.setState({
      closeIcon: false
    });
    this.props.closeModal();
  };

  goto = path => {
    this.closeModal();
    this.props.history.push(`/${path}`);
  };

  toggleFeildSpark = () => {
    let isInputSpark = !this.state.isInputSpark;
    this.setState({
      isInputSpark
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      const { user } = this.props;
      if (user) {
        this.closeModal();
        this.props.history.push(`/joinus_wizard`);
      }
    }
  }

  render() {
    const { loggingIn, loginError, classes, open } = this.props;
    const {
      hasEmailError,
      isInputSpark,
      showPassword,
      showEmailSuggestion
    } = this.state;
    const emailErrorCodes = [1002, 1004, 1010, 1011, 1029];
    const phoneNumberErrorCodes = [1006, 1012, 1030];
    const passwordErrorCodes = [1001, 1005];
    let isEmailError =
      loginError &&
      loginError.error &&
      (typeof loginError.error.message == "string"
        ? emailErrorCodes.includes(loginError.error.code) ||
          phoneNumberErrorCodes.includes(loginError.error.code)
        : emailErrorCodes.includes(loginError.error.message.code) ||
          phoneNumberErrorCodes.includes(loginError.error.message.code));
    let isPasswordError =
      loginError &&
      loginError.error &&
      (typeof loginError.error.message == "string"
        ? passwordErrorCodes.includes(loginError.error.code)
        : passwordErrorCodes.includes(loginError.error.message.code));
    // let isEmailError = (loginError && loginError.error && loginError.error.message && loginError.error.message.message ? (loginError.error.message.message.includes('email') || loginError.error.message.includes('phone')) ? loginError.error.message.message : (loginError.error.message && ));
    // let isPasswordError = loginError && loginError.error && loginError.error.message.toLowerCase().includes('password') ? loginError.error.message : '';
    return (
      <React.Fragment>
        {
          <Modal
            open={open}
            aria-labelledby="modal-title"
            disablePortal
            aria-describedby="modal-description"
            disableAutoFocus
          >
            <Grid container className={classes.modalContainer}>
              {/* <Grid md={4}></Grid> */}
              <Grid container justify="center" className={classes.popup}>
                <Grid container justify="flex-end" md={12}>
                  <CustomButton
                    onClick={this.props.closePopup}
                    className={classes.closeBtn}
                  >
                    <Close_Icon onClick={this.closeModal} />
                  </CustomButton>
                </Grid>
                <Grid container justify="center" md={12}>
                  <img src="/assets/images/Top Sign In Quill.svg" alt="" />
                </Grid>
                <Grid className={classes.formContainer}>
                  <FieldGroup
                    key={`${showPassword} ${isInputSpark} ${loggingIn}`}
                    control={this.loginForm}
                    render={({ get, invalid, reset, value }) => (
                      <form className={classes.form}>
                        <FieldControl
                          name="email"
                          render={({ handler, touched, hasError }) => (
                            <div>
                              {showEmailSuggestion && (
                                <div className={classes.auto_email}>
                                  <CustomCheckbox
                                    label={`Do you mean ${
                                      this.loginForm.get("email").value
                                    }com?`}
                                    labelPlacement="start"
                                    text_transform="none"
                                    onChange={e =>
                                      this.prepopulateEmail(
                                        `${
                                          this.loginForm.get("email").value
                                        }com`
                                      )
                                    }
                                  />
                                  <CustomInputLabel
                                    is_input_label={true}
                                    color={color.primary_palette.black}
                                    label_name="Yes"
                                  />
                                </div>
                              )}
                              <p
                                className={classes.errorText}
                                style={{ margin: 0 }}
                              >
                                {/* {loginError && loginError.error ? loginError.error.message : null} */}
                                {isEmailError
                                  ? loginError.error.message
                                    ? loginError.error.message
                                    : loginError.error.message.message
                                  : null}
                              </p>
                              <CustomTextField
                                label={
                                  !showEmailSuggestion &&
                                  (!loginError || !loginError.error)
                                    ? strings.login.titles.email_phone_number
                                    : null
                                }
                                className={`
                                  ${
                                    !this.loginForm.get("email").valid ||
                                    hasEmailError
                                      ? classes.textfield
                                      : classes.textFieldSuccess
                                  }
                                `}
                                error={
                                  (touched && hasError("required")) ||
                                  hasError("pattern") ||
                                  hasEmailError ||
                                  (loginError && loginError.error)
                                }
                                {...handler()}
                                onKeyPress={e => restrictLeadingSpace(e)}
                              />
                              <div className={classes.errorText}>
                                {touched &&
                                  hasError("required") &&
                                  `${strings.login.errors.email_phone_required}`}
                              </div>
                              <div className={classes.errorText}>
                                {touched &&
                                  hasEmailError &&
                                  `${strings.login.errors.invalid_email_phone}`}
                              </div>
                            </div>
                          )}
                        />
                        <FieldControl
                          name="password"
                          render={({ handler, touched, value, hasError }) => (
                            <div>
                              <p
                                className={classes.errorText}
                                style={{ margin: 0 }}
                              >
                                {/* {loginError && loginError.error ? loginError.error.message : null} */}
                                {isPasswordError
                                  ? typeof loginError.error.message == "string"
                                    ? loginError.error.message
                                    : loginError.error.message.message
                                  : null}
                              </p>
                              <CustomTextField
                                label={
                                  !loginError || !loginError.error
                                    ? strings.join_us.titles.password
                                    : null
                                }
                                // inputProps={{ maxLength: 20 }}
                                error={
                                  (this.loginForm.get("password").value &&
                                    !this.hasEightChars() &&
                                    !this.hasCapitalLetter() &&
                                    !this.hasNumberOrSymbol()) ||
                                  (touched && hasError("maxLength"))
                                }
                                className={
                                  this.hasPasswordValidation() ||
                                  (touched && hasError("maxLength"))
                                    ? classes.textFieldSuccess
                                    : classes.textfield
                                }
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment
                                      position="end"
                                      tabIndex="-1"
                                      aria-label="toggle password visibility"
                                      className={classes.password_icon}
                                      onClick={this.handleClickShowPassword}
                                      onMouseDown={this.handleMouseDownPassword}
                                    >
                                      {showPassword ? (
                                        <ShowPassword_Icon
                                          color={
                                            color.primary_palette
                                              .franklin_purple
                                          }
                                          style={{
                                            fontSize: "1.3125rem",
                                            cursor: "pointer"
                                          }}
                                        />
                                      ) : (
                                        <HidePassword_Icon
                                          style={{
                                            fontSize: "1.3125rem",
                                            cursor: "pointer"
                                          }}
                                        />
                                      )}
                                    </InputAdornment>
                                  )
                                }}
                                {...handler()}
                                onKeyPress={e => restrictLeadingSpace(e)}
                              />
                              {this.loginForm.get("password").value ? (
                                <div>
                                  <span
                                    className={
                                      this.hasEightChars() ||
                                      this.hasPasswordValidation()
                                        ? classes.successText
                                        : classes.errorText
                                    }
                                  >
                                    {strings.join_us.messages.eight_chars}.
                                  </span>
                                  <span
                                    className={
                                      this.hasCapitalLetter() ||
                                      this.hasPasswordValidation()
                                        ? classes.successText
                                        : classes.errorText
                                    }
                                  >
                                    {strings.join_us.messages.one_letter}.
                                  </span>
                                  <span
                                    className={
                                      this.hasNumberOrSymbol() ||
                                      this.hasPasswordValidation()
                                        ? classes.successText
                                        : classes.errorText
                                    }
                                  >
                                    {strings.join_us.messages.number_symbol}
                                  </span>
                                </div>
                              ) : null}
                              <div className={classes.errorText}>
                                {touched &&
                                  hasError("required") &&
                                  `${strings.join_us.errors.password_required}`}
                              </div>
                              <span className={classes.errorText}>
                                {touched &&
                                  hasError("maxLength") &&
                                  `${strings.join_us.errors.password_max}`}
                              </span>
                            </div>
                          )}
                        />
                        <Grid container item justify="flex-start">
                          <CustomCheckbox label="remember me" />
                        </Grid>
                        <Grid
                          container
                          item
                          justify="center"
                          alignItems="center"
                        >
                          <CustomButton
                            variant="outlined"
                            color="primary"
                            size="large"
                            custom_type="submit"
                            className={classes.submit_button}
                            onClick={() => this.submitForm(invalid)}
                            disabled={
                              invalid ||
                              loggingIn ||
                              hasEmailError ||
                              !(
                                this.hasEightChars() &&
                                this.hasCapitalLetter() &&
                                this.hasNumberOrSymbol()
                              )
                            }
                            endIcon={
                              invalid ||
                              hasEmailError ||
                              !(
                                this.hasEightChars() &&
                                this.hasCapitalLetter() &&
                                this.hasNumberOrSymbol()
                              ) ? (
                                ""
                              ) : (
                                <Ribbon
                                  color={loggingIn ? "" : "primary"}
                                  style={{
                                    fontSize: "47px",
                                    marginTop: "-3px"
                                  }}
                                />
                              )
                            }
                          >
                            {strings.landing_page.titles.welcome}
                          </CustomButton>
                          {invalid}
                        </Grid>
                      </form>
                    )}
                  />
                </Grid>
                <Grid container justify="space-between">
                  <Grid
                    item
                    xs={6}
                    className={classes.footerContainer}
                    style={{
                      color:
                        loginError && loginError.error
                          ? color.primary_palette.christmas_red
                          : ""
                    }}
                  >
                    {strings.login.titles.forgot_your}{" "}
                    <CustomLink
                      underline="always"
                      color={loginError && loginError.error ? "error" : ""}
                    >
                      <label>{strings.login.titles.password}</label>
                    </CustomLink>{" "}
                    {strings.login.titles.or}{" "}
                    <CustomLink
                      underline="always"
                      color={loginError && loginError.error ? "error" : ""}
                    >
                      <label>{strings.login.titles.email}?</label>
                    </CustomLink>
                  </Grid>
                  <Grid item xs={5} className={classes.footerContainer}>
                    <p style={{ margin: 0 }}>
                      {strings.login.titles.not_member}
                    </p>
                    <CustomLink
                      underline="always"
                      onClick={() => this.goto("join_us")}
                    >
                      <label>{strings.login.titles.join_here}!</label>
                    </CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid md={4}></Grid> */}
            </Grid>
          </Modal>
        }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, loginError, user } = state.Login;
  return {
    loggingIn,
    loginError,
    user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...LoginActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(useStyles, { withTheme: true })(LoginModal)));
