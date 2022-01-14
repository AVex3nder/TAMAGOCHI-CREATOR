import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useContext} from '../context/context';

const Tamagochi = ({userTamagochi}) => {
  const {moveAnim, tamagochiPaths} = useContext();
  const spritePath = tamagochiPaths[userTamagochi];

  return (
    <>
      <View style={styles.bodyView}>
        {/* <Animated.Image
          source={spritePath}
          style={[styles.sprite, {left: moveAnim}]}
        /> */}
        <Image source={spritePath} style={styles.body1} />
      </View>
      <View style={styles.headView}>
        <Image source={spritePath} style={styles.head1} />
      </View>
      <View style={styles.eyesView}>
        <Image source={spritePath} style={styles.eyes1} />
      </View>
      <View style={styles.detailView}>
        <Image source={spritePath} style={styles.detail1} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sprite: {
    overflow: 'visible',
    // left: 570,
    transform: [{scale: 4}],
  },
  bodyView: {
    overflow: 'hidden',
    position: 'absolute',
    top: 300,
    left: 100,
    width: 150,
    height: 180,
    // borderWidth: 5,
  },
  body1: {
    overflow: 'visible',
    transform: [{scale: 4}],
    left: 570,
  },
  headView: {
    overflow: 'hidden',
    position: 'absolute',
    top: 292,
    left: 75,
    width: 190,
    height: 150,
  },
  head1: {
    overflow: 'visible',
    transform: [{scale: 4}],
    zIndex: 1,
    left: 570,
    top: 310,
  },
  eyesView: {
    overflow: 'hidden',
    position: 'absolute',
    top: 330,
    left: 75,
    width: 140,
    height: 80,
  },
  eyes1: {
    overflow: 'visible',
    transform: [{scale: 4}],
    zIndex: 1,
    left: 615,
    top: 130,
  },
  detailView: {
    overflow: 'hidden',
    position: 'absolute',
    top: 400,
    left: 120,
    width: 100,
    height: 50,
  },
  detail1: {
    overflow: 'visible',
    transform: [{scale: 4}],
    zIndex: 0,
    left: 570,
    top: -230,
  },
});

export default Tamagochi;
