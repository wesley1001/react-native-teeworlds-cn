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
import { connect } from 'react-redux';

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
              <View style={styles.listView}>
                {
                  this.systemAction() && this.systemAction().map((row, key) => {
                    return(
                      <TouchableHighlight key={key} underlayColor={'#ECECEC'} style={[styles.rowButton, key != 0 ? {borderTopWidth: 1} : {}]} onPress={row.callback}>
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
                  })
                }
              </View>
          </View>
          <View style={styles.footerAction}>
            <View style={styles.listView}>
              {
                this.footerAction() && this.footerAction().map((row, key) => {
                  return(
                    <TouchableHighlight key={key} underlayColor={'#ECECEC'} style={[styles.rowButton, key != 0 ? {borderTopWidth: 1} : {}]} onPress={row.callback}>
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
                })
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  systemAction = () => [
    {text: '主题配色', value: this.props.theme.name, arrow: true, callback: () => {Router.gotoPage(Router.pages.Settings.Themes)}},
    {text: '消息提醒', value: (this.props.options.notifications ? '开启' : '关闭'), arrow: true, callback: () => {}},
  ];

  footerAction = () => [
    {text: '检查更新', value: this.props.appVersion, arrow: false, callback: () => {}},
    {text: '问题反馈', arrow: true, callback: () => {}},
    {text: '关于中国社区', arrow: true, callback: () => {}},
  ];
}

export default connect(state => ({
    theme: state.config.theme,
    appVersion: state.config.appVersion,
    options: state.config.options,
}), dispatch => ({
    //addNewCity: (info) => dispatch(addCity(info))
}))(Settings);
