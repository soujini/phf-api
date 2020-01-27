import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { color, font_sizes } from '../../utilities/themes';
import strings from '../../utilities/strings';
import CustomButton from '../navigations/custom_buttons';
import CustomLink from '../navigations/custom_links';
import Close_Icon from '../data_display/icons/Close';
import Element_Required_Icon from '../data_display/icons/ElementRequiered';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CompassRose_Icon from '../data_display/icons/CompassRose';
import CustomPlainInputField from '../inputs/custom_plain_input_field';
import Add_Icon_Outlined from '../../components/data_display/icons/Add';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CustomCheckbox from '../inputs/custom_checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import CustomAutocomplete from "../inputs/custom_auto_complete";

const useStyles = {
    add_experience: {
        border:  `1px solid` + color.primary_palette.franklin_purple,
        padding: '2.5625em',
    },
    cross: {
        textAlign: 'right',
    },
    cross_icon: {
        fontSize: font_sizes.font_15,
    },
    addlink: {
        fontSize :font_sizes.font_25,
        fontWeight: '300',
        textTransform: 'uppercase',
    },
    addtext: {
        fontSize :font_sizes.font_14,
        fontWeight: '600',
    },
    addMain: {
        textAlign: 'center',
        paddingBottom: '0.625em',
    },
    icon: {
        fontSize: font_sizes.font_10,
        verticalAlign: 'super',
        color: color.primary_palette.franklin_purple,
        padding: '0 0.125em',
    },
    root: {
        '& .MuiFormControl-root': {
            border: `1px solid` + color.secondary_palette.grays.light_gray,
            margin: 0,
        }
    },
    compass: {
        fontSize: font_sizes.font_21,
    },
    spanColor: {
        color: color.secondary_palette.grays.light_gray,
        fontSize: font_sizes.font_14,
    },
    margin: {
        width: '100%',
        '& .MuiFormControlLabel-labelPlacementTop': {
            margin: 0,
            width: '100%',
        },
        '& .MuiInputBase-root': {
            width: '100%',
            border: `solid 1px` + color.secondary_palette.grays.shadow_gray,
            padding: '0.875em 1.0625em',
        },
    },
    spacing: {
        padding: '0.1875em 0',
    },
    spacing_block: {
        padding: '0.3125em 0',
    },
    month: {
        width: '96%',
        '& .MuiInputBase-root': {
            height: '1.5625em',
            borderRadius: 0,
            padding: 0,
        },
        '& label + .MuiInput-formControl': {
            marginTop: 0,
        },
        '& .MuiSelect-select' : {
            '&:focus' : {
                background : 'none'
            }
        }
    },
    colorbtn: {
        color: color.secondary_palette.grays.shadow_gray + `!important`,
        width: '100%',
        textTransform: 'capitalize',
        fontSize: font_sizes.font_14,
        padding: '0.1875em 0',
    },
    colorbtn1: {
        color: color.secondary_palette.grays.shadow_gray + `!important`,
        width: '100%',
        fontSize: font_sizes.font_14,
        padding: '0.1875em 0',
        textTransform: 'none',
    },
    colortext:{
        fontSize: font_sizes.font_12,
        color: color.secondary_palette.grays.shadow_gray,
        fontFamily: 'avenir_roman',
    },
    icon_font: {
        '& .MuiSvgIcon-root': {
            fontSize: font_sizes.font_14,
        },
    },
    entity_font: {
        fontSize: font_sizes.font_12,
        color: color.secondary_palette.grays.shadow_gray,
    },
    textArea: {
        width: '100%',
        height: '3.0625em !important',
        resize: 'none',
        outline: 'none',
    },
    listTextArea: {
        width: '100%',
        padding: '0.25em 0 0 1.125em',
        margin: 0,
    },
    checkboxSpacing: {
        margin: 0,
        marginBottom: '0.125em',
        '& .MuiCheckbox-root': {
            padding: 0,
        },
    },
    checkboxpostion: {
        margin: 0,
        marginBottom: '0.125em',
        marginTop: '-0.125em',
        '& .MuiCheckbox-root': {
            padding: 0,
        },
    },
    spacing_btn: {
        paddingTop: '1.875em',
    },
    fontSize:{
        fontSize: font_sizes.font_14,
    },
    add_icon: {
        verticalAlign: 'middle',
    },
};

class AddExperience extends Component {
    constructor(props) {
        super(props);
       
      }

    
      render(){
        const { classes } = this.props;
          return(
            <>
            <div className={classes.add_experience}>
                <div className={classes.addMain}>
                    <div className={classes.addlink}>{strings.add_exprience.titles.add_exprience}</div>
                    <div className={classes.addtext}>{strings.add_exprience.titles.add_exprience_des}</div>
                </div>
                <div className={classes.spacing_block}>
                    <Grid container md={12}>
                        <Grid container justify="flex-start" md={6}>
                            <span className={classes.fontSize}>{strings.add_exprience.titles.company}</span>
                            <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} /></Grid>
                        <Grid container justify="flex-end" md={6}>
                            <CompassRose_Icon color={color.form_colors.blueberry_purple} className={classes.compass} />
                        </Grid>
                    </Grid>
                    {/* <Autocomplete
                        className={classes.root}
                            SearchChange = {this.onSearchChange}
                            id="debug"
                            debug
                            freeSolo
                            renderInput={params => <TextField {...params} placeholder={strings.add_exprience.titles.company_name} margin="normal" fullWidth />}
                        /> */}
                        <CustomAutocomplete
                        className={classes.root}
                        SearchChange={this.onSearchChange}
                        id="debug"
                        debug
                        getOptionLabel={option => option.title}
                        placeholder={strings.add_exprience.titles.company_name}
                      />
                </div>
                <div className={classes.spacing_block}>
                    <div className={classes.spacing}>
                        <span className={classes.fontSize}>{strings.add_exprience.titles.entity}</span>
                        <span className={classes.spanColor}>{strings.add_exprience.titles.well_known}</span>
                    </div>
                    <div className={classes.margin}>
                        <CustomPlainInputField />
                    </div>
                </div>
                <div className={classes.spacing_block}>
                    <Grid container md={12}>
                    <Grid container justify="flex-start" md={5}>
                        <div className={classes.fontSize}>{strings.add_exprience.titles.location}</div>
                            <Grid container justify="flex-start" md={12}> 
                                <div className={classes.margin}>
                                <CustomPlainInputField />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid md={2}></Grid>
                        <Grid container justify="flex-start" md={5}>
                        <div className={classes.fontSize}>{strings.add_exprience.titles.employment}</div>
                            <Grid container justify="flex-end" md={12}> 
                                <div className={classes.margin}>
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
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.spacing_block}>
                    <Grid container md={12}>
                    <Grid container justify="flex-start" md={5}>
                        <div>
                            <span className={classes.fontSize}>{strings.add_exprience.titles.from}</span>
                            <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} />
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
                        <Grid container justify="flex-start" md={3}>
                            <span className={classes.fontSize}>{strings.add_exprience.titles.to}</span>
                            <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} />
                        </Grid>
                        <Grid container justify="flex-end" md={9}>
                            <CustomCheckbox className={classes.checkboxpostion}></CustomCheckbox>
                            <span className={classes.fontSize}>{strings.add_exprience.titles.current_postion}</span>
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
                            <span className={classes.fontSize}>{strings.add_exprience.titles.title} </span>
                            <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} />
                        </Grid>
                        <Grid container justify="flex-end" md={6}>
                            <CompassRose_Icon color={color.form_colors.blueberry_purple} className={classes.compass} />
                        </Grid>
                    </Grid>
                    <div className={classes.margin}>
                        <CustomPlainInputField />
                        <Grid container justify="flex-start" md={12}>
                            <CustomButton className={classes.colorbtn1}>
                                <Grid container justify="flex-start" md={12} className={classes.icon_font}>
                                    <Grid container justify="flex-start" md={12} className={classes.fontSize}>
                                        <Add_Icon_Outlined className={classes.add_icon} /> {strings.add_exprience.titles.add_title}
                                    </Grid>
                                </Grid>
                            </CustomButton>
                        </Grid>
                    </div>
                    <div className={classes.spacing_block}>
                        <Grid container justify="flex-start" md={12}>
                            <Grid container justify="flex-start" md={5} className={classes.fontSize}>
                                {strings.add_exprience.titles.accomplishments}
                            </Grid>
                            <Grid container justify="flex-end" md={7} className={classes.entity_font}>
                                <Grid container justify="flex-end" md={10}>
                                    {strings.add_exprience.titles.action}
                                </Grid>
                                <Grid container justify="flex-end" md={2}>
                                    <CustomLink underline="always" color='#9b9b9b'>
                                        <label className={classes.loginTxtStyle}>{strings.add_exprience.titles.see_List}</label>
                                    </CustomLink>
                                </Grid>
                            </Grid>
                            <ul className={classes.listTextArea}>
                                <li>
                                    <Grid container justify="flex-start" md={12}>
                                    <TextareaAutosize className={classes.textArea}></TextareaAutosize>
                                </Grid>
                                </li>
                            </ul>
                            <Grid container justify="flex-start" md={12}>
                                <CustomButton className={classes.colorbtn}>
                                    <Grid container justify="flex-start" md={12} className={classes.icon_font}>
                                        <Grid container justify="flex-start" md={12} className={classes.fontSize}>
                                            <Add_Icon_Outlined className={classes.add_icon} /> {strings.add_exprience.titles.add_accomplishments}
                                        </Grid>
                                    </Grid>
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <div className={classes.spacing}>
                            <span className={classes.fontSize}>{strings.add_exprience.titles.headline}</span>
                            <Element_Required_Icon color={color.form_colors.blueberry_purple} className={classes.icon} />
                            <span className={classes.spanColor}>
                                <CustomCheckbox className={classes.checkboxSpacing}></CustomCheckbox>
                                {strings.add_exprience.titles.checkbox}
                            </span>
                        </div>
                        <div className={classes.margin}>
                            <CustomPlainInputField />
                            <Grid container justify="flex-start" md={12} className={classes.colortext}>
                                {strings.add_exprience.titles.headline_des}
                            </Grid>
                        </div>
                    </div>
                    <div className={classes.spacing_btn}>
                    <Grid container md={12}>
                        <Grid container justify="flex-start" md={4} className={classes.fontSize}>{strings.add_exprience.titles.add_Media} </Grid>
                        <Grid container justify="flex-start" md={8}>
                            <CompassRose_Icon color={color.form_colors.blueberry_purple} className={classes.compass} />
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-start" md={12}>
                        <Grid container justify="flex-start" md={3}>
                            <CustomButton className={classes.colorbtn}>
                                <Grid container justify="flex-start" md={12}>
                                    <Grid container justify="flex-start" className={classes.icon_font} md={2}>
                                        <Add_Icon_Outlined className={classes.add_icon}/>
                                    </Grid>
                                    <Grid container justify="flex-start" md={10}>
                                    {strings.add_exprience.titles.add_link}
                                    </Grid>
                                </Grid>
                            </CustomButton>
                        </Grid>
                        <Grid container justify="flex-start" md={3}>
                            <CustomButton className={classes.colorbtn}>
                                <Grid container justify="flex-start" md={12}>
                                    <Grid container justify="flex-start" className={classes.icon_font} md={2}>
                                        <Add_Icon_Outlined className={classes.add_icon} />
                                    </Grid>
                                    <Grid container justify="flex-start" md={10}>
                                    {strings.add_exprience.titles.add_file}
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

export default withStyles(useStyles, { withTheme: true })(AddExperience);