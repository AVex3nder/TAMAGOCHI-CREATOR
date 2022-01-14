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
import Form from './components/selectionForm';
import ButtonBar from './components/buttonBar';
import {ContextProvider} from './context/context';

const App = () => {
  const [userBackground, setUserBackground] = useState('mountain');
  const [userTamagochi, setUserTamagochi] = useState('monkey');

  return (
    <>
      <View title={'placeholder for navbar'} style={{height: '10%'}} />
      <View>
        <GameScreen
          userBackground={userBackground}
          userTamagochi={userTamagochi}
        />
      </View>
      <ButtonBar />
    </>
  );
};

export default () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);
