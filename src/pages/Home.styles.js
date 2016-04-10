import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 100,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
