import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {PATHS} from '../../helpers/constants';
import {useSprite} from '../../context/sprite_context';

const Tamagochi = () => {
  const {userTamagochi, spriteState} = useSprite();
  const spritePath = PATHS[userTamagochi];

  // sprite positions, left prop is dynamic and comes from spriteState:
  const spritePositions = StyleSheet.create({
    body: {
      left: spriteState.bodyLeft,
      top: spriteState.bodyTop,
    },
    head: {
      left: spriteState.headLeft,
      top: 310,
    },
    eyes: {
      left: spriteState.eyesLeft,
      top: 130,
    },
  });

  return (
    <>
      <View style={[styles.view, styles.parts.body]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.body]}
        />
      </View>
      <View style={[styles.view, styles.parts.head]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.head]}
        />
      </View>
      <View style={[styles.view, styles.parts.eyes]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.eyes]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    overflow: 'hidden',
    position: 'absolute',
  },
  sprite: {
    overflow: 'visible',
    transform: [{scale: 4}],
  },
  parts: {
    body: {
      top: 300,
      left: 100,
      width: 150,
      height: 180,
    },
    head: {
      top: 292,
      left: 75,
      width: 190,
      height: 140,
    },
    eyes: {
      top: 330,
      left: 120,
      width: 100,
      height: 80,
    },
    detail: {
      top: 400,
      left: 120,
      width: 100,
      height: 50,
    },
  },
});

export default Tamagochi;
