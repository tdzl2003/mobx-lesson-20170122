/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

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
  static title = '2 - Counter';

  render() {
    return (
      <View style={styles.container}>
        <Counter1 />
        <Counter2 />
        <Counter3 />
      </View>
    );
  }
}
