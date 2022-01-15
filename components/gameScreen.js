import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import Background from './background';
import {useContext} from '../context/context';
import {TICK_RATE} from '../helpers/constants';

const GameScreen = ({userBackground, userTamagochi, moveAnim}) => {
  const {gameState, setGameState, tamagochiGets, animation} = useContext();

  useEffect(() => {
    const timerID = setInterval(() => gameTick(), TICK_RATE);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function gameTick() {
    setGameState(previous => {
      return {...previous, clock: gameState.clock + 1};
    });

    switch (gameState.current) {
      case 'IDLING':
        animation.idle();
        break;
      case 'HUNGRY':
        animation.hunger();
    }

    if (gameState.dieTime === gameState.clock) {
      tamagochiGets.newDieToken();
    }

    if (gameState.hungryTime === gameState.clock) {
      tamagochiGets.hungry();
    }
  }

  return (
    <View style={styles.view}>
      {/* <Text>{gameState.clock} </Text> */}
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
