import React, {
  ToolbarAndroid
} from 'react-native';

import styles from './Toolbar.styles';

class DrawerNavigation extends React.Component {
  render() {
    return(
      <ToolbarAndroid
        title={this.props.title}
        titleColor={'#FFFFFF'}
        subtitle={this.props.subtitle}
        subtitleColor={this.props.subtitleColor}
        style={styles.toolbar} />
    )
  }
}

export default DrawerNavigation
