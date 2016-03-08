import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../theme.js';

const localStyles = StyleSheet.create({
  navigationView: {
    flex: 1,
    backgroundColor: theme.light,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
