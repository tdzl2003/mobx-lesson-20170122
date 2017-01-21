/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  WebView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { observer } from 'mobx-react/native';
import { observable, computed } from 'mobx';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  item: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
  },
});

const Item = observer(function Item({visible, id}) {
  if (!visible.get()) {
    return <View style={styles.item} />;
  }
  return (
    <View style={styles.item}>
      <WebView
        source={{ uri: `https://www.baidu.com/s?wd=${id}` }} style={styles.item}
        dataDetectorTypes="none"
        scalesPageToFit={false}
      />
    </View>
  );
})

const list = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

export default class CounterList extends Component {
  static hideNavBar = false;
  static title = '9 - Optimized Swiper';

  @observable
  currentIndex = 0;

  visible = list.map((v, i) => computed(() =>
    this.currentIndex >= i - 1 &&
    this.currentIndex <= i + 1
  ));

  onMomentumScrollEnd = (ev, state)=>{
    const { index } = state;
    console.warn(index);
    this.currentIndex = index;
  }

  render() {
    return (
      <Swiper
        onMomentumScrollEnd={this.onMomentumScrollEnd}
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT - 64}
        loop={false}
        showsPagination={false}
        autoplay={false}
      >
        {list.map((item, i) => <Item visible={this.visible[i]} id={item} key={item}/>)}
      </Swiper>
    );
  }
}
