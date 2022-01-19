// game constants:
const TICK_RATE = 1000;
const TAMAGOCHI = ['monkey', 'ninja'];
const BACKGROUND = ['beach', 'mountain'];
const PATHS = {
  mountain: require('../sprites/background/mountain_town.png'),
  beach: require('../sprites/background/beach_town.png'),
  monkey: require('../sprites/tamagochi/monkey.png'),
  ninja: require('../sprites/tamagochi/ninja.png'),
};
const ICON_PATHS = {
  monkey: require('../sprites/tamagochi/monkey_icon.png'),
  ninja: require('../sprites/tamagochi/ninja_icon.png'),
};

// game loop times calculators:
const getNextHungerTime = clock => Math.floor(Math.random() * 10) + 10 + clock;
const getNextPoopTime = clock => Math.floor(Math.random() * 10) + 10 + clock;
const getNextDieTime = clock => Math.floor(Math.random() * 5) + 5 + clock;

module.exports = {
  TICK_RATE,
  TAMAGOCHI,
  BACKGROUND,
  PATHS,
  ICON_PATHS,
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
};
