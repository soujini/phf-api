import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SvgBuilding from '../data_display/icons/Building';
import SvgUserIcon from '../data_display/icons/UserIcon';
import CustomTextField from '../inputs/custom_textfields';
import CustomCheckbox from '../inputs/custom_checkbox';
import CustomButton from '../navigations/custom_buttons';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';

/**
 * Content component for landing page which is displayed to the user before he sign in/ join in
 */

const useStyles = {
  welcomeTxtStyle: {
    fontFamily: 'NeutraText',
    fontSize: font_sizes.font_35,
    textAlign: 'center',
    color: color.primary_palette.franklin_purple,
    marginTop: '1.375rem',
    marginBottom: '1.5em',
  },
  subTxtStyle: {
    fontSize: font_sizes.font_35,
    color: color.primary_palette.franklin_purple,
  },
  subHeadTxtStyle: {
    fontSize: font_sizes.font_18,
    fontWeight: 300,
    textAlign: 'center',
    color: color.primary_palette.black,
  },
  subGridAlign: {
    width: '34.6875rem',
    height: '3.0625rem',
    borderRadius: '3px',
    boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.31)',
    border: `1px solid` + color.secondary_palette.grays.light_gray,
    backgroundColor: '#fff',
    marginTop: '-5px',
  },
  btnGridStyle: {
    backgroundColor: color.secondary_palette.grays.bg_gray,
    height: '3.9375rem',
  },
  btnGridStyle1: {
    backgroundColor: color.secondary_palette.grays.bg_gray,
    height: '3.9375rem',
    borderRight: `2px solid` + color.primary_palette.white,
  },
  btnTxtStyle: {
    fontSize: font_sizes.font_12,
    fontWeight: '600',
    color: color.primary_palette.franklin_purple,
    border: `1.4px solid` + color.primary_palette.franklin_purple,
  },
  gridRightBorder: {
    borderRight: `1px solid` + color.secondary_palette.grays.light_gray,
  },
  subContentStyle: {
    fontSize: font_sizes.font_22,
    color: color.secondary_palette.grays.light_gray,
    marginTop: '2.1875em',
  },
  inputLabelTxt: {
    fontSize: font_sizes.font_14,
    lineHeight: '1.79',
    color: color.primary_palette.franklin_purple,
  },
  chkbxLabelStyle: {
    fontSize: font_sizes.font_14,
    color: color.primary_palette.black,
  },
  pilerAlign: {
    width: '1.625rem',
    height: '1.875rem',
  },
  testLogoAlign : {
    position: 'absolute'
  },
  buildingAlign : {
    marginLeft: '6rem'
  },
  userIconAlign : {
    marginRight: '3.625rem'
  },
  subGridInput : {
    width: '100%',
    borderRadius: '3px',
    boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.31)',
    marginTop: '-6px',
    '& .MuiOutlinedInput-input': {
      textAlign: 'left',
      padding: '12px 26px 10px 16px',
    }
  },
  subGridInput1 : {
    width: '100%',
    borderRadius: '3px',
    boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.31)',
    marginTop: '-6px',
    '& .MuiOutlinedInput-input': {
      textAlign: 'right',
      padding: '12px 26px 10px 16px',
    },
  },
  'MuiInputBase-input' : {
    textAlign : 'center'
  },
  btnAlign: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  border: {
    borderLeft: `1px solid` + color.secondary_palette.grays.light_gray,
  },
};

class LandingContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid item md={12} xs={12}>
          <Grid container xs justify="flex-end" xs={12} md={12} className={classes.testLogoAlign}>
          <img src="/assets/images/testlogo.PNG" alt={strings.landing_page.titles.feedback_logo_text} />
          </Grid>
            <Grid container xs justify="center">
              <Grid item container xs={12} md={12} justify="center" className={classes.welcomeTxtStyle}>
                {strings.landing_page.titles.welcome}
                <br />
                {strings.landing_page.titles.connect_with_community}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container item md={6} xs={6} alignItems="center">
              <Grid container item md={2} xs={4} justify="center"  alignItems="center" className={classes.buildingAlign}>
              <SvgBuilding />
              </Grid>
              <Grid container item md={8} xs={6} justify="flex-start"  alignItems="center">
              <Grid item  className={classes.subTxtStyle}>
                  {strings.landing_page.titles.get_found}
                </Grid>
                </Grid>
              <Grid container justify="center">
                <Grid
                  container
                  item
                  xs
                  md={8}
                  xs={11}
                  justify="center"
                  alignItems="center"
                >
                  <CustomTextField variant="outlined" className ={classes.subGridInput} placeholder={strings.landing_page.titles.job_title}/>
                </Grid>
                <Grid container item xs md={8} xs={11} alignItems="center">
                  <Grid item container md={5} xs={5}>
                    <CustomTextField />
                    <Grid container item>
                      <label className={classes.inputLabelTxt}>
                        {strings.landing_page.titles.placeholder_location}
                      </label>
                    </Grid>
                  </Grid>
                  <Grid item container md={7} xs={7} justify="flex-end">
                    <Grid container item md={1} xs={1}>
                      <CustomCheckbox />
                    </Grid>
                    <Grid container item md={7} xs={8} alignItems="center">
                      <label className={classes.chkbxLabelStyle}>
                        {' '}
                        {strings.landing_page.titles.highlight_apprenticeships}
                      </label>
                    </Grid>
                    <Grid container item md={1} xs={1} className={classes.pilerAlign}>
                      <img src="/assets/images/Pilar_b.svg" alt="Piler" />
                    </Grid>
                  </Grid>
                </Grid>
            <Grid container item  alignItems="center">
              <Grid  item md={2} xs={2}  alignItems="center"></Grid>
              <Grid  item md={6} xs={6}  alignItems="center">
              <Grid container  alignItems="center" className={classes.subContentStyle}>
                  {strings.landing_page.titles.show_skills}
                </Grid>
              </Grid>
              </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={6}>
            <Grid container justify="center" className={classes.border}>
  <Grid container item xs justify="center" alignItems="center">
            <Grid container item md={8} xs={7} justify="flex-end" alignItems="center">
              <Grid item justify="center" className={classes.subTxtStyle}>
                  {strings.landing_page.titles.find_talent}
                </Grid>
              </Grid>
              <Grid container item md={2} xs={3}  justify="center" alignItems="center" className={classes.userIconAlign}>
              <Grid item  className={classes.subTxtStyle}>
                  <SvgUserIcon />
                </Grid>
                </Grid>
                </Grid>
              <Grid container justify="center">
                <Grid
                  container
                  item
                  xs
                  md={8}
                  xs={11}
                  justify="center"
                  alignItems="center"
                >
                  <CustomTextField variant="outlined" className ={classes.subGridInput1} placeholder={strings.landing_page.titles.skills_jobs}/>
                </Grid>
                <Grid container item xs md={8} xs={11} alignItems="center">
                  <Grid item container justify="flex-end">
                    <CustomTextField />
                    <Grid container item justify="flex-end">
                      <label className={classes.inputLabelTxt}>
                        {strings.landing_page.titles.placeholder_location}
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              <Grid container item justify="flex-end" alignItems="center">
              <Grid  item md={8} xs={8} justify="flex-end" alignItems="center">
              <Grid container justify="flex-end" alignItems="center" className={classes.subContentStyle}>
                {strings.landing_page.titles.appropriate_candidates}
              </Grid>
              </Grid>
              <Grid item md={2} alignItems="center"></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Grid container  alignItems="center" >
              <Grid container item md={6} xs={6}  alignItems="center" className={classes.btnGridStyle1}>
              <Grid  item md={2} xs={2}  alignItems="center"></Grid>
              <Grid  item md={6} xs={6}  alignItems="center" className={classes.btnAlign}>
                <CustomButton color="primary" variant="outlined" className={classes.btnTxtStyle}>
                  {strings.landing_page.titles.post_resume}
                </CustomButton>
                </Grid>
              </Grid>
              <Grid container item md={6} xs={6} justify="flex-end" alignItems="center" className={classes.btnGridStyle}>
              <Grid  item md={4} xs={4} justify="flex-end" alignItems="center" className={classes.right}>
              <CustomButton color="primary" variant="outlined" className={classes.btnTxtStyle}>
                  {strings.landing_page.titles.post_a_job}
                </CustomButton>
              </Grid>
              <Grid item md={2} xs={2} ></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(LandingContent);
