import {Animated, Dimensions} from 'react-native';
import React, {useRef} from 'react';

const Context = React.createContext();

export function ContextProvider(props) {
  // static globals:
  const backgroundPaths = {
    mountain: require('../sprites/background/mountain_town.png'),
    beach: require('../sprites/background/beach_town.png'),
  };

  const tamagochiPaths = {
    monkey: require('../sprites/tamagochi/monkey.png'),
    ninja: require('../sprites/tamagochi/ninja.png'),
  };

  const wW = Dimensions.get('window').width;
  const wH = Dimensions.get('window').height;

  // dynamic globals:
  const moveAnim = useRef(new Animated.Value(570)).current;

  const value = React.useMemo(() => {
    const move = () => {
      Animated.timing(moveAnim, {
        toValue: -18,
        duration: 3000,
        useNativeDriver: false,
      }).start(() =>
        Animated.timing(moveAnim, {
          toValue: 570,
          duration: 3000,
          useNativeDriver: false,
        }).start(),
      );
    };

    return {
      backgroundPaths,
      tamagochiPaths,
      wW,
      wH,
      moveAnim,
      move,
    };
  }, []);

  return <Context.Provider value={value} {...props} />;
}

export function useContext() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('animation context not provided');
  }
  return context;
}
