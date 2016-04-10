import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles';
import theme from '../../theme.js';

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //marginTop: 100,
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#CDCDCD',
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    marginLeft: 20,
    //alignItems: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    //alignSelf: 'flex-start',
  },
  title: {
    color: '#333333',
  },
  footer: {
    //alignSelf: 'flex-end',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
  },
  infoText: {
    color: '#7F7F7F',
    paddingHorizontal: 2,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
