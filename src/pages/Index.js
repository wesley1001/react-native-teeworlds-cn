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
import AvatarCircle from '../components/AvatarCircle';
import * as icons from '../icons';
const defaultAvatar = require('../assets/md_icons/toolbar/person/person.png');
const menu = require('../assets/md_icons/menu/menu.png');
const testAvatar = require('../assets/950.jpg');
import { ToolbarIcons } from '../icons';
var toolbarActions = [
  {title: 'Notifications', icon: ToolbarIcons.notifications},
  {title: 'Search', icon: ToolbarIcons.search},
];


class Index extends React.Component {
  openDrawer() {
    this.drawer.openDrawer();
  }
  renderAvatar() {
    return(
      <AvatarCircle size={32} padding={12} avatar={testAvatar} />
    )
  }
  render() {
    return(
      <View style={styles.container}>
        <Toolbar
          title={this.props.title}
          renderLeft={this.renderAvatar.bind(this)}
          actions={toolbarActions} />
        <View style={styles.content}>
          
        </View>
      </View>
    );
  }
}

export default Index
