import React, {
  View,
  Image,
  ListView,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
var Icon = require('react-native-vector-icons/MaterialIcons');
import styles from './Themes.styles';
import Router from '../../router';
import Toolbar from '../../components/Toolbar';
import { ToolbarIcons, SettingsIcons } from '../../icons';
import themes from '../../themes'
import { changeTheme } from '../../redux/modules/config';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { currentTheme, onColorPress } = this.props;
    return(
      <View style={styles.containerDark}>
        <Toolbar
          title={this.props.title}
          navIcon={ToolbarIcons.arrows.left}
          onIconClicked={() => Router.pop()} />
        <ScrollView style={styles.content}>
          <View style={styles.listView}>
            {
              themes && themes.map((theme, key) => {
                return(
                  <TouchableHighlight key={key} underlayColor={'#ECECEC'}
                    style={[styles.rowButton, key != 0 ? {borderTopWidth: 1} : {}]}
                    onPress={()=> onColorPress(theme)} >
                    <View style={styles.rowInner}>
                      <View style={styles.rowLeft}>
                        <View style={[styles.rowCircle, {backgroundColor: theme.color}]}></View>
                        <Text style={styles.rowText}>{theme.name}</Text>
                      </View>
                      <View style={styles.rowRight}>
                        {currentTheme === theme && (<Icon name={"check"} size={18} color={currentTheme.color} />)}
                      </View>
                    </View>
                  </TouchableHighlight>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => ({
    currentTheme: state.config.theme,
}), dispatch => ({
    onColorPress:(theme) => dispatch(changeTheme(theme))

}))(Settings);
