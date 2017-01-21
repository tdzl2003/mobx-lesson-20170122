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

const counter = observable(0);

function inc() {
  counter.set(counter.get() + 1);
}

function dec() {
  counter.set(counter.get() - 1);
}

@observer
export default class Counter1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{counter.get()}</Text>
        <Text style={styles.btn} onPress={inc}>+</Text>
        <Text style={styles.btn} onPress={dec}>-</Text>
      </View>
    );
  }
}
