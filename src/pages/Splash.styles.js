import {
  StyleSheet,
  //Dimensions,
} from 'react-native';

import globalStyles from '../styles';
//const {height, width} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  splash: {
    alignItems: 'center',
  },
  // splashText: {
  //   fontSize: 20,
  //   padding: 10,
  // },
  splashText: {
    fontSize: 15,
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
