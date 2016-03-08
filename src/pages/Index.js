import React, {
  DrawerLayoutAndroid,
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Index.styles';
import DrawerNavigation from '../components/DrawerNavigation.js';

class Index extends React.Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => DrawerNavigation}>
        <View style={styles.centerContainer}>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default Index
