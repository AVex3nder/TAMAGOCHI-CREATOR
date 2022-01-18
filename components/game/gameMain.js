import React from 'react';
import {View} from 'react-native';
import GameScreen from './gameScreen';
import ButtonBar from './buttonBar';
import NavBar from '../navBar';

const GameMain = ({navigation}) => {
  return (
    <View>
      <NavBar navigation={navigation} showIcon={true} />
      <GameScreen />
      <ButtonBar />
    </View>
  );
};

export default GameMain;
