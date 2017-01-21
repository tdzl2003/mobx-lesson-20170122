/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
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
    width: 100,
  },
  btn: {
    padding: 8,
    borderWidth: 1,
  },
});

@observer
export default class Counter3 extends Component {
  @observable
  counter = 0;

  inc = () => {
    ++this.counter;
  };

  dec = () => {
    --this.counter;
  };

  onChangeText = v => {
    try {
      this.counter = parseInt(v);
    } catch (err) {

    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.value} value={`${this.counter}`} onChangeText={this.onChangeText} />
        <Text style={styles.btn} onPress={this.inc}>+</Text>
        <Text style={styles.btn} onPress={this.dec}>-</Text>
      </View>
    );
  }
}
