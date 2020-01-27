import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
import { Modal } from '@material-ui/core';
import Close_Icon from '../data_display/icons/Close';
import CustomButton from '../navigations/custom_buttons';
import CustomPlainInputField from '../inputs/custom_plain_input_field';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import strings from '../../utilities/strings';

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
    inputBorder: {
        width: '100%',
        margin: 0,
        border: '0.3px solid' + color.secondary_palette.grays.shadow_gray,
        '& .styleInput-root-65': {
            width: '100%',
        }
    },
    btntext: {
        color: color.primary_palette.franklin_purple,
        fontSize: font_sizes.font_12,
        '&:hover': {
            color: color.primary_palette.franklin_purple,
        }, 
        '& .MuiSvgIcon-root': {
            fontSize: font_sizes.font_9,
        },
    },
    btnRight1: {
        textAlign: 'right',
        '& .styleButton-root-135': {
            border: 0,
        },
    },
    btnRight: {
        textAlign: 'right',
    },
    border: {
        borderBottom: `solid 1px` + color.primary_palette.franklin_purple,
        '& .MuiInputBase-root': {
            padding: '0.875em 1.0625em',
            width: '100%',
        },
        '& .Mui-focused': {
            border: `solid 1px` + color.primary_palette.franklin_purple,
            borderBottom: 'none',
        }
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
    icon: {
        fontSize: '0.625em', 
        verticalAlign: 'super',
    },
    stepSpacing: {
        padding: '0.3125em 0',
    }
};

class AddLink extends Component {
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
                        <CustomButton color="primary" onClick={this.closePopup} >
                            <Close_Icon className={classes.cross_icon} />
                        </CustomButton>
                    </div>
                    <div className={classes.addMain}>
                        <div className={classes.addlink}>{strings.add_file.titles.add_link}</div>
                        <div className={classes.addtext}>{strings.add_file.titles.add_link_des}</div>
                    </div>
                    <div className={classes.border}>
                        <div className={classes.center}>
                            <CustomPlainInputField placeholder={strings.add_file.titles.add_link_placeholder_URL} className={classes.inputBorder} />
                        </div>
                        <div className={classes.btnRight1}>
                            <CustomButton color="primary" className={classes.btnTxtStyle}>
                            {strings.add_file.titles.add_another_link}
                                </CustomButton>
                        </div>
                    </div>
                    <div>
                        <div className={classes.textArea}></div>
                    </div>
                    <div className={classes.margin}>
                        <CustomPlainInputField 
                        placeholder={strings.add_file.titles.add_link_label_placeholder} 
                        label={strings.add_file.titles.add_link_label}
                            />
                    </div>
                    <div>
                    <div className={classes.lineHeight}>{strings.add_file.titles.Page_Description}</div>
                    <TextareaAutosize className={classes.description} placeholder={strings.add_file.titles.textArea_placeholder}></TextareaAutosize>
                    </div>
                    <div className={classes.btnRight}>
                        <CustomButton color="primary" variant="outlined" className={classes.btnTxtStyle}>
                        {strings.add_file.titles.Btn_title}
                        </CustomButton>
                    </div>
                </div>
              </div>
              </Modal>
            </>
          );
      }
}

export default withStyles(useStyles, { withTheme: true })(AddLink);