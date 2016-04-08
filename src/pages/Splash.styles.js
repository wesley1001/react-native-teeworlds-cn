import {
  StyleSheet,
  //Dimensions,
} from 'react-native';

import globalStyles from '../styles';
//const {height, width} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  splash: {
    flex: 1,
    flexDirection: 'column',
    //paddingHorizontal: 20,
    //justifyContent: 'space-around',
    alignItems: 'center',
  },
  // splashText: {
  //   fontSize: 20,
  //   padding: 10,
  // },
  icon: {
    flex: 8,
    justifyContent: 'center',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
  },
  splashText: {
    //alignSelf: 'flex-end',
    color: '#D24D48',
    fontSize: 15,
  },
  splashPlatform: {
    //alignSelf: 'flex-end',
    color: '#E49491',
    fontSize: 12,
  },
  splashImage: {
    width: 103,
    height: 103,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
