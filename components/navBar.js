import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {appIconPaths} from '../helpers/constants';
import {useContext} from '../context/context';

const NavBar = () => {
  const {userTamagochi} = useContext();

  return (
    <View style={styles.navbar}>
      {userTamagochi && (
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={appIconPaths[userTamagochi]} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>TAMAGOCHI CREATOR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: '10%',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
    marginLeft: '2%',
  },
  iconContainer: {
    justifyContent: 'center',
  },
});

export default NavBar;
