import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import PopElement from './popElement';
import Background from './background';
import Overlay from '../overlay';
import {useContext} from '../../context/context';
import {TICK_RATE} from '../../helpers/constants';

const GameScreen = () => {
  const {gameState, gameTick} = useContext();

  // create timer for the game with condition to pause/play the timer
  useEffect(() => {
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
      {/* activate this <Text> for monitoring the game states and debugging */}
      <Text style={{color: 'black'}}>
        {gameState.clock} /{gameState.current} /POOP:{gameState.poopTime}{' '}
        /HUNGER:{gameState.hungryTime} /DIETIME:{gameState.dieTime} /
        {gameState.dieTokens.length}
      </Text>
      {!gameState.play && (
        <Overlay text={'PRESS THE MIDDLE BUTTON TO START GAME'} />
      )}
      <Background />
      {gameState.current !== 'DEAD' && <Tamagochi />}
      {gameState.current === 'POOPED' && (
        <View style={styles.poop}>
          <PopElement element={'poop'} />
        </View>
      )}
      {gameState.current === 'EATING' && (
        <View style={styles.pizza}>
          <PopElement element={'pizza'} />
        </View>
      )}
      {gameState.current === 'DEAD' && (
        <View style={styles.rip}>
          <PopElement element={'rip'} />
        </View>
      )}
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
  poop: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    justifyContent: 'center',
  },
  pizza: {
    position: 'absolute',
    top: 300,
    left: 50,
    justifyContent: 'center',
  },
  rip: {
    position: 'absolute',
    top: 380,
    left: 140,
    justifyContent: 'center',
  },
});

export default GameScreen;
