import {
  StyleSheet,
  //Dimensions,
} from 'react-native';

import globalStyles from '../../styles';
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
    paddingHorizontal: 16,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  rowInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  rowText: {
    color: '#000000',
    //padding: 8,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
export default {
  ...globalStyles,
  ...localStyles,
};
