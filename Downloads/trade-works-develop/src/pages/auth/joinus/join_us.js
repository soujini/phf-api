/**
 * Join Us page View
 */
import { Breadcrumbs, Grid, InputAdornment, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { FieldControl, FieldGroup, FormBuilder, Validators } from 'react-reactive-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomInputLabel from '../../../components/data_display/custom_label';
import Close_Icon from '../../../components/data_display/icons/Close';
import Element_Required_Icon from '../../../components/data_display/icons/ElementRequiered';
import HidePassword_Icon from '../../../components/data_display/icons/HidePassword';
import SvgLightingBolt from '../../../components/data_display/icons/LightingBolt';
import Ribbon from '../../../components/data_display/icons/Ribbon';
import ShowPassword_Icon from '../../../components/data_display/icons/ShowPassword';
import SvgTradeWorksIcon from '../../../components/data_display/icons/TradeWorksIcon';
import CustomCheckbox from '../../../components/inputs/custom_checkbox';
import CustomTextField from '../../../components/inputs/custom_textfields';
import CustomButton from '../../../components/navigations/custom_buttons';
import CustomLink from '../../../components/navigations/custom_links';
import { JoinUsActions } from '../../../redux/actions';
import { color, font_sizes, px_to_rem_sizes } from '../../../utilities/themes';
import {
  ATLEAST_ONE_CAPITAL_LETTER,
  NUM_OR_SYMBOL,
  PASSWORD_REGEX,
  REGEX_EMAIL,
  REGEX_EMIAL_END_WITH_DOT,
  restrictLeadingSpace,
} from '../../../validations/validations';
import LandingHeader from '../../../components/landing_page/landing_header';
import LandingFooter from '../../../components/landing_page/landing_footer';
import strings from '../../../utilities/strings';
import SuccessPopupContent from '../../../components/Modals/success_modal/success_modal';
import SvgBenjaminStandard from '../../../components/data_display/icons/BenjaminStandard';
/**
 * Styling for the form
 */
const useStyles = {
  form: {
    backgroundColor: color.primary_palette.fafa_gray,
    border: `0.125rem solid ${color.primary_palette.franklin_purple}`,
    padding: '0 3.125rem',
    marginBottom: '3.125em',
    marginTop: '1.875em',
    minHeight: '46.375rem',
    paddingBottom: '30px',
  },
  tw_icon: {
    margin: '38px 0 13px 0',
    textAlign: 'center',
  },
  join_us_label: {
    fontSize: font_sizes.font_24,
    textAlign: 'center',
    color: color.primary_palette.franklin_purple,
    marginBottom: '41px',
  },
  textfield: {
    fontSize: font_sizes.font_18,
    color: color.form_colors.textfield_color,
    width: '288px',
    marginBottom: '12px',
    '& .MuiInput-underline:after': {
      bottom: '0',
      content: '',
      display: 'block',
      left: '0',
      margin: '0 auto',
      position: 'absolute',
      right: '0',
      transform: 'scaleX(0)',
      transition: 'all 4s',
      width: '1%',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      fontSize: font_sizes.font_14,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      margin: '0',
      position: 'relative',
      top: '0.25rem',
    },
    '& .MuiInputBase-input': {
      padding: '6px 0 2px',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: color.primary_palette.franklin_purple,
    },
  },
  textfieldFName: {
    fontSize: font_sizes.font_18,
    color: color.form_colors.textfield_color,
    width: '288px',
    marginBottom: '12px',
    '& .MuiInput-underline:hover:after': {
      borderBottomColor: color.primary_palette.highlight_purple,
      transform: 'scaleX(100)',
      transitionDuration: '1s'
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: '0.5px solid rgba(0, 0, 0, 0.87)',
    },
    '& .MuiInput-underline:after': {
      bottom: '0',
      content: '',
      display: 'block',
      left: '0',
      margin: '0 auto',
      position: 'absolute',
      right: '0',
      transform: 'scaleX(0)',
      transition: 'all 4s',
      width: '1%',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      fontSize: font_sizes.font_14,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      margin: '0',
      position: 'relative',
      top: '0.25rem',
    },
    '& .MuiInputBase-input': {
      padding: '6px 0 2px',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: color.primary_palette.franklin_purple,
    },
  },
  textFieldSuccess: {
    fontSize: font_sizes.font_18,
    color: color.form_colors.textfield_color,
    width: '288px',
    marginBottom: '12px',
    '& .MuiFormLabel-root.Mui-focused': {
      fontSize: font_sizes.font_14,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      margin: '0',
      position: 'relative',
      top: '0.25rem',
    },
    '& .MuiInputBase-input': {
      padding: '6px 0 2px',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: color.form_colors.sucess_color,
    },
    '& .MuiInput-underline:after': {
      textAlign: 'center',
      transition: '.3s width ease-in-out !important',
      borderBottomColor: color.form_colors.sucess_color,
    },
  },
  requiredIcon: {
    fontSize: '14.6px',
    position: 'relative',
    bottom: '12px',
    left: '5px',
    verticalAlign: 'super',
    color: color.primary_palette.franklin_purple,
  },
  password_icon: {
    '&:focus': {
      outline: 'none',
    },
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  join_us_button: {
    width: '13.39375rem',
    border: `0.08125rem solid ${color.form_colors.blueberry_purple}`,
    backgroundColor: color.primary_palette.white,
    margin: '2.5rem 0 2.6875rem 0',
    fontSize: '21.3px',
    padding: '0 21px',
  },
  modal_root: {
    '& div:first-child': {
      position: 'initial !important',
    },
  },
  modal: {
    width: '9.8125em',
    height: '6rem',
    border: `4px solid ${color.primary_palette.pine_green}`,
    backgroundColor: color.form_colors.gray,
    position: 'absolute',
    margin: '0px 170px',
    top: '22.8125em',
    padding: '1.8125em 0.8125em 2rem 1.1875rem',
    outlineColor: 'transparent',
    zIndex: '2',
  },
  cross_icon: {
    position: 'relative',
    top: '-19px',
    fontSize: '9px',
    left: '141px',
    cursor: 'pointer',
  },
  modal_title: {
    fontSize: '0.875rem',
    margin: '0',
    color: color.primary_palette.black,
    position: 'relative',
    top: '-18px',
  },
  modal_description: {
    fontSize: '0.875rem',
    margin: '0',
    color: '#4a4a4a',
    position: 'relative',
    top: '-17px',
  },
  breadcrumb: {
    marginTop: '0.75em',
    '& .MuiLink-underlineAlways': {
      borderBottomStyle: 'solid',
      borderBottomColor: color.primary_palette.franklin_purple,
      borderBottomWidth: px_to_rem_sizes.size_2,
      textDecoration: 'none',
    },
    '& label': {
      color: color.primary_palette.black,
      fontSize: '16px',
      fontWeight: '500',
      fontFamily: 'avenir_black_r',
    },
  },
  breadcrumbText: {
    color: color.primary_palette.franklin_purple + `!important`,
    fontSize: font_sizes.font_16,
    margin: '1.3125rem 0 0.1875rem 2.625em',
    fontWeight: '600 !important',
    margin: 0,
    fontFamily: 'gillsans_r !important',
   // fontFamily: 'gillsans !important',
  //  fontFamily: tradework_theme.typography.
  },
  account_exists: {
    fontSize: font_sizes.font_14,
    fontWeight: '600',
    color: color.primary_palette.franklin_purple,
  },
  terms_services: {
    fontSize: font_sizes.font_13,
    '& .MuiLink-underlineAlways': {
      color: color.primary_palette.black,
    },
  },
  auto_email: {
    color: '#c01f2a',
    marginLeft: '7px',
    position: 'relative',
    top: '8px',
    '& .MuiFormControlLabel-label': {
      fontSize: '0.625em',
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.625em',
      color: '#c01f2a',
      marginLeft: '2px',
      display: 'inline-block',
    },
  },
  errorText: {
    position: 'relative',
    top: '-0.5625rem',
    left: '1.4375rem',
    fontSize: font_sizes.font_12,
    color: color.primary_palette.christmas_red,
  },
  successText: {
    position: 'relative',
    top: '-0.5625rem',
    left: '1.4375rem',
    fontSize: font_sizes.font_12,
    color: color.form_colors.sucess_color,
  },
  phone_suggestion: {
    color: color.wizard_box_colors.shadow_gray,
    position: 'relative',
    top: '-0.5625rem',
    left: '1.4375rem',
    fontSize: font_sizes.font_12,
    fontFamily: 'gillsans_light',
  },
  textFieldError: {
    border: '1px solid red',
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    //transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  animation_textfield: {
    borderBottom: '2px solid red',
    transform: 'scaleX(150)',
  },
  align_phonenumber: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  error_msg: {
    color: color.primary_palette.christmas_red,
    fontSize: font_sizes.font_18,
    fontFamily: 'gillsans_r',
  },
};
/**
 * Join Us Component View
 */
class Join_Us extends Component {
  joinUsForm = FormBuilder.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
    email: ['', Validators.compose([Validators.required, Validators.pattern(REGEX_EMAIL)])],
    prepopulateEmail: [''],
    password: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(20)]),
    ],
    phonenumber: ['', Validators.compose([Validators.maxLength(12)])],
    userType: ['Individual'],
  });
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showEmailSuggestion: false,
      closeIcon: true,
      firstNameValid: false,
      lastNameValid: false,
      message: '',
    };
  }

  componentDidMount() {
    this.joinUsForm.get('firstName').statusChanges.subscribe(value => {
      value == 'VALID' && this.setState({ firstNameValid: true });
      this.closeModalOnValid();
    });

    this.joinUsForm.get('lastName').statusChanges.subscribe(value => {
      value == 'VALID' && this.setState({ lastNameValid: true });
      this.closeModalOnValid();
    });
    /**
     * to open the email autocomplete statement
     */
    this.joinUsForm.get('email').valueChanges.subscribe(val => {
      if (REGEX_EMIAL_END_WITH_DOT.test(val)) {
        this.joinUsForm.get('prepopulateEmail').setValue('', { emitModelToViewChange: false });
        this.setState({ showEmailSuggestion: true });
      } else {
        this.setState({ showEmailSuggestion: false });
      }
    });
    /**
     * allowing only numbers
     */
    this.joinUsForm.get('phonenumber').valueChanges.subscribe(value => {
      const re = /^[0-9.\b]+$/;
      if (value === '' || re.test(value)) {
        return;
      } else {
        this.joinUsForm.get('phonenumber').setValue('', { emitModelToViewChange: false });
        return;
      }
    });
    /**
     * removing phone number masking on value change
     */
    this.joinUsForm.get('phonenumber').onValueChanges.subscribe(value => {
      if (value.indexOf('.') !== -1) {
        this.joinUsForm.get('phonenumber').setValue(value.replace(/\./g, ''), { emitModelToViewChange: false });
      }
    });
    /**
     * format phone number.
     */
    this.joinUsForm.get('phonenumber').onBlurChanges.subscribe(val => {
      if (val && val.length === 10) {
        this.joinUsForm
          .get('phonenumber')
          .setValue(val.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3'), { emitModelToViewChange: false });
      }
    });

    this.joinUsForm.valueChanges.subscribe(val => {
      this.clearErrorMessages();
    });

    if (this.props.openSucessModal) {
      this.joinUsForm.reset();
    }
  }

  clearErrorMessages = () => {
    if (this.props.joinUsData && this.props.joinUsData.error && this.props.joinUsData.error.message) {
      setTimeout(() => {
        this.props.actions.setErrorMsg('');
      }, 10000);
    }
  };

  componentDidUpdate(prevProps) {
    this.clearErrorMessages();
    // if (this.props.clearForm && !this.props.joinUsData.error && !this.props.openSucessModal) {
    //   this.joinUsForm.reset();
    //   this.joinUsForm.get('userType').setValue('Individual', { emitModelToViewChange: false });
    // }
  }

  /**
   *close modal if firstname and last name is valid
   */
  closeModalOnValid = () => {
    this.state.firstNameValid && this.state.lastNameValid && this.closeModal();
  };

  /**
   *close modal
   */
  closeModal = () => {
    let closeIcon = false;
    this.setState({
      closeIcon,
    });
  };
  /**
   * on submitting the form
   */
  submitForm = () => {
    this.props.actions.joinUs(this.joinUsForm.value);
  };
  /**
   * checking for eight characters in passsword validation
   */
  hasEightChars = () => {
    const text = this.joinUsForm.get('password').value || '';
    return text.length >= 8;
  };
  /**
   * checking for atleast one capital letter in passsword validation
   */
  hasCapitalLetter = () => {
    const text = this.joinUsForm.get('password').value || '';
    return ATLEAST_ONE_CAPITAL_LETTER.test(text);
  };
  /**
   * checking for number or symbol in passsword validation
   */
  hasNumberOrSymbol = () => {
    const text = this.joinUsForm.get('password').value || '';
    return NUM_OR_SYMBOL.test(text);
  };
  /**
   * checking for passsword validation
   */
  hasPasswordValidation = () => {
    const text = this.joinUsForm.get('password').value || '';
    return PASSWORD_REGEX.test(text);
  };
  /**
   * to set the email when autosuggest popup is clicked
   */
  prepopulateEmail = (value, e) => {
    this.joinUsForm.get('email').setValue(value, { emitModelToViewChange: false });
    this.setState({ showEmailSuggestion: false });
  };
  /**
   * to hide/show the password when eye icon is clicked
   */
  handleClickShowPassword = () => {
    let showPassword = !this.state.showPassword;
    this.setState({
      showPassword,
    });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  //renders the form
  render() {
    const { showPassword, closeIcon, showEmailSuggestion } = this.state;
    const { classes, joinUsData } = this.props;
    return (
      <>
        <LandingHeader join_us={false} login={joinUsData.errorCode === 200 ? false : true} />
        <Grid container direction="column" justify="center" alignItems="center" className={classes.form_root}>
          <FieldGroup
            key={showPassword}
            control={this.joinUsForm}
            render={({ get, invalid, reset, value }) => (
              <form className={classes.form}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <img src="/assets/images/sucessDragonLogo.PNG" alt="img" />
                </Grid>
                <div className={classes.join_us_label}>{strings.landing_page.titles.join_us}</div>
                <FieldControl
                  name="firstName"
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <CustomTextField
                        label={strings.join_us.titles.firstName}
                        className={
                          !this.joinUsForm.get('firstName').valid ? classes.textfieldFName : classes.textFieldSuccess
                        }
                        error={(touched && hasError('required')) || hasError('maxLength') || hasError('minLength')}
                        icon={
                          <Element_Required_Icon
                            className={classes.requiredIcon}
                            color={
                              (touched && hasError('required')) || hasError('maxLength') || hasError('minLength')
                                ? color.primary_palette.christmas_red
                                : color.form_colors.blueberry_purple
                            }
                          />
                        }
                       
                        {...handler()}
                        onKeyPress={e => restrictLeadingSpace(e)}
                      />
                      <span className={classes.errorText}>
                        {touched && hasError('required') && `${strings.join_us.errors.firstName_required}`}
                      </span>
                      <span className={classes.errorText}>
                        {touched && hasError('minLength') && `${strings.join_us.errors.firstName_min}`}
                      </span>
                      <span className={classes.errorText}>
                        {touched && hasError('maxLength') && `${strings.join_us.errors.firstName_max}`}
                      </span>
                    </div>
                  )}
                />
                <FieldControl
                  name="lastName"
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <CustomTextField
                        label={strings.join_us.titles.lastName}
                        className={
                          !this.joinUsForm.get('lastName').valid ? classes.textfield : classes.textFieldSuccess
                        }
                        error={(touched && hasError('required')) || hasError('maxLength') || hasError('minLength')}
                        icon={
                          <Element_Required_Icon
                            className={classes.requiredIcon}
                            color={
                              (touched && hasError('required')) || hasError('maxLength') || hasError('minLength')
                                ? color.primary_palette.christmas_red
                                : color.form_colors.blueberry_purple
                            }
                          />
                        }
                        {...handler()}
                        onKeyPress={e => restrictLeadingSpace(e)}
                      />
                      <div className={classes.errorText}>
                        {touched && hasError('required') && `${strings.join_us.errors.lastName_required}`}
                      </div>
                      <div className={classes.errorText}>
                        {touched && hasError('minLength') && `${strings.join_us.errors.lastName_min}`}
                      </div>
                      <span className={classes.errorText}>
                        {touched && hasError('maxLength') && `${strings.join_us.errors.lastName_max}`}
                      </span>
                    </div>
                  )}
                />
                {showEmailSuggestion && (
                  <div className={classes.auto_email}>
                    <CustomCheckbox
                      label={`Do you mean ${this.joinUsForm.get('email').value}com?`}
                      labelPlacement="start"
                      text_transform="none"
                      onChange={e => this.prepopulateEmail(`${this.joinUsForm.get('email').value}com`)}
                    />
                    <CustomInputLabel is_input_label={true} label_name="Yes" />
                  </div>
                )}
                <FieldControl
                  name="email"
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <CustomTextField
                        label={strings.join_us.titles.email_address}
                        className={!this.joinUsForm.get('email').valid ? classes.textfield : classes.textFieldSuccess}
                        error={(touched && hasError('required')) || hasError('pattern')}
                        icon={
                          <Element_Required_Icon
                            className={classes.requiredIcon}
                            color={
                              (touched && hasError('required')) || hasError('pattern')
                                ? color.primary_palette.christmas_red
                                : color.form_colors.blueberry_purple
                            }
                          />
                        }
                        {...handler()}
                        onKeyPress={e => restrictLeadingSpace(e)}
                      />
                      <div className={classes.errorText}>
                        {touched && hasError('required') && `${strings.join_us.errors.email_address_required}`}
                      </div>
                      <div className={classes.errorText}>
                        {touched && hasError('pattern') && `${strings.join_us.errors.invalid_email_address}`}
                      </div>
                    </div>
                  )}
                />
                <FieldControl
                  name="password"
                  render={({ handler, touched, value, hasError }) => (
                    <div>
                      <CustomTextField
                        label={strings.join_us.titles.password}
                        // inputProps={{ maxLength: 20 }}
                        error={
                          (this.joinUsForm.get('password').value && (!this.hasEightChars() && !this.hasCapitalLetter() && !this.hasNumberOrSymbol())) ||
                          (touched && hasError('maxLength'))
                        }
                        className={
                          this.hasPasswordValidation() || (touched && hasError('maxLength'))
                            ? classes.textFieldSuccess
                            : classes.textfield
                        }
                        type={showPassword ? 'text' : 'password'}
                        icon={
                          <Element_Required_Icon
                            className={classes.requiredIcon}
                            color={color.form_colors.blueberry_purple}
                          />
                        }
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
                                  color={color.primary_palette.franklin_purple}
                                  style={{ fontSize: '1.3125rem', cursor: 'pointer' }}
                                />
                              ) : (
                                <HidePassword_Icon style={{ fontSize: '1.3125rem', cursor: 'pointer' }} />
                              )}
                            </InputAdornment>
                          ),
                        }}
                        {...handler()}
                        onKeyPress={e => restrictLeadingSpace(e)}
                      />
                      {this.joinUsForm.get('password').value ? (
                        <div>
                          <span
                            className={
                              this.hasEightChars() || this.hasPasswordValidation()
                                ? classes.successText
                                : classes.errorText
                            }
                          >
                            {strings.join_us.messages.eight_chars}.
                          </span>
                          <span
                            className={
                              this.hasCapitalLetter() || this.hasPasswordValidation()
                                ? classes.successText
                                : classes.errorText
                            }
                          >
                            {strings.join_us.messages.one_letter}.
                          </span>
                          <span
                            className={
                              this.hasNumberOrSymbol() || this.hasPasswordValidation()
                                ? classes.successText
                                : classes.errorText
                            }
                          >
                            {strings.join_us.messages.number_symbol}
                          </span>
                        </div>
                      ) : (
                        <div className={classes.phone_suggestion}>{strings.join_us.messages.password_rule}</div>
                      )}
                      <div className={classes.errorText}>
                        {touched && hasError('required') && `${strings.join_us.errors.password_required}`}
                      </div>
                      <span className={classes.errorText}>
                        {touched && hasError('maxLength') && `${strings.join_us.errors.password_max}`}
                      </span>
                    </div>
                  )}
                />
                <FieldControl
                  name="phonenumber"
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <CustomTextField
                        label={strings.join_us.titles.phone_number}
                        inputProps={{ maxLength: 10 }}
                        style={{ marginLeft: '23px' }}
                        className={
                          this.joinUsForm.get('phonenumber').value.length === 10 ||
                          this.joinUsForm.get('phonenumber').value.length === 12
                            ? classes.textFieldSuccess
                            : classes.textfield
                        }
                        error={
                          this.joinUsForm.get('phonenumber').value &&
                          this.joinUsForm.get('phonenumber').value.length <= 10
                        }
                        {...handler()}
                        onKeyPress={e => restrictLeadingSpace(e)}
                      />
                      <div className={classes.phone_suggestion}>{strings.join_us.messages.option_login}</div>
                      {this.joinUsForm.get('phonenumber').value &&
                        this.joinUsForm.get('phonenumber').value.length < 12 && (
                          <div className={classes.errorText}>{strings.join_us.errors.invalid_phone_number}</div>
                        )}
                    </div>
                  )}
                />
                {/* <Grid container item>
                  <label className={classes.breadcrumbText}>{strings.join_us.titles.i_am}</label>
                </Grid> */}
                <FieldControl
                  name="userType"
                  render={({ handler, touched, hasError }) => (
                    <Grid container item justify="center" alignItems="center">
                      
                      <Breadcrumbs separator=" " className={classes.breadcrumb}>
                        <Grid container item>
                          <label className={classes.breadcrumbText}>{strings.join_us.titles.i_am}</label>
                        </Grid>
                        <CustomLink underline="none">
                          <label>{strings.join_us.titles.company}</label>
                        </CustomLink>
                        <CustomLink underline="always">
                          <label>{strings.join_us.titles.individual}</label>
                        </CustomLink>
                      </Breadcrumbs>
                    </Grid>
                  )}
                />
                <Grid container item justify="center" alignItems="center">
                  <CustomButton
                    variant="outlined"
                    color="primary"
                    size="large"
                    custom_type="submit"
                    className={classes.join_us_button}
                    onClick={this.submitForm}
                    disabled={
                      invalid ||
                      (this.joinUsForm.get('phonenumber').value.length &&
                        this.joinUsForm.get('phonenumber').value.length <= 10) || !((this.hasEightChars() && this.hasCapitalLetter() && this.hasNumberOrSymbol()))
                    }
                    endIcon={
                      invalid ||
                      (this.joinUsForm.get('phonenumber').value.length &&
                        this.joinUsForm.get('phonenumber').value.length <= 10) || !((this.hasEightChars() && this.hasCapitalLetter() && this.hasNumberOrSymbol())) ? (
                        ''
                      ) : (
                        <Ribbon color="primary" style={{ fontSize: '47px', marginTop: '-3px' }} />
                      )
                    }
                  >
                    {strings.join_us.titles.join}
                  </CustomButton>
                  {invalid}
                </Grid>
                <Grid container item justify="center" alignItems="center" className={classes.account_exists}>
                  {strings.join_us.titles.account_exists} &nbsp;
                  <CustomLink underline="always">
                    <label>{strings.join_us.titles.sign_in}</label>
                  </CustomLink>
                </Grid>
                <Grid container item justify="center" alignItems="center" className={classes.terms_services}>
                  {strings.join_us.titles.sign_up_fr} &nbsp;
                  <CustomLink underline="always">
                    <label>{strings.join_us.titles.terms_services}</label>
                  </CustomLink>
                </Grid>
              </form>
            )}
          />
          <div className={classes.modal_root}>
            {closeIcon && (
              <Modal
                open
                aria-labelledby="modal-title"
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                disableScrollLock={true}
                hideBackdrop={true}
                aria-describedby="modal-description"
                className={classes.modal_root}
              >
                <div className={classes.modal}>
                  <Close_Icon className={classes.cross_icon} onClick={this.closeModal} />
                  <p className={classes.modal_title} id="modal-title">
                    {strings.join_us.titles.profile_name}:
                  </p>
                  <p className={classes.modal_description} id="modal-description">
                    {strings.join_us.titles.popover_description}
                  </p>
                </div>
              </Modal>
            )}
          </div>
          <div>
            {joinUsData && joinUsData.data && (
              <Grid container item justify="center" alignItems="center">
                <SuccessPopupContent
                  open={this.props.openSucessModal}
                  closeModal={() => {
                    this.joinUsForm.reset();
                    this.joinUsForm.get('userType').setValue('Individual', { emitModelToViewChange: false });
                    this.props.actions.closeSuccessModal();
                  }}
                />
                {/* {(() => {
                  window.scrollTo(0,document.body.scrollHeight);
                })()} */}
                {joinUsData && joinUsData.errorCode == 400 && (
                  <p className={classes.error_msg}>
                    {joinUsData && joinUsData.errorCode == 400 && joinUsData.error.message}
                  </p>
                )}
              </Grid>
            )}
          </div>
        </Grid>
        <LandingFooter></LandingFooter>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    joinUsData: state.JoinUs.joinUsFormData,
    openSucessModal: state.JoinUs.openSucessModal,
    clearForm: state.JoinUs.clearForm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...JoinUsActions }, dispatch),
  };
}
/**
 * connecting to redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles, { withTheme: true })(Join_Us));
