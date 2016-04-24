import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 100,
  },
  footer: {
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
