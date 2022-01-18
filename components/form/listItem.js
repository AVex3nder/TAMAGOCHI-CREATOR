import React from 'react';
import {Pressable, Image, Text, StyleSheet} from 'react-native';
import Overlay from '../overlay';

const ListItem = ({handler, paths, item, selected, setSelected}) => {
  return (
    <Pressable
      style={styles.press}
      onPressOut={() => {
        if (selected === item) {
          handler(null);
          setSelected(null);
        } else {
          handler(item);
          setSelected(item);
        }
      }}>
      {selected === item && <Overlay text={'SELECTED'} />}
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
