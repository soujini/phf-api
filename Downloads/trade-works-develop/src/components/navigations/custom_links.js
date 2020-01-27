/**
 * Custom Link component derived from Material UI Link .
 */
import React from 'react';
import Link from '@material-ui/core/Link';
import { color, px_to_rem_sizes } from '../../utilities/themes';
import { withStyles } from '@material-ui/core/styles';
/**
 * Link Component to used accross applications for navigations
 * @param {*} props
 */
function CustomLink(props) {
  function styleLink(props) {
    return <Link {...props}></Link>;
  }
  /**
   * Style customization for inputs
   */
  const CustomLink = withStyles({
    root: {},
  })(styleLink);
  /**
   * Style customization for formcontrol label
   */

  return <CustomLink {...props}></CustomLink>;
}

export default CustomLink;
