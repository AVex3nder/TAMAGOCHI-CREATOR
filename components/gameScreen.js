import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tamagochi from './tamagochi';
import Background from './background';
import {useContext} from '../context/context';
import {TICK_RATE} from '../helpers/constants';

const GameScreen = ({userBackground, userTamagochi, moveAnim}) => {
  const {animation, gameState} = useContext();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => gameTick(), TICK_RATE);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function gameTick() {
    setDate(new Date());

    switch (gameState) {
      case 'IDLING':
        animation.idle();
        break;
      case 'DANCING':
        animation.dance();
    }
  }

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
