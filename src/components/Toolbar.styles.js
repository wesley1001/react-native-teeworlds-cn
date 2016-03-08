import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../theme.js';

const localStyles = StyleSheet.create({
  toolbar: {
    backgroundColor: theme.primary,
    height: 56,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
