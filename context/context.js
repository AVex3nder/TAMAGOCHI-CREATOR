import {StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';

const Context = React.createContext();

export function ContextProvider(props) {
  // static globals:
  // game statics:
  const TICK_RATE = 1000;

  // components statics:
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

  // DYNAMIC GLOBALS:
  // game states:
  const [gameState, setGameState] = useState('IDLING');

  // user selected tamagochi:
  const [userTamagochi, setUserTamagochi] = useState('monkey');

  // sprite positioning states for animations:
  const [spriteState, setSpriteState] = useState({
    bodyLeft: 570,
    headLeft: 570,
    eyesLeft: 570,
    detailLeft: 570,
  });

  // sprite styles (left property is dynamic):
  const spritePositions = StyleSheet.create({
    body: {
      left: spriteState.bodyLeft,
    },
    head: {
      left: spriteState.headLeft,
      top: 310,
    },
    eyes: {
      left: spriteState.eyesLeft,
      top: 130,
    },
    detail: {
      left: spriteState.detailLeft,
      top: -230,
    },
  });

  // sprite animations:
  const idle = () => {
    // I just need to check for one condition, in this case eyes position:
    switch (spriteState.eyesLeft) {
      case 570:
        setSpriteState(previous => {
          return {...previous, eyesLeft: 465, headLeft: 382}; // then I move as many parts as I wish
        });
        break;
      case 465:
        setSpriteState(previous => {
          return {...previous, eyesLeft: 570, headLeft: 570};
        });
    }
  };

  const dance = () => {
    switch (spriteState.bodyLeft) {
      case 570 || 350:
        setSpriteState(previous => {
          return {
            ...previous,
            eyesLeft: 350,
            headLeft: 300,
            bodyLeft: 460,
            detailLeft: 460,
          };
        });
        break;
      case 460:
        setSpriteState(previous => {
          return {
            ...previous,
            eyesLeft: 570,
            headLeft: 200,
            bodyLeft: 350,
            detailLeft: 570,
          };
        });
    }
  };

  // button handlers:
  const toggleDance = () => {
    if (gameState === 'IDLING') {
      setGameState('DANCING');
    } else {
      setGameState('IDLING');
    }
  };

  const value = React.useMemo(() => {
    return {
      backgroundPaths,
      tamagochiPaths,
      userTamagochi,
      wW,
      wH,
      spritePositions,
      gameState,
      setGameState,
      TICK_RATE,
      idle,
      dance,
      toggleDance,
    };
  }, [spritePositions]);

  return <Context.Provider value={value} {...props} />;
}

export function useContext() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('animation context not provided');
  }
  return context;
}
