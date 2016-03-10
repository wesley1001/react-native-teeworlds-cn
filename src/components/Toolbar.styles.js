import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../theme.js';

const localStyles = StyleSheet.create({
  toolbar: {
    //backgroundColor: theme.dark,
    //flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: theme.toolbar,
    height: 154 / 3,
  },
  title: {
    flex: 6,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  avatarContainer: {
    flex: 2,
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  actionContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: {
    marginLeft: 10,
  },
  actionImage: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 24,
    height: 24,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
