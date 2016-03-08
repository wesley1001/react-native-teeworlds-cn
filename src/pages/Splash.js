import React, {
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Splash.styles';

export default class Splash extends React.Component {
  splash = require('../assets/splash/splashtee.png');
  render() {
    // <Text style={styles.title}>
    //   Teeworlds 中国
    // </Text>
    return (
      <View style={styles.centerContainer}>
        <View style={styles.splash}>
          <Image style={styles.splashImage} source={this.splash} />
          <Text style={styles.splashText}>Teeworlds CN</Text>
        </View>
      </View>
    );
  }
}
