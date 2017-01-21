/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Counter1 from './Counter1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default class CounterList extends Component {
  static hideNavBar = false;
  static title = '8 - Autosaved';

  render() {
    return (
      <View style={styles.container}>
        <Counter1 />
      </View>
    );
  }
}
