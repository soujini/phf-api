import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Flipbook_Icon(props) {
  function styledIcon(props) {
    const classes = useStyles(props);
    const getColor = (props, line_type) => {
      let colorValue = props.color ? props.color : color.secondary_palette.grays.light_gray;

      if (props && props.variant === 'outlined') {
        if (props && props.color === 'primary') {
          if (line_type === 'stroke') {
            colorValue = color.primary_palette.franklin_purple;
          }
          if (line_type === 'fill') {
            colorValue = color.primary_palette.white;
          }
        } else {
          if (line_type === 'fill') {
            colorValue = color.primary_palette.white;
          }
        }
      }

      if (props && props.variant === 'filled') {
        if (props && props.color === 'primary') {
          if (line_type === 'stroke') {
            colorValue = color.primary_palette.franklin_purple;
          }
          if (line_type === 'fill') {
            colorValue = color.primary_palette.franklin_purple;
          }
        }
      }

      if (props && props.color === 'primary') {
        if (line_type === 'stroke') {
          colorValue = color.primary_palette.franklin_purple;
        }
        if (line_type === 'fill') {
          colorValue = color.primary_palette.white;
        }
      }
      return colorValue;
    };
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 167 170">
          {/* <defs>
            <path id="filled_key_svg__a" d="M0 0h30.947v14H0z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="filled_key_svg__b" fill={color.primary_palette.white}>
              <use xlinkHref="#filled_key_svg__a" />
            </mask>
            <path
              d="M29.686 5.37l-16.023-.106c-.26-.532-.701-.882-1.202-.882-.496 0-.932.343-1.193.866l-1.184-.008c.44-.553.703-1.257.703-2.026C10.787 1.44 9.382 0 7.647 0 5.915 0 4.509 1.44 4.509 3.214c0 .113.006.224.017.333a3.063 3.063 0 00-1.385-.333C1.406 3.214 0 4.654 0 6.428c0 1.776 1.406 3.214 3.14 3.214.498 0 .966-.121 1.385-.333a3.25 3.25 0 00-.017.333c0 1.776 1.406 3.215 3.14 3.215 1.734 0 3.14-1.44 3.14-3.215a3.24 3.24 0 00-.793-2.13l1.28.009c.262.515.695.854 1.186.854.486 0 .913-.333 1.176-.838l9.64.063V14l1.694-.006v-1.916l1.742-.006v1.915l1.793-.006V7.6h1.23c1.624 0 1.624-2.23-.05-2.23"
              fill={getColor(props, 'fill')}
              stroke={getColor(props, 'stroke')}
              mask="url(#filled_key_svg__b)"
            />
          </g> */}

          <g fill="none" fillRule="evenodd">
            <path
              d="M167 122.31s-4.397 3.933-5.19 4.618c-28.239 22.076-60.97 35.427-96.635 43.072L0 60.215l.465-4.692S64.533 53.295 83.507 0l78.96 93.93s-4.534 5.142-8.424 9.673l7.658 8.222-2.557 2.591L167 122.31zm-4.26-.544l-4.916-5.148c-41.777 38.95-92.28 50.402-92.28 50.402v.825c26.845-6.067 49.457-15.505 66.085-24.727 19.781-10.975 31.111-21.352 31.111-21.352zm-10.331-15.941c-42.386 45.414-86.864 59.41-86.864 59.41v.872c24.485-6.934 60.184-26.258 78.748-41.569 9.217-7.611 13.88-12.68 13.88-12.68l-5.764-6.033z"
              fill="#000"
            />
            <path
              d="M64.663 163s23.236-6.293 50.281-27.36c13.417-10.452 28.598-23.524 42.056-41.35L84.623 7S69.695 51.597 4 59.302L64.663 163z"
              fill="#FFF"
            />
            <path
              d="M115 115.561c-5.669 4.723-7.496 6.136-12.282 9.439-12.344-17.66-24.254-35.528-36.95-52.958-6.158 3.45-12.558 6.202-21.688 10.407-.566.262-1.18.478-1.952.787-.269-.545-.565-.982-.71-1.467-1.497-4.87 1.158-9.317 5.862-12.15 3.51-2.112 5.117-4.762 6.034-8.039.448-1.607 1.09-3.094 2.344-4.218.104-.087.145-.128.249-.222.358-.289 1.593-.935 1.593-.935s10.323-7.151 10.323-7.171c2.276-2.072 4.655-2.395 7.069-2.133 3.703.41 7.034-.007 10.054-2.126 4.049-2.832 8.103-2.213 11.641 1.413.352.363.635.807 1.014 1.278-.4.444-.697.814-1.02 1.13-5.414 5.187-10.841 10.018-17.6 14.908C90.76 81.003 102.794 98.346 115 115.561z"
              fill="#410166"
            />
            <path fill="#FFF" d="M103 122L59 58.995 69 52l43 63z" />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Flipbook_Icon = withStyles({
    root: {
      '& > svg': {
        // fontSize: '1.65rem',
      },
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Flipbook_Icon {...props} />
    </>
  );
}

export default Flipbook_Icon;
