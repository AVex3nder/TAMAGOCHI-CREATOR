import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Overlay = ({text}) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.text}>{text}</Text>
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
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
  },
});

export default Overlay;
