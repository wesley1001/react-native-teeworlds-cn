import React, {
  Image,
  Text,
  ToolbarAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './Toolbar.styles';
const defaultAvatar = require('../assets/md_icons/toolbar/person/person.png');

class Toolbar extends React.Component {
  render() {
    return(
      <View style={styles.toolbar}>
      </View>
    )
  }
}

export default Toolbar
