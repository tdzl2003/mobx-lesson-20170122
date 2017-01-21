/**
 * Created by tdzl2003 on 1/20/17.
 */
import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';

import { observer } from 'mobx-react/native';

import PageList from './PageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    height: 40,
    alignSelf: 'center',
  }
});

class SamplePage extends PageList {
  fetchData() {
    return {
      count: 1000,
      results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
}

@observer
export default class Demo extends Component {
  static title = '5 - Page List';
  ds = new ListView.DataSource({ rowHasChanged: (v1, v2) => v1 !== v2 });
  pageList = new SamplePage();
  renderRow = (row) => (
    <View style={styles.item}>
      <Text>{`${row}`}</Text>
    </View>
  );
  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.ds.cloneWithRows(this.pageList.data.slice(0))}
        renderRow={this.renderRow}
        onEndReached={this.pageList.fetchMore}
        style={styles.container}
      />
    );
  }
}
