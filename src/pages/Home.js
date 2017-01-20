/**
 * Created by tdzl2003 on 12/18/16.
 */

import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default class Home extends Component {
  static hideNavBar = false;
  static title = '首页';
  static contextTypes = {
    navigator: PropTypes.object,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is splash page</Text>
      </View>
    );
  }
}
