import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import globalStyles from '../styles';
const {height, width} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  splashImage: {
    width: width,
    height: height,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
