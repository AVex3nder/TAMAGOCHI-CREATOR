import {Animated} from 'react-native';
import React, {useRef} from 'react';

const AnimationContext = React.createContext();

export function AnimationProvider(props) {
  const moveAnim = useRef(new Animated.Value(570)).current;

  const value = React.useMemo(() => {
    const move = () => {
      Animated.timing(moveAnim, {
        toValue: -30,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    };

    return {
      moveAnim,
      move,
    };
  }, [moveAnim]);

  return <AnimationContext.Provider value={value} {...props} />;
}

export function useAnimation() {
  const context = React.useContext(AnimationContext);
  if (!context) {
    throw new Error('animation context not provided');
  }
  return context;
}
