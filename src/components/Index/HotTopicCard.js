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
        <View style={styles.avatar}>
			<AvatarCircle avatar={this.props.avatar} size={48} />
        </View> 
		<View style={styles.right>
			<View style={styles.header}>
				<Text>{this.props.title}</Text>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>{this.props.username}</Text>
				<Text style={styles.footerText}>|</Text>
				<Text style={styles.footerText}>{this.props.date}</Text>
				<View style={styles.topicInfoContainer}>
					<View style={styles.topicInfo}>
					</View>
					<View style={styles.replyCount}>
					</View>
				</View>
			</View>
		</View>
      </View>
    )

  }
}

export default HotTopicCard
