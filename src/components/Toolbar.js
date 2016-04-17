import React, {
  Image,
  Text,
  ToolbarAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './Toolbar.styles';
import { connect } from 'react-redux';

class Toolbar extends React.Component {
  render() {
    const { theme } = this.props;
    return(
      <View style={[styles.toolbar, { backgroundColor: theme.color }]}>
        <View style={styles.left}>
          {this.props.renderLeft ? this.props.renderLeft() : (this.props.navIcon && this.props.onIconClicked ?
              <TouchableOpacity style={styles.navButton} onPress={this.props.onIconClicked}>
                <Image style={styles.navIcon} source={this.props.navIcon} />
              </TouchableOpacity>
          : null )}
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.right}>
          {
            this.props.actions ?
            this.props.actions.map(({icon, callback}, uniqueToken) => {
              return(
                <TouchableOpacity key={uniqueToken} style={styles.button} onPress={callback}>
                  <Image style={styles.buttonImage} source={icon} />
                </TouchableOpacity>
              );
            })
            : null
          }
        </View>
      </View>
    )
  }
}

export default connect(state => ({
    theme: state.config.theme,
}), dispatch => ({
    //addNewCity: (info) => dispatch(addCity(info))
}))(Toolbar);
