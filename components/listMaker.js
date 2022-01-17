import React, {useState} from 'react';
import {ScrollView, Image, Text, Pressable, StyleSheet} from 'react-native';
import GameOverlay from './game/gameOverlay';
import ListItem from './listItem';

const ListMaker = ({listArray, paths, handler}) => {
  const [selected, setSelected] = useState(null);

  return (
    <ScrollView horizontal={true} style={styles.scroll}>
      {listArray.length &&
        listArray.map(item => {
          return (
            <ListItem
              handler={handler}
              paths={paths}
              item={item}
              key={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    overflow: 'scroll',
  },
});

export default ListMaker;
