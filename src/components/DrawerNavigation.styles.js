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
  headerProfile: {
    padding: 10,
    backgroundColor: theme.primary,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    height: 64,
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
