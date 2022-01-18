import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ListMaker from './listMaker';
import NavBar from '../navBar';
import {
  TAMAGOCHI,
  BACKGROUND,
  PATHS,
  ICON_PATHS,
} from '../../helpers/constants';
import {useContext} from '../../context/context';

const SelectionForm = ({navigation}) => {
  const [alert, setAlert] = useState(false);
  const {
    userTamagochi,
    setUserTamagochi,
    userBackground,
    setUserBackground,
    setGameState,
  } = useContext();

  useEffect(() => {
    setAlert(false);
    setUserBackground(null);
    setUserTamagochi(null);
    return setAlert(false);
  }, [setUserTamagochi, setUserBackground]);

  return (
    <View style={styles.main}>
      <NavBar />
      <View style={styles.view}>
        <Text style={styles.text}>CHOOSE YOUR CHARACTER!</Text>
        {!userTamagochi && alert && (
          <Text style={styles.alert}>You need to choose a Tamagochi!</Text>
        )}
        <ListMaker
          listArray={TAMAGOCHI}
          paths={ICON_PATHS}
          handler={setUserTamagochi}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>CHOOSE YOUR BACKGROUND!</Text>
        {!userBackground && alert && (
          <Text style={styles.alert}>You need to choose a background!</Text>
        )}
        <ListMaker
          listArray={BACKGROUND}
          paths={PATHS}
          handler={setUserBackground}
        />
      </View>
      <Pressable
        style={styles.button}
        onPressOut={() => {
          if (userTamagochi && userBackground) {
            setGameState(previous => {
              return {
                play: false,
                current: 'IDLING',
                clock: 1,
                hungryTime: -1,
                poopTime: -1,
                dieTime: -1,
                dieTokens: [],
              };
            });
            navigation.navigate('Game');
          } else {
            setAlert(true);
          }
        }}>
        <Text style={styles.buttonText}>GO TO GAME!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  view: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'center',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '7%',
    backgroundColor: '#28f2a3',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  alert: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: '4%',
    height: '20%',
    width: '100%',
    marginTop: '40%',
    backgroundColor: 'red',
    opacity: 0.7,
    zIndex: 1,
  },
});

export default SelectionForm;
