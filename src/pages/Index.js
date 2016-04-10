import React, {
  DrawerLayoutAndroid,
  Image,
  ListView,
  Text,
  ToolbarAndroid,
  View,
} from 'react-native';

import styles from './Index.styles';
import DrawerNavigation from '../components/DrawerNavigation.js';
import Toolbar from '../components/Toolbar.js';
import AvatarCircle from '../components/AvatarCircle';
import HotTopicCard from '../components/Index/HotTopicCard';
import * as icons from '../icons';
import * as API from '../api';
const defaultAvatar = require('../assets/md_icons/toolbar/person/person.png');
const menu = require('../assets/md_icons/menu/menu.png');
const testAvatar = require('../assets/950.jpg');
import { ToolbarIcons } from '../icons';
var toolbarActions = [
  {title: 'Notifications', icon: ToolbarIcons.notifications},
  {title: 'Search', icon: ToolbarIcons.search},
];


class Index extends React.Component {
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
        date={date.toLocaleDateString()}/>
    );
  }
  render() {
    return(
      <View style={styles.container}>
        <Toolbar
          title={this.props.title}
          renderLeft={this.renderAvatar.bind(this)}
          actions={toolbarActions} />
        <ListView
          style={styles.listView}
          dataSource={this.state.topics}
          pageSize={10}
          renderRow={this.renderRow.bind(this)}
          onEndReached={this.loadingNext.bind(this)}
          onEndReachedThreshold={320}>
        </ListView>
      </View>
    );
  }
}

export default Index
