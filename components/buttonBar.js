import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useContext} from '../context/context';

const ButtonBar = () => {
  const {toggleDance} = useContext();

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleDance()}
        disabled={false}
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={() => move()}
        disabled={false}
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={() => move()}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: '5%',
    padding: 5,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderRadius: 40,
    backgroundColor: '#28f2a3',
  },
});

export default ButtonBar;
