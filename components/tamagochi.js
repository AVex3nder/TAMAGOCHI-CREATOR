import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useContext} from '../context/context';

const Tamagochi = () => {
  const {tamagochiPaths, spritePositions, userTamagochi} = useContext();
  const spritePath = tamagochiPaths[userTamagochi];

  return (
    <>
      <View style={[styles.view, styles.partsView.bodyView]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.body]}
        />
      </View>
      <View style={[styles.view, styles.partsView.headView]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.head]}
        />
      </View>
      <View style={[styles.view, styles.partsView.eyesView]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.eyes]}
        />
      </View>
      <View style={[styles.view, styles.partsView.detailView]}>
        <Image
          source={spritePath}
          style={[styles.sprite, spritePositions.detail]}
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
  partsView: {
    bodyView: {
      top: 300,
      left: 100,
      width: 150,
      height: 180,
    },
    headView: {
      top: 292,
      left: 75,
      width: 190,
      height: 140,
    },
    eyesView: {
      top: 330,
      left: 120,
      width: 100,
      height: 80,
    },
    detailView: {
      top: 400,
      left: 120,
      width: 100,
      height: 50,
    },
  },
});

export default Tamagochi;
