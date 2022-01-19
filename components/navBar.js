import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {ICON_PATHS} from '../helpers/constants';
import {useSprite} from '../context/sprite_context';
import {useGameContext} from '../context/game_context';

const NavBar = ({navigation, showIcon}) => {
  const {userTamagochi} = useSprite();
  const {setGameState} = useGameContext();
  return (
    <View style={styles.navbar}>
      {showIcon && (
        <Pressable
          style={styles.iconContainer}
          onPressIn={() =>
            setGameState(previous => {
              return {...previous, play: false};
            })
          }
          onPressOut={() => navigation.navigate('Form')}>
          <Image source={ICON_PATHS[userTamagochi]} style={styles.icon} />
        </Pressable>
      )}
      <Text style={styles.title}>TAMAGOCHI CREATOR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: '8%',
    marginTop: '1%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
    textShadowOffset: {
      width: -2,
      height: 2,
    },
    textShadowRadius: 10,
    textShadowColor: '#28f2a3',
    alignSelf: 'center',
  },
  iconContainer: {
    height: 60,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  icon: {
    height: 80,
    alignSelf: 'center',
  },
});

export default NavBar;
