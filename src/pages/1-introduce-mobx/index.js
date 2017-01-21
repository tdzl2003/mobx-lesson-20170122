/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Link from '../Link';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default class DemoList extends Component {
  static hideNavBar = false;
  static title = '1 - Introduce mobx';

  render() {
    return (
      <View style={styles.container}>
        <Link onPress={require('./demo1').default}>Observable</Link>
        <Link onPress={require('./demo2').default}>Computed</Link>
        <Link onPress={require('./demo3').default}>Observable Object</Link>
        <Link onPress={require('./demo4').default}>Observable Array</Link>
        <Link onPress={require('./demo5').default}>Use class&decorator</Link>
        <Link onPress={require('./demo6').default}>Observable Map</Link>
      </View>
    );
  }
}
