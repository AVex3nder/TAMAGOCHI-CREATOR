import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useContext} from '../../context/context';

const ButtonBar = () => {
  const {handleFeed, handlePoop, togglePlay, gameState} = useContext();
  const foodIcon = (
    <Icon size={40} name={'pizza-slice'} color={'black'} style={styles.icon} />
  );
  const poopIcon = (
    <Icon size={40} name={'poo'} color={'black'} style={styles.icon} />
  );
  const playIcon = (
    <Icon
      size={40}
      name={gameState.play ? 'pause' : 'play'}
      color={'black'}
      style={styles.icon}
    />
  );

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleFeed()}
        disabled={false}>
        {foodIcon}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => togglePlay()}
        disabled={false}>
        {playIcon}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePoop()}
        disabled={false}>
        {poopIcon}
      </TouchableOpacity>
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
  icon: {
    alignSelf: 'center',
    marginTop: 11,
  },
});

export default ButtonBar;
