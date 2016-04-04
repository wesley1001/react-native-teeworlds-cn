import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../theme.js';

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
