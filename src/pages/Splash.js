import React, {
  Animated,
  View,
  Image,
  Text,
} from 'react-native';

import styles from './Splash.styles';
const SplashImage = require('../assets/splash/splash.png');
import Router from '../router';
import pages from '../pages';
// const SplashImages = [
//   require('../assets/splash/splashtee0.png'),
//   require('../assets/splash/splashtee1.png'),
//   require('../assets/splash/splashtee2.png'),
//   require('../assets/splash/splashtee3.png'),
//   require('../assets/splash/splashtee4.png'),
//   require('../assets/splash/splashtee5.png'),
// ];

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // iconOpacity: new Animated.Value(0),
      // iconSize: new Animated.Value(20),
      // textOpacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    setTimeout(() => {
      Router.replace(Router.pages.Home)
    } , 5000);
  }
  // componentDidMount() {
  //   Animated.parallel([
  //     Animated.parallel([
  //       Animated.spring(
  //         this.state.iconSize,
  //         {
  //           toValue: 100,
  //           friction: 2.5,
  //           tension: 40,
  //         }
  //       ),
  //       Animated.timing(
  //         this.state.iconOpacity,
  //         {
  //           toValue: 1,
  //           duration: 1000,
  //         }
  //       ),
  //     ]),
  //     Animated.timing(
  //       this.state.textOpacity,
  //       {
  //         toValue: 1,
  //         duration: 2000,
  //       }
  //     ),
  //   ]).start();
  //
  // }

  render() {
    return(
      <View style={styles.centerContainer}>
        <View style={styles.splash}>
          <View style={styles.icon}>
            <Image style={styles.splashImage} source={SplashImage} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.splashText}>Teeworlds 中国社区</Text>
            <Text style={styles.splashPlatform}>based on Android</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Splash
