import React, {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './DrawerNavigation.styles';

class DrawerNavigation extends React.Component {
  render() {
    return(
      <View style={styles.navigationView}>
        <View style={styles.header}>
          <View style={styles.headerProfile}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={require('../assets/splash/splashtee0.png')} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>ysc</Text>
            </View>
          </View>
        </View>
        <View style={styles.navigation}>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    )
  }
}

export default DrawerNavigation
