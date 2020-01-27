import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function Close_Style_Icon(props) {
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
        <SvgIcon {...props} viewBox="0 0 15 18">
          <path
            fill={getColor(props, 'stroke')}
            d="M14.426 0l-.177.106-.142-.071h-.46l-.532.249-1.383 1.24-1.913 1.949-2.021 2.411-.744-2.694-.497-1.205L5.884.602 5.458.106l-.212.178h-.39l-.532.177-.496.496-.213.389v2.518l.745 3.083.815 2.339-2.127 2.8-1.595 2.305-.531.673-.745 1.418L0 17.12l.106.567.106.177.461-.107.426-.354.142.071.212-.354h.178l.46-.744.142-.036 1.028-1.17.39-.567 1.737-2.162.07-.178.709-.744 2.162 3.332 2.021 2.445.284-.105.213.425.318.177.107-.106.354.07.638.213-.248-.389h.142l.141.212h.142l-.212-.39-.39-.638.036-.106-.143-.638-.106-.035-.106-.355-.426-.638-1.346-2.942-1.099-2.978.177-.46.142-.071.142-.319.318-.283 1.985-2.305 1.312-1.346 1.169-1.383H14l.781-1.099.035-.177-.07-1.028L14.497 0z"
            fillRule="evenodd"
          />
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_Close_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_Close_Icon {...props} />
    </>
  );
}

export default Close_Style_Icon;
