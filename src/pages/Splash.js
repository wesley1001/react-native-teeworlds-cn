import React, {
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Splash.styles';

export default class Splash extends React.Component {
  splash = require('../assets/splash.png');
  render() {
    // <Text style={styles.title}>
    //   Teeworlds 中国
    // </Text>
    return (
      <View style={styles.centerContainer}>
        <Image style={styles.splashImage} source={this.splash} />
      </View>
    );
  }
}
