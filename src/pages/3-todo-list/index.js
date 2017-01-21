/**
 * Created by tdzl2003 on 1/20/17.
 */

import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  todo: {
    fontSize: 20,
  },
  done: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});

const titles = ['Eat', 'Drink', 'Think'];

class Todo {
  id = `${Date.now()}${Math.floor(Math.random()*10)}`;

  @observable
  title = '';

  @observable
  done = false;

  constructor(title) {
    this.title = title;
  }
}

function randomTodoTitle() {
  return titles[Math.floor(Math.random() * titles.length)];
}

@observer
class TodoItem extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Todo),
  };
  onPress = () => {
    const { data } = this.props;
    data.done = !data.done;
  };
  render() {
    const { data } = this.props;
    return (
      <Text
        style={[styles.item, data.done && styles.done]}
        onPress={this.onPress}
      >
        {data.title}
      </Text>
    );
  }
}

@observer
export default class TodoList extends Component {
  static hideNavBar = false;
  static title = '3 - TodoList';
  static rightNavTitle = 'Add';

  @observable
  todoList = [];

  onRightPressed() {
    this.todoList.push(new Todo(randomTodoTitle()));
  }

  renderItem(data) {
    return (<TodoItem key={data.id} data={data} />);
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {this.todoList.map(this.renderItem)}
      </ScrollView>
    );
  }
}
