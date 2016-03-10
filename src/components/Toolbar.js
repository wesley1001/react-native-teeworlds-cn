import React, {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './Toolbar.styles';
import * as icons from '../icons'
const defaultAvatar = require('../assets/md_icons/toolbar/person/person.png');

class Toolbar extends React.Component {
  render() {
    return(
      <View style={styles.toolbar}>
        <View style={styles.avatarContainer}>
          <Image source={defaultAvatar} style={styles.avatar} />
        </View>
        <Text style={styles.title}>首页</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={()=> 1}>
            <Image
              style={styles.actionImage}
              source={defaultAvatar}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={()=> 1}>
            <Image
              style={styles.actionImage}
              source={defaultAvatar}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={()=> 1}>
            <Image
              style={styles.actionImage}
              source={defaultAvatar}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Toolbar
