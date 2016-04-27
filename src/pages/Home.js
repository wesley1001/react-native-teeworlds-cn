import React, {
  DrawerLayoutAndroid,
  Image,
  ListView,
  Text,
  ToolbarAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');
import styles from './Home.styles';
import Toolbar from '../components/Toolbar.js';
import AvatarCircle from '../components/AvatarCircle';
import HotTopicCard from '../components/Home/HotTopicCard';
import * as API from '../api';
const testAvatar = require('../assets/950.jpg');
import { ToolbarIcons } from '../icons';
import Router from '../router';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      page: 1,
      done: false,
    };
  }

  toolbarActions = [
    {name: 'Search', icon: ToolbarIcons.search,},
    {name: 'Settings', icon: ToolbarIcons.settings, callback: this.goSettings},
  ];

  componentDidMount() {
    this.loadingNext();
  }

  async loadingNext() {
    if(this.state.done !== true) {
      let json = await API.getTopicList("new", this.state.page);
      console.log("I'm here!");
      this.setState({
        topics: this.state.topics.cloneWithRows(json.list),
        done: (json.has_next!=1),
        page: this.state.page + 1,
      });
    }
  }

  openDrawer() {
    this.drawer.openDrawer();
  }
  renderAvatar() {
    return(
      <AvatarCircle circle={true} size={32} padding={12} avatar={testAvatar} />
    )
  }

  renderRow(topic) {
    const date = new Date(parseInt(topic.last_reply_date));
    return(
      <HotTopicCard
        avatar={{uri: topic.userAvatar}}
        avatarSize={48}
        title={topic.title}
        author={topic.user_nick_name}
        date={date.toCustomString()}/>
    );
  }

  goSettings() {
    Router.gotoPage(Router.pages.Settings);
  }

  render() {
    return(
      <View style={styles.container}>
        <Toolbar
          title={this.props.title}
          renderLeft={this.renderAvatar.bind(this)}
          actions={this.toolbarActions} />
        <ListView
          style={styles.listView}
          dataSource={this.state.topics}
          pageSize={10}
          renderRow={this.renderRow.bind(this)}
          onEndReached={this.loadingNext.bind(this)}
          onEndReachedThreshold={320}>
        </ListView>
        <View style={styles.footer}>
          <TouchableOpacity sytle={styles.footerButton}>
            <Icon name="navicon-round" size={20} color="#9D9D9D" />
          </TouchableOpacity>
          <TouchableOpacity sytle={styles.footerButton}>
            <Icon name="compose" size={20} color="#9D9D9D" />
          </TouchableOpacity>
          <TouchableOpacity sytle={styles.footerButton}>
            <Icon name="android-refresh" size={20} color="#9D9D9D" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home
