import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useContext} from '../../context/context';

const PopElement = ({element}) => {
  const {gameState} = useContext();
  const [sprite, setSprite] = useState('a');
  const paths = {
    rip: {
      a: require('../../sprites/others/RIP.png'),
      b: require('../../sprites/others/RIP.png'),
      c: require('../../sprites/others/RIP.png'),
    },
    poop: {
      a: require('../../sprites/others/poop1.png'),
      b: require('../../sprites/others/poop2.png'),
      c: require('../../sprites/others/poop3.png'),
    },
    pizza: {
      a: require('../../sprites/others/pizza1.png'),
      b: require('../../sprites/others/pizza2.png'),
      c: require('../../sprites/others/pizza3.png'),
    },
  };

  useEffect(() => {
    setSprite(previous => {
      if (previous === 'a') {
        return 'b';
      } else if (previous === 'b') {
        return 'c';
      } else {
        return 'a';
      }
    });
  }, [gameState.clock]);

  return <Image source={paths[element][sprite]} style={styles.sprite} />;
};

const styles = StyleSheet.create({
  sprite: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
});

export default PopElement;
