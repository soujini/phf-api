
//Tradeworks Color Palette
export const color = {
  primary_palette: {
    franklin_purple: '#410166',
    highlight_purple: '#801FB8',
    christmas_red: '#C01F2A',
    pine_green: '#426618',
    fafa_gray: '#FAFAFA',
    black: '#000000',
    white: '#FFFFFF',
    dark_purple: '#415cca',
    border_opacity: 'rgba(25,0,40,0.3)',
  },
  secondary_palette: {
    blues: {
      modal_blue: '#FBFDFE',
      tile_blue: '#F7FAFB',
      baby_blue: '#C8DBF1',
      click_blue: '#5E94E0',
      hover_blue: '#C6DDFF',
    },
    grays: {
      greyish_brown: '#4a4a4a',
      fafa_gray: '#FAFAFA',
      fog_gray: '#EFEFEF',
      shadow_gray: '#979797',
      medium_gray: '#5f5f5f',
      light_gray: '#9B9B9B',
      background_gray: '#d8d8d8',
      bg_gray: '#f7f7f7',
    },
    purples: {
      basic: '#D6D3E1',
      familiar: '#B9A9C9',
      proficient: '#9B80B0',
      advance: '#7C55697',
      franklin_purple: '#410166',
    },
  },
  accent_colors_and_one_offs: {
    mustard: '#E2C236',
    star_gold: '#FFD000',
    benjamin_green: '#99C05C',
    links_orange: '#F87B1C',
    programmer_notes: '#FF00FF',
  },
  wizard_box_colors: {
    franklin_purple: '#410166',
    pine_green: '#426618',
    benjamin_green: '#99C05C',
    shadow_gray: '#979797',
    wizard_blue: '#4E72B3',
    gray_light: '#313131',
  },
  benjamin_colors: {
    benjamin_green: '#99C05C',
    baby_blue: '#C8DBF1',
    warrior_blue: '#2D459D',
    franklin_purple: '#410166',
  },
  form_colors: {
    textfield_color: '#7e7e7e',
    blueberry_purple: '#57307a',
    royal_purple_1: '#410260',
    gray: '#f9f9f9',
    sucess_color: '#0d802e',
  },
};

//Sizes for icons
export const size_options = {
  x_small: '0.75rem',
  small: '0.875rem',
  medium: '1.25rem',
  default: '1.5rem',
  large: '1.875em',
  x_large: '3.25rem',
};

// PX to rem conversion on the base of 16px
export const px_to_rem_sizes = {
  size_20: '1.25rem',
  size_1: '0.0625em',
  size_1_3: '0.08125em',
  size_2: '0.125em',
  size_3: '0.1875em',
};

// PX to rem conversion on the base of 16px
export const font_sizes = {
  font_10: '0.625rem',
  font_12: '0.75rem',
  font_13: '0.8125em',
  font_14: '0.875rem',
  font_15: '0.9375rem',
  font_16: '1rem',
  font_17: '1.0625em',
  font_18: '1.125em',
  font_20: '1.25rem',
  font_21: '1.3125em',
  font_22: '1.375rem',
  font_24: '1.5rem',
  font_25: '1.5625em',
  font_30: '1.875em',
  font_35: '2.1875rem',
  font_50: '3.125rem',
};

// Tradeworks material ui theme object
const tradework_theme = {
  palette: {
    primary: {
      light: color.primary_palette.franklin_purple,
      main: color.primary_palette.franklin_purple,
      dark: color.primary_palette.franklin_purple,
      contrastText: color.primary_palette.white,
    },
    secondary: {
      light: color.form_colors.sucess_color,
      main: color.form_colors.sucess_color,
      dark: color.form_colors.sucess_color,
      contrastText: color.primary_palette.white,
    },
    error: {
      light: color.primary_palette.christmas_red,
      main: color.primary_palette.christmas_red,
      dark: color.primary_palette.christmas_red,
      contrastText: color.primary_palette.white,
    },
  },
  typography: {
    fontFamily: [
      'gillsans_r',
      'gillsans_sb',
      'gillsans_light',
      'gillsans_bold',
      'avenir_black_r',
      'avenir_book_r',
      'avenir_bold',
      'avenir_light',
      'avenir_sb',
      'avenir_roman',
      '"Helvetica Neue"',
      'Zapfino_bold',
      'Zapfino',
      'Pacifico',
      'Pacifico_bold',
      'ACaslonPro',
      'ACaslonPro_bold',
      'OptimaLT',
      'OptimaLT_bold',
      'NeutraText',
      'NeutraText_bold'
    ].join(','),
    h1: {
      fontSize: font_sizes.font_50,
    },
    h3: {
      fontSize: font_sizes.font_30,
      textTransform: 'capitalize',
    },
    h4: {
      fontSize: font_sizes.font_24,
    },
    subtitle1: {
      fontSize: font_sizes.font_16,
    },
  },

  //overrides key of the theme to potentially change every single style injected by Material-UI into the DOM
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
      },
    },
    MuiFormLabel: {
      root: {
        color: color.wizard_box_colors.shadow_gray,
        fontSize: '18px',
        fontWeight: '300',
        lineHeight: '0.5',
        fontFamily: 'gillsans_light',
      },
    },
    MuiFormControlLabel: {
      root: {
        textTransform: 'capitalize',
      },
    },
    MuiStepLabel : {
      label: {
        color : color.primary_palette.franklin_purple+' !important',
        marginTop : "0px !important",
        '&:nth-child(2n)' : {
          marginTop : "-30px",
          color : 'red !important'
        }
      },
    },
    MuiInputAdornment: {
      root: {
        height: 'auto',
        '&:focus': {
          outline: 'none',
        },
      },
    },
    MuiGrid : {
      container : {
        outline : 'inherit'
      }
    },
    MuiOutlinedInput :{
      input : {
        textAlign : 'center'
      }
    },
  },
};

export default tradework_theme;
