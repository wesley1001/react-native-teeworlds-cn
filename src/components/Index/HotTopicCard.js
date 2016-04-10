import React, {
  Image,
  Text,
  View,
} from 'react-native';

import styles from './HotTopicCard.styles';
import AvatarCircle from '../AvatarCircle';

class HotTopicCard extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.avatar}>
            <AvatarCircle size={this.props.avatarSize} avatar={this.props.avatar} />
          </View>
          <View style={styles.right}>
            <View style={styles.header}>
              <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.info}>
                <Text style={styles.infoText}>{this.props.author}</Text>
                <Text style={styles.infoText}>|</Text>
                <Text style={styles.infoText}>{this.props.date}</Text>
              </View>
              <View style={styles.count}>
                <View style={styles.viewCount}>
                  {this.props.viewCount}
                </View>
                <View style={styles.replyCount}>
                  {this.props.replyCount}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )

  }
}

export default HotTopicCard
