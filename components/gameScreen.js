import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import Background from './background';
import {wH, wW} from '../configs/configs';

const GameScreen = ({userBackground, userTamagochi, moveAnim}) => {
  return (
    <View style={styles.view}>
      <Background userBackground={userBackground} />
      <Tamagochi userTamagochi={userTamagochi} moveAnim={moveAnim} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    width: '90%',
    height: 0.7 * wH,
    borderWidth: 5,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default GameScreen;
