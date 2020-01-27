import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import TradeWork_Theme from './themes';

// Create a themeprovider object from material ui createMUItheme method
// which accepts the custom tradework object
const TradeWork_ThemeBuilder = responsiveFontSizes(createMuiTheme(TradeWork_Theme));

export default TradeWork_ThemeBuilder;
