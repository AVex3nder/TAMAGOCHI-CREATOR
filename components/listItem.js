import React, {useState} from 'react';
import {Pressable, Image, Text, StyleSheet} from 'react-native';
import GameOverlay from './game/gameOverlay';

const ListItem = ({handler, paths, item}) => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      style={styles.press}
      onPressIn={() => setSelected(!selected)}
      onPressOut={() => {
        handler(item);
      }}>
      {selected && <GameOverlay />}
      <Image source={paths[item]} style={styles.image} />
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});

export default ListItem;
