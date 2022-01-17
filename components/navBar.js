import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {appIconPaths} from '../helpers/constants';
import {useContext} from '../context/context';

const NavBar = ({navigation}) => {
  const {userTamagochi} = useContext();
  return (
    <View style={styles.navbar}>
      {userTamagochi && (
        <Pressable
          style={styles.iconContainer}
          onPressOut={() => navigation.navigate('Form')}>
          <Image source={appIconPaths[userTamagochi]} />
        </Pressable>
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
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    marginLeft: '2%',
  },
  iconContainer: {
    justifyContent: 'center',
  },
});

export default NavBar;
