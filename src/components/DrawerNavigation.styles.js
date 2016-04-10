import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../theme.js';

const localStyles = StyleSheet.create({
  navigationView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerProfile: {
    padding: 20,
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
    color: 'white',
  },
  avatarContainer: {
    borderRadius: 32,
    backgroundColor: 'white'
  },
  avatar: {
    width: 64,
    height: 64,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
