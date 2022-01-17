import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ListMaker from './listMaker';
import {
  CHARACTERS,
  BACKGROUNDS,
  PATHS,
  appIconPaths,
} from '../helpers/constants';
import {useContext} from '../context/context';

const SelectionForm = ({navigation}) => {
  const {setUserBackground, setUserTamagochi, userTamagochi, userBackground} =
    useContext();

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>CHOOSE YOUR CHARACTER!</Text>
        <ListMaker
          listArray={CHARACTERS}
          paths={appIconPaths}
          handler={setUserTamagochi}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>CHOOSE YOUR BACKGROUND!</Text>
        <ListMaker
          listArray={BACKGROUNDS}
          paths={PATHS}
          handler={setUserBackground}
        />
      </View>
      <Pressable
        style={styles.button}
        onPressOut={() => navigation.navigate('Game')}
        disabled={!(userTamagochi && userBackground)}>
        <Text style={styles.text}>Go to Game!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: '5%',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  button: {
    borderWidth: 5,
  },
});

export default SelectionForm;
