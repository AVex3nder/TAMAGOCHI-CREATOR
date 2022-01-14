import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import Background from './background';
import {useContext} from '../context/context';

const GameScreen = ({userBackground, userTamagochi, moveAnim}) => {
  const {wH} = useContext();

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
    borderWidth: 5,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default GameScreen;
