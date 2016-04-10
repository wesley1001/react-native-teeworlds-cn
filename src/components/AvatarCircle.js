import React, {
  Image,
  Text,
  View,
} from 'react-native';

import styles from './AvatarCircle.styles';

class AvatarCircle extends React.Component {
  render() {
    const imageStyle = {
      borderRadius: this.props.circle ?  this.props.size / 2 : 0,
      height: this.props.size,
      width: this.props.size
    };
    return(
      <View style={[styles.container,{padding: this.props.padding ? this.props.padding : 0}]}>
          <Image source={this.props.avatar} style={imageStyle} />
      </View>
    )
  }
}

export default AvatarCircle
