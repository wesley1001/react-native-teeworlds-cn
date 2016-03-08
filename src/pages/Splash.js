import React, {
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Splash.styles';
const SplashImages = [
  require('../assets/splash/splashtee0.png'),
  require('../assets/splash/splashtee1.png'),
  require('../assets/splash/splashtee2.png'),
  require('../assets/splash/splashtee3.png'),
  require('../assets/splash/splashtee4.png'),
  require('../assets/splash/splashtee5.png'),
];


export default class Splash extends React.Component {
  splashImage = SplashImages[parseInt(5*Math.random())];
  render() {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.splash}>
          <Image style={styles.splashImage} source={this.splashImage} />
          <Text style={styles.splashText}>Teeworlds CN</Text>
        </View>
      </View>
    );
  }
}
