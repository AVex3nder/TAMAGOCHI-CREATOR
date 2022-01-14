import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {backgroundPaths, wH, vW} from '../configs/configs';

const Background = ({userBackground}) => {
  const bgPath = backgroundPaths[userBackground];

  return (
    <View>
      <Image style={styles.background} source={bgPath} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 0.7 * wH,
  },
});

export default Background;
