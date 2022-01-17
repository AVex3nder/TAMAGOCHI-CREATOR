import React from 'react';
import {View} from 'react-native';
import GameScreen from './game/gameScreen';
import ButtonBar from './game/buttonBar';

const GameMain = () => {
  return (
    <View>
      <GameScreen />
      <ButtonBar />
    </View>
  );
};

export default GameMain;
