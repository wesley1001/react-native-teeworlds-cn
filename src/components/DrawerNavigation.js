import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './DrawerNavigation.styles';

class DrawerNavigation extends React.Component {
  render() {
    return(
      <View style={styles.navigationView}>
        <Text>Test!</Text>
      </View>
    )
  }
}

export default DrawerNavigation
