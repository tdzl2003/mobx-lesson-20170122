/**
 * Created by tdzl2003 on 1/20/17.
 */
import React, { PropTypes, Component } from 'react';

import {
  View,
  StyleSheet,
  ListView,
  Text,
} from 'react-native';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  price: {
    marginLeft: 10,
    flex: 1,
  },
  btn: {
    padding: 8,
    borderWidth: 1,
  },
});

class CartItem {

  name = '';
  price = 0;

  @observable
  count = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  @action
  inc = () => {
    ++this.count;
  }

  @action
  dec = () => {
    if (this.count > 0) {
      --this.count;
    }
  }
};

class Cart {

  @observable
  items = [];

  constructor() {
    for (let i = 0; i < 150; i++) {
      this.items.push(new CartItem(
        `商品${i}`,
        Math.floor(Math.random() * 100000)/100,
      ));
    }
    this.items.push(new CartItem('商品1', 100));
    this.items.push(new CartItem('商品2', 123.4));
    this.items.push(new CartItem('商品3', 12345));
  }

  @computed
  get count() {
    return this.items.reduce((a, b) => a + b.count, 0);
  }

  @computed
  get price() {
    return this.items.reduce((a, b) => a + (b.price * b.count), 0);
  }
}

@observer
class Item extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(CartItem),
  };
  render() {
    const { data } = this.props;
    return (
      <View style={styles.item}>
        <Text>{data.name}</Text>
        <Text style={styles.price}>${data.price}</Text>
        <Text>{data.count}</Text>
        <Text style={styles.btn} onPress={data.inc}>+</Text>
        <Text style={styles.btn} onPress={data.dec}>-</Text>
      </View>
    );
  }
};

const Info = observer(function({cart}) {
  return (
    <Text>
      Count: {`${cart.count}`} {'\n'}
      Price: {cart.price.toFixed(2)} {'\n'}
    </Text>
  );
});

export default class Demo extends Component {
  static title = '6 - List & Global Computed';

  cart = new Cart();

  ds = new ListView.DataSource({
    rowHasChanged: (v1, v2) => v1 !== v2,
  });

  renderRow = (data) => {
    return (
      <Item data={data} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.cart.items.slice(0))}
          renderRow={this.renderRow}
        />
        <Info cart={this.cart} />
      </View>
    );
  }
}