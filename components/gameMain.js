import React from 'react';
import {View} from 'react-native';
import GameScreen from './game/gameScreen';
import ButtonBar from './game/buttonBar';
import NavBar from './navBar';

const GameMain = ({navigation}) => {
  return (
    <View>
      <NavBar navigation={navigation} />
      <GameScreen />
      <ButtonBar />
    </View>
  );
};

export default GameMain;
