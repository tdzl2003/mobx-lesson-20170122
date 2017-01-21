/**
 * Created by tdzl2003 on 12/18/16.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Link from './Link';

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
  static title = 'Home';

  render() {
    return (
      <View style={styles.container}>
        <Link component={require('./1-introduce-mobx').default}>1 - Introduce mobx</Link>
        <Link component={require('./2-counter').default}>2 - Counter</Link>
        <Link component={require('./3-todo-list').default}>3 - TODO List</Link>
        <Link component={require('./4-login-form').default}>4 - Login Form</Link>
        <Link component={require('./5-page-list').default}>5 - Page List</Link>
        <Link component={require('./6-list-and-global-computed').default}>6 - List & Global Computed</Link>
        <Link component={require('./7-observable-now').default}>7 - Observable `now`</Link>
        <Link component={require('./8-autosave').default}>8 - Autosave</Link>
        <Link component={require('./9-optimized-swiper').default}>9 - Optimized Swiper</Link>
      </View>
    );
  }
}
