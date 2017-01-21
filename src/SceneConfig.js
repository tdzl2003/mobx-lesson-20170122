/**
 * Created by tdzl2003 on 12/17/16.
 */

import {
  Navigator,
} from 'react-native';
import buildStyleInterpolator from 'react-native/Libraries/Utilities/buildStyleInterpolator';

export const DefaultSceneConfig = Navigator.SceneConfigs.PushFromRight;

const FadeOutHalf = {
  opacity: {
    from: 1,
    to: 0.3,
    min: 0,
    max: 0.5,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
};

export const FadeModal = {
  ...Navigator.SceneConfigs.FadeAndroid,
  isModal: true,
  animationInterpolators: {
    ...Navigator.SceneConfigs.FadeAndroid.animationInterpolators,
    out: buildStyleInterpolator(FadeOutHalf),
  },
};

export const BottomModal = {
  ...Navigator.SceneConfigs.FloatFromBottom,
  isModal: true,
};

export function configureScene({ sceneConfig, location, component }) {
  if (sceneConfig) {
    return sceneConfig;
  }
  if (component && component.sceneConfig) {
    return component.sceneConfig;
  }
  return DefaultSceneConfig;
}
