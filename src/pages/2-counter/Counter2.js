/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  value: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  btn: {
    padding: 8,
    borderWidth: 1,
  },
});

@observer
export default class Counter2 extends Component {
  @observable
  counter = 0;

  inc = () => {
    ++this.counter;
  };

  dec = () => {
    --this.counter;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{this.counter}</Text>
        <Text style={styles.btn} onPress={this.inc}>+</Text>
        <Text style={styles.btn} onPress={this.dec}>-</Text>
      </View>
    );
  }
}
