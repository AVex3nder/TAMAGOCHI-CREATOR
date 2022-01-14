/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {Button, View, Animated} from 'react-native';
import GameScreen from './components/gameScreen';
import Form from './components/form';
import ButtonBar from './components/buttonBar';

const App = () => {
  const [userBackground, setUserBackground] = useState('mountain');
  const [userTamagochi, setUserTamagochi] = useState('monkey');

  const moveAnim = useRef(new Animated.Value(570)).current;
  const move = () => {
    Animated.timing(moveAnim, {
      toValue: -30,
      duration: 3000,
    }).start();
  };

  return (
    <>
      <View>
        <GameScreen
          moveAnim={moveAnim}
          userBackground={userBackground}
          userTamagochi={userTamagochi}
        />
      </View>
      <ButtonBar move={move} />
    </>
  );
};

export default App;
