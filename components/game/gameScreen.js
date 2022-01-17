import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import Background from './background';
import GameOverlay from './gameOverlay';
import {useContext} from '../../context/context';
import {TICK_RATE} from '../../helpers/constants';

const GameScreen = () => {
  const {gameState, gameTick} = useContext();

  useEffect(() => {
    // create timer for the game with condition to pause/play the timer
    const timerID = setInterval(() => {
      if (gameState.play) {
        gameTick();
      }
    }, TICK_RATE);
    if (!gameState.play && timerID) {
      clearInterval(timerID);
    }
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [gameState.play, gameTick]); // update timer on gameState.play change

  return (
    <View style={styles.view}>
      {!gameState.play && <GameOverlay />}
      <Background />
      <Tamagochi />
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
