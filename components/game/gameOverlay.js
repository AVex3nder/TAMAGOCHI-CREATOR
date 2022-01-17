import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverlay = () => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.text}>PRESS THE MIDDLE BUTTON TO START GAME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    padding: '5%',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#28f2a3',
    zIndex: 1,
  },
  text: {fontSize: 50, fontWeight: '700', color: 'black'},
});

export default GameOverlay;
