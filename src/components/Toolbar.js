import React, {
  ToolbarAndroid
} from 'react-native';

import styles from './Toolbar.styles';
import * as icons from '../icons'

class DrawerNavigation extends React.Component {
  render() {
    return(
      <ToolbarAndroid
        title={this.props.title}
        titleColor={'#FFFFFF'}
        navIcon={this.props.navIcon}
        onIconClicked={this.props.onIconClicked}
        subtitle={this.props.subtitle}
        subtitleColor={this.props.subtitleColor}
        style={styles.toolbar} />
    )
  }
}

export default DrawerNavigation
