import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

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
