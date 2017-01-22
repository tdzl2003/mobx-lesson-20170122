/**
 * Created by tdzl2003 on 12/17/16.
 */
import React, { Component } from 'react';
import {
  BackAndroid,
  AppState,
  StyleSheet,
  View,
  Navigator,
  ToastAndroid,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { Subscribe, SubscribeDOM } from 'react-subscribe';
import Home from './pages/Home';
import NavigatorProvider from './utils/NavigatorProvider';
import hookNavigator from './utils/hookNavigator';
import { configureScene } from './SceneConfig';
import NavBar from './pages/NavBar';

const INITIAL_ROUTE = {
  component: Home,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
});

function configureSceneWithRoute(route) {
  return configureScene(route);
}

@observer
export default class App extends Component {
  onHardwareBackPress = () => {
    if (this.navigator) {
      this.navigator.pop();
    }
    return true;
  }
  onNavigatorRef = (ref) => {
    this.navigator = ref;
    if (ref) {
      hookNavigator(ref);
    }
  };
  renderScene = (currentRoute, navigator) => {
    const { passProps, component: Comp } = currentRoute || 0;
    if (Comp) {
      return (
        <NavigatorProvider navigator={navigator} currentRoute={currentRoute}>
          <NavBar navConfig={Comp}>
            <Comp {...passProps} />
          </NavBar>
        </NavigatorProvider>
      );
    }
    return null;
  };
  render() {
    return (
      <View style={styles.root}>
        {__ANDROID__ && <SubscribeDOM target={BackAndroid} eventName="hardwareBackPress" listener={this.onHardwareBackPress} />}
        <Navigator
          configureScene={configureSceneWithRoute}
          onWillFocus={this.onWillFocus}
          initialRoute={INITIAL_ROUTE}
          renderScene={this.renderScene}
          ref={this.onNavigatorRef}
        />
      </View>
    );
  }
}
