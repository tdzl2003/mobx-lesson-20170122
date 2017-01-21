/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { PropTypes, Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  ProgressViewIOS,
  ProgressBarAndroid,
} from 'react-native';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react/native';
import moment from 'moment';

const now = observable(moment());

function updateNow() {
  requestAnimationFrame(action(() => {
    now.set(moment());
    updateNow();
  }));
}
updateNow();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const date = computed(() => now.get().format('YYYY-MM-DD'));

const DateClock = observer(function () {
  return <Text>{date.get()}</Text>;
});

const clock = computed(() => now.get().format('hh:mm:ss'));

const Clock = observer(function () {
  return <Text>{clock.get()}</Text>;
});

@observer
class CoolDown extends Component {
  @observable
  cooldownAt = moment(0);

  @computed
  get coolDown() {
    const seconds = Math.floor(moment.duration({
      from: now.get(),
      to: this.cooldownAt,
    }).asSeconds());
    return `${seconds}秒后重试`;
  }

  @computed
  get disabled() {
    return this.cooldownAt >= now.get();
  }

  @action
  onPress = () => {
    this.cooldownAt = moment(now.get()).add(5, 'seconds');
  };

  render() {
    return (
      <Button
        disabled={this.disabled}
        title={this.disabled ? `${this.coolDown}` : 'Press Me'}
        onPress={this.onPress}
      />
    );
  }
}

const cycle = computed(() => now.get() % 3000);

const CycleProgress = observer(function () {
  if (__IOS__) {
    return (
      <ProgressViewIOS
        progress={cycle.get() / 3000}
      />
    );
  }
  return (
    <ProgressBarAndroid
      progress={cycle.get() / 3000}
    />
  )
});

export default class Demo extends Component {
  static title = '7 - Observable `now`';
  render() {
    return (
      <ScrollView style={styles.container}>
        <DateClock />
        <Clock />
        <CoolDown />
        <CycleProgress />
      </ScrollView>
    );
  }
}
