import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
import { Modal } from '@material-ui/core';
import Close_Icon from '../data_display/icons/Close';
import CustomButton from '../navigations/custom_buttons';
import CustomPlainInputField from '../inputs/custom_plain_input_field';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import strings from '../../utilities/strings';
import CustomRadioButton from '../inputs/custom_radio_button';
import Element_Required_Icon from '../data_display/icons/ElementRequiered';

const useStyles = {
    addLink: {
        width: '29.5em',
        margin: '0 auto',
        backgroundColor: color.secondary_palette.blues.modal_blue,
        padding: '1.25em 1.3125em',
        border:  `1px solid` + color.primary_palette.franklin_purple,
    },
    cross: {
        textAlign: 'right',
    },
    cross_icon: {
        fontSize: font_sizes.font_15,
    },
    center: {
        textAlign: 'center',
    },
    addlink: {
        fontSize :font_sizes.font_25,
        fontWeight: '300',
    },
    addMain: {
        textAlign: 'center',
        paddingBottom: '0.625em',
    },
    addtext: {
        fontSize :font_sizes.font_13,
        color: '#6d6d6d',
    },
    btnRight: {
        textAlign: 'right',
    },
    textArea: {
        width: '100%',
        height: '16.4375em !important',
        resize: 'none',
        marginTop: '1.375em',
    },
    margin: {
        padding: '0.375em 0',
        '& .MuiFormControlLabel-labelPlacementTop': {
            margin: 0,
            width: '100%',
        },
        '& .MuiInputBase-root': {
            width: '100%',
            border: `solid 1px` + color.secondary_palette.grays.shadow_gray,
            padding: '0.875em 1.0625em',
        },
        '& .Mui-focused': {
            border: `solid 1px` + color.primary_palette.franklin_purple,
            borderBottom: 'none',
        },
        '& .MuiTypography-root': {
            fontSize: font_sizes.font_14,
        },
    },
    description: {
        width: '99%',
        height: '5.8125em !important',
        resize: 'none',
        outline: 'none',
    },
    lineHeight: {
        lineHeight: '1.5',
        fontSize: font_sizes.font_14,
    },
    btnTxtStyle: {
        fontSize: font_sizes.font_12,
        fontWeight: '600',
        color: color.primary_palette.franklin_purple,
        border: `1.4px solid` + color.primary_palette.franklin_purple,
      },
    step2: {
        fontSize :font_sizes.font_14,
        color: color.primary_palette.franklin_purple,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    radioTxt: {
        '& .MuiTypography-root': {
            fontSize :font_sizes.font_14,
        },
    },
    RadioInput: {
        '& .MuiInputBase-root': {
            width: '195px',
            border: `1px solid` + color.secondary_palette.grays.light_gray,
            padding: '0.3125em',
        },
    },
    icon: {
        fontSize: font_sizes.font_10, 
        verticalAlign: 'super',
    },
    stepSpacing: {
        padding: '0.3125em 0',
    }
};

class AddFile extends Component {
    constructor(props) {
        super(props);
        
    }

      render(){
        const { classes } = this.props;
          return(
              <>
              <Modal
                open={open}
                aria-labelledby="modal-title"
                disablePortal
                aria-describedby="modal-description"
                disableAutoFocus
                >
              <div>
                  <div className={classes.addLink}>
                    <div className={classes.cross}>
                        <CustomButton>
                            <Close_Icon className={classes.cross_icon} onClick={this.closePopup}/>
                        </CustomButton>
                    </div>
                    <div className={classes.addMain}>
                        <div className={classes.addlink}>{strings.add_file.titles.add_file}</div>
                        <div className={classes.addtext}>{strings.add_file.titles.add_file_des}</div>
                    </div>
                    <div className={classes.stepSpacing}>
                        <div className={classes.step2}>{strings.add_file.titles.step_1} <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} /></div>
                        <div className={classes.textArea}></div>
                    </div>
                    <div className={classes.stepSpacing}>
                        <div className={classes.step2}>{strings.add_file.titles.step_2}</div>
                        <div className={classes.margin}>
                            <CustomPlainInputField 
                            placeholder={strings.add_file.titles.step_2_placeholder} 
                            label={strings.add_file.titles.step_2_label}
                            />
                        </div>
                        <div>
                            <div className={classes.lineHeight}>{strings.add_file.titles.step_2_textAear}</div>
                            <TextareaAutosize className={classes.description}
                            placeholder={strings.add_file.titles.step_2_textAear_placeholder}>
                            </TextareaAutosize>
                        </div>
                    </div>
                    <div className={classes.stepSpacing}>
                        <div className={classes.step2}>{strings.add_file.titles.step_3}</div>
                        <div><CustomRadioButton label={strings.add_file.titles.step_3_radio_1}  className={classes.radioTxt}/></div>
                        <div><CustomRadioButton label={strings.add_file.titles.step_3_radio_2}  className={classes.radioTxt} />
                        <CustomPlainInputField 
                        className={classes.RadioInput}
                            placeholder={strings.add_file.titles.step_3_radio_2_input}
                            />
                            </div>
                        <div><CustomRadioButton label={strings.add_file.titles.step_3_radio_3}  className={classes.radioTxt} /></div>
                    </div>
                    <div className={classes.btnRight}>
                        <CustomButton color="primary" variant="outlined" className={classes.btnTxtStyle}>
                        {strings.add_file.titles.add_file_btn}
                        </CustomButton>
                    </div>
                </div>
              </div>
              </Modal>
            </>
          );
      }
}

export default withStyles(useStyles, { withTheme: true })(AddFile);