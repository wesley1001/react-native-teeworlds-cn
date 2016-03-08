import React, {
  DrawerLayoutAndroid,
  Image,
  Text,
  ToolbarAndroid,
  View,
} from 'react-native';

import styles from './Index.styles';
import DrawerNavigation from '../components/DrawerNavigation.js';
import Toolbar from '../components/Toolbar.js';

class Index extends React.Component {
  render() {
    return(
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => DrawerNavigation}>
        <View style={styles.container}>
          <Toolbar title={this.props.title} />
          <View style={styles.content}>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default Index
