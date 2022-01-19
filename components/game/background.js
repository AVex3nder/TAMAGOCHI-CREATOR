import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {PATHS} from '../../helpers/constants';
import {useSprite} from '../../context/sprite_context';

const Background = () => {
  const {userBackground} = useSprite();
  const bgPath = PATHS[userBackground];

  return (
    <View style={styles.view}>
      <Image style={styles.image} source={bgPath} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '78%',
  },
  image: {
    alignSelf: 'center',
    height: 600,
  },
});

export default Background;
