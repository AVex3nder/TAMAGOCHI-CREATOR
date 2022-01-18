import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
  TAMAGOCHI,
  BACKGROUND,
} from '../helpers/constants';

const Context = React.createContext();

export function ContextProvider(props) {
  // DYNAMIC GLOBALS:
  // game states:
  const [gameState, setGameState] = useState({
    play: true,
    current: 'IDLING',
    clock: 1,
    hungryTime: -1,
    poopTime: -1,
    dieTime: -1,
    dieTokens: [],
  });

  // user choice related states:
  const [userTamagochi, setUserTamagochi] = useState('monkey');
  const [userBackground, setUserBackground] = useState('beach');

  // sprite positioning states for animations:
  const [spriteState, setSpriteState] = useState({
    bodyLeft: 570,
    headLeft: 570,
    eyesLeft: 570,
    bodyTop: null,
  });

  // GAME STATE HANDLERS:
  // function gameTick() holds the game loop logic:
  const gameTick = () => {
    // initialization when game clock === 1:
    if (gameState.clock === 1) {
      setGameState(previous => {
        return {...previous, hungryTime: getNextHungerTime(gameState.clock)};
      });
    }

    // advance game clock by 1 each loop:
    setGameState(previous => {
      return {...previous, clock: gameState.clock + 1};
    });

    switch (gameState.current) {
      case 'IDLING':
        animation.idle();
        break;
      case 'FED':
        animation.idle();
        break;
      case 'POOPED':
        animation.idle();
        break;
      case 'HUNGRY':
        animation.hunger();
        break;
      case 'EATING':
        animation.eating();
        break;
      case 'POOPING':
        animation.poop();
        break;
      case 'POOPED':
        animation.idle();
        break;
      case 'DEAD':
        return;
    }

    if (gameState.dieTime === gameState.clock) {
      tamagochiGets.newDieToken();
    }
    if (gameState.hungryTime === gameState.clock) {
      tamagochiGets.hungry();
    }
    if (gameState.current === 'FED' && gameState.poopTime === gameState.clock) {
      tamagochiGets.poopy();
    }
    if (
      gameState.current === 'EATING' &&
      gameState.hungryTime + 5 === gameState.clock
    ) {
      tamagochiGets.fed();
    }
    if (
      gameState.current === 'POOPING' &&
      gameState.poopTime + 5 === gameState.clock
    ) {
      tamagochiGets.pooped();
    }
  };

  // tamagochiGets handles the game state changes:
  const tamagochiGets = {
    idling: () => {
      setGameState(previous => {
        return {...previous, current: 'IDLING'};
      });
    },
    hungry: () => {
      setGameState(previous => {
        return {
          ...previous,
          current: 'HUNGRY',
          dieTime: getNextDieTime(gameState.clock),
        };
      });
    },
    fed: () => {
      setGameState(previous => {
        return {
          ...previous,
          current: 'FED',
          hungryTime: -1,
          poopTime: getNextPoopTime(gameState.clock),
          dieTime: -1,
        };
      });
    },
    poopy: () => {
      setGameState(previous => {
        return {
          ...previous,
          current: 'POOPING',
        };
      });
    },
    pooped: () => {
      setGameState(previous => {
        return {
          ...previous,
          current: 'POOPED',
          dieTime: getNextDieTime(gameState.clock),
        };
      });
    },
    newDieToken: () => {
      if (gameState.dieTokens.length >= 3) {
        setGameState({
          play: false,
          current: 'DEAD',
          clock: 1,
          hungryTime: -1,
          poopTime: -1,
          dieTime: -1,
          dieTokens: [],
        });
      } else {
        setGameState(previous => {
          return {
            ...previous,
            dieTime: getNextDieTime(gameState.clock),
            dieTokens: [...gameState.dieTokens, 'dieToken'],
          };
        });
      }
    },
  };

  // sprite animations:
  const animation = {
    idle: () => {
      // I just need to check for one condition, in this case eyes position:
      switch (spriteState.eyesLeft) {
        case 570: // then move the parts:
          setSpriteState({
            eyesLeft: 465,
            headLeft: 382,
            bodyLeft: 570,
            bodyTop: 0,
          });
          break;
        case 465:
          setSpriteState({
            eyesLeft: 570,
            headLeft: 570,
            bodyLeft: 570,
            bodyTop: 0,
          });
          break;
        default:
          // I set a default for when I return from other positions (other animations):
          setSpriteState({
            eyesLeft: 465,
            headLeft: 382,
            bodyLeft: 570,
            bodyTop: 0,
          });
          break;
      }
    },
    hunger: () => {
      switch (spriteState.headLeft) {
        case 382:
          setSpriteState({
            eyesLeft: 260,
            headLeft: 194,
            bodyLeft: 420,
            bodyTop: 0,
          });
          break;
        case 194:
          setSpriteState({
            eyesLeft: 570,
            headLeft: 6,
            bodyLeft: 274,
            bodyTop: 0,
          });
          break;
        default:
          setSpriteState({
            eyesLeft: 260,
            headLeft: 194,
            bodyLeft: 420,
            bodyTop: 0,
          });
      }
    },
    eating: () => {
      switch (spriteState.bodyLeft) {
        case -450:
          setSpriteState({
            eyesLeft: -615,
            headLeft: -175,
            bodyLeft: -305,
            bodyTop: -15,
          });
          break;
        case -305:
          setSpriteState({
            eyesLeft: -710,
            headLeft: -175,
            bodyLeft: -450,
            bodyTop: -15,
          });
          break;
        default:
          setSpriteState({
            eyesLeft: -615,
            headLeft: -175,
            bodyLeft: -305,
            bodyTop: -15,
          });
      }
    },
    poop: () => {
      switch (spriteState.eyesLeft) {
        case -804:
          setSpriteState({
            eyesLeft: -50,
            headLeft: 5,
            bodyLeft: 570,
            bodyTop: 0,
          });
          break;
        case -50:
          setSpriteState({
            eyesLeft: -804,
            headLeft: 194,
            bodyLeft: 125,
            bodyTop: 0,
          });
          break;
        default:
          setSpriteState({
            eyesLeft: -50,
            headLeft: 5,
            bodyLeft: 570,
            bodyTop: 0,
          });
      }
    },
  };

  // button handlers:
  const togglePlay = () => {
    if (gameState.current === 'DEAD') {
      setGameState({
        play: true,
        current: 'IDLING',
        clock: 1,
        hungryTime: -1,
        poopTime: -1,
        dieTime: -1,
        dieTokens: [],
      });
    } else {
      setGameState(previous => {
        if (!gameState.play) {
          return {...previous, play: true};
        } else {
          return {...previous, play: false};
        }
      });
    }
  };

  const handleFeed = () => {
    gameState.current === 'HUNGRY' &&
      setGameState(previous => {
        return {
          ...previous,
          current: 'EATING',
          dieTime: -1,
        };
      });
  };

  const handlePoop = () => {
    gameState.current === 'POOPED' &&
      setGameState(previous => {
        return {
          ...previous,
          current: 'IDLING',
          hungryTime: getNextHungerTime(gameState.clock),
          dieTime: -1,
        };
      });
  };

  // context prop value:
  const value = {
    userTamagochi,
    setUserTamagochi,
    userBackground,
    setUserBackground,
    spriteState,
    setSpriteState,
    gameState,
    setGameState,
    animation,
    tamagochiGets,
    gameTick,
    togglePlay,
    handleFeed,
    handlePoop,
  };

  return <Context.Provider value={value} {...props} />;
}

export function useContext() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('Context not provided');
  }
  return context;
}
