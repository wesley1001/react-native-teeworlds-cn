import React, {
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Index.styles';

export default class Index extends React.Component {
  render() {
    return (
      <DrawerLayoutAndroid>
        <View style={styles.centerContainer}>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
