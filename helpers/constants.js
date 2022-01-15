import {Dimensions} from 'react-native';

// game constants:
const TICK_RATE = 1000;
const CHARACTERS = ['monkey', 'ninja'];
const BACKGROUNDS = ['beach', 'mountain'];

const getNextHungerTime = clock => Math.floor(Math.random() * 10) + 10 + clock;
const getNextPoopTime = clock => Math.floor(Math.random() * 3) + 3 + clock;
const getNextDieTime = clock => Math.floor(Math.random() * 10) + 10 + clock;

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

module.exports = {
  TICK_RATE,
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
  backgroundPaths,
  tamagochiPaths,
  wW,
  wH,
};
