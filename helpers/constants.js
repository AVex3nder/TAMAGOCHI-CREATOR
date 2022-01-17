import {Dimensions} from 'react-native';

// game constants:
const TICK_RATE = 1000;
const CHARACTERS = ['monkey', 'ninja'];
const BACKGROUNDS = ['beach', 'mountain'];
const PATHS = {
  mountain: require('../sprites/background/mountain_town.png'),
  beach: require('../sprites/background/beach_town.png'),
  monkey: require('../sprites/tamagochi/monkey.png'),
  ninja: require('../sprites/tamagochi/ninja.png'),
};

const getNextHungerTime = clock => Math.floor(Math.random() * 10) + 10 + clock;
const getNextPoopTime = clock => Math.floor(Math.random() * 3) + 3 + clock;
const getNextDieTime = clock => Math.floor(Math.random() * 10) + 10 + clock;

const appIconPaths = {
  monkey: require('../sprites/tamagochi/monkey_icon.png'),
  ninja: require('../sprites/tamagochi/ninja_icon.png'),
};

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

module.exports = {
  TICK_RATE,
  CHARACTERS,
  BACKGROUNDS,
  PATHS,
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
  appIconPaths,
  wW,
  wH,
};
