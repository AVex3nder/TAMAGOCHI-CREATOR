import {Dimensions} from 'react-native';

// game constants:
const TICK_RATE = 1000;

// components constants:
const backgroundPaths = {
  mountain: require('../sprites/background/mountain_town.png'),
  beach: require('../sprites/background/beach_town.png'),
};

const tamagochiPaths = {
  monkey: require('../sprites/tamagochi/monkey.png'),
  ninja: require('../sprites/tamagochi/ninja.png'),
};

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

module.exports = {TICK_RATE, backgroundPaths, tamagochiPaths, wW, wH};
