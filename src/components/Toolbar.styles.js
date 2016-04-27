import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import theme from '../themes.js';

const localStyles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    //paddingHorizontal: 32,
    //justifyContent: 'center',
    //backgroundColor: theme.toolbar ? theme.toolbar : theme[0].color,
    height: 56,
  },
  left: {
    flex: 3,
    //alignItems: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 3,
    alignItems: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    //flexWrap: 'nowrap',
  },
  center: {
    flex: 4,
    //alignItems: 'center',
    //alignSelf: 'center',
    //justifyContent: 'center',
  },
  inner: {
    flex: 1,
    height: 56,
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  button: {
    //flex: 1,
    height: 40,
    width: 40,
  },
  navButton: {
    height: 56,
    width: 56,
  },
  navIcon: {
    margin: 16,
    height: 24,
    width: 24,
  },
  buttonImage: {
    margin: 8,
    //marginVertical: 16,
    //marginHorizontal: 8,
    height: 24,
    width: 24,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
