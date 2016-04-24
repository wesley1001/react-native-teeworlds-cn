import {
  StyleSheet,
  //Dimensions,
} from 'react-native';

import globalStyles from '../styles';
//const {height, width} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 11,
  },
  listHeader: {
    marginLeft: 9,
    fontSize: 12,
    marginBottom: 7,
  },
  rowButton: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 8,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  rowInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    color: '#4C4C4C',
    marginLeft: 8,
    //padding: 8,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowValue: {
    color: '#7F7F7F',
    fontSize: 12,
  },
  rowArrow: {
    width: 24,
    height: 24,
  },
  listView: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#BCBCBC',
  },
  systemAction: {
    flex: 1,
  },
  footerAction: {
    flex: 1,
    borderRadius: 3,
    marginTop: 17,
  }
});
export default {
  ...globalStyles,
  ...localStyles,
};
