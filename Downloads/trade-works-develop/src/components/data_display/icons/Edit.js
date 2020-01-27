import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Edit_Circle_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.franklin_purple;
        }
      } else {
      }
      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="-2 0 58 55">
          <defs>
            <path id="edit_svg__a" d="M0 .287h32.87v32.87H0z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <circle stroke="#000" strokeWidth={2} fill="#FFF" cx={27.5} cy={27.5} r={27.5} />
            <g transform="translate(11 10.555)">
              <mask id="edit_svg__b" fill="#fff">
                <use xlinkHref="#edit_svg__a" />
              </mask>
              <path
                d="M31.134 2.472c1.098 1.096 2.806 3.848.825 5.826L8.117 32.144 0 33.158l1.01-8.12S22.495 3.555 24.859 1.195c1.978-1.978 4.729-.269 5.825.825l.451.452z"
                fill="#404041"
                mask="url(#edit_svg__b)"
              />
            </g>
            <path
              d="M35.92 13.279c-.447-.039-1.018.446-1.304.73-.285.281-18.39 18.229-19.371 19.196-.977.973-1.877 2.53-.986 3.417 1.216 1.214 2.364.724 3.182.483-.247.806-.73 1.958.578 3.258.892.888 2.358-.108 3.336-1.08.978-.97 19.082-18.916 19.37-19.198.285-.281.773-.849.735-1.29-.527-.285-2.402-1.029-3.454-2.077-1.05-1.048-1.805-2.916-2.085-3.44"
              fill="#FCC010"
            />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Edit_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Edit_Icon {...props} />
    </>
  );
}

export default Edit_Circle_Icon;
