import React, {
  View,
  Image,
  ListView,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
var Icon = require('react-native-vector-icons/MaterialIcons');
import styles from './Settings.styles';
import Router from '../router';
import Toolbar from '../components/Toolbar';
import { ToolbarIcons, SettingsIcons } from '../icons';
import {connect} from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      systemActionData: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(this.systemAction),
      footerActionData: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(this.footerAction),
    };
  }

  componentDidMount() {

  }

  renderRow(row, sectionId, rowId) {
    return(
      <TouchableHighlight underlayColor={'#ECECEC'} style={[styles.rowButton, rowId != 0 ? {borderTopWidth: 1} : {}]} onPress={row.callback}>
        <View style={styles.rowInner}>
          <Text style={styles.rowText}>{row.text}</Text>
          <View style={styles.rowRight}>
            <Text style={styles.rowValue}>
              {row.value}
            </Text>
            {row.arrow ? (<Icon name="chevron-right" size={18} color="#7F7F7F" />) : null}


          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return(
      <View style={styles.containerDark}>
        <Toolbar
          title={this.props.title}
          navIcon={ToolbarIcons.arrows.left}
          onIconClicked={() => Router.pop()} />
        <ScrollView style={styles.content}>
          <View style={styles.systemAction}>
            <Text style={styles.listHeader}>系统设置</Text>
            <ListView
              contentContainerStyle={styles.listView}
              dataSource={this.state.systemActionData}
              renderRow={this.renderRow} />
          </View>
          <View style={styles.footerAction}>
            <ListView
              contentContainerStyle={styles.listView}
              dataSource={this.state.footerActionData}
              renderRow={this.renderRow} />
          </View>
        </ScrollView>
      </View>
    );
  }
  systemAction = [
    {text: '主题配色', value: this.props.theme.name, arrow: true, callback: () => {}},
    {text: '消息提醒', value: (this.props.options.notifications ? '开启' : '关闭'), arrow: true, callback: () => {}},
  ];

  footerAction = [
    {text: '检查更新', value: this.props.appVersion, arrow: false, callback: () => {}},
    {text: '问题反馈', arrow: true, callback: () => {}},
    {text: '关于中国社区', arrow: true, callback: () => {}},
  ];
}

export default connect(state => ({
    theme: state.session.theme,
    appVersion: state.session.appVersion,
    options: state.session.options,
}), dispatch => ({
    //addNewCity: (info) => dispatch(addCity(info))
}))(Settings);
