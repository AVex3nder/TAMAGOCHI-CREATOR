import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
  CHARACTERS,
  BACKGROUNDS,
} from '../helpers/constants';

const Context = React.createContext();

export function ContextProvider(props) {
  // DYNAMIC GLOBALS:
  // game states:
  const [gameState, setGameState] = useState({
    play: false,
    current: 'IDLING',
    clock: 1,
    hungryTime: 5,
    poopTime: -1,
    dieTime: -1,
    dieTokens: [],
  });

  // user selected tamagochi:
  const [userTamagochi, setUserTamagochi] = useState(null);

  // user selected background
  const [userBackground, setUserBackground] = useState(null);

  // sprite positioning states for animations:
  const [spriteState, setSpriteState] = useState({
    bodyLeft: 570,
    headLeft: 570,
    eyesLeft: 570,
    detailLeft: 570,
  });

  // GAME STATE HANDLERS:
  // function gameTick() holds the game loop logic:
  const gameTick = () => {
    setGameState(previous => {
      return {...previous, clock: gameState.clock + 1};
    });

    switch (gameState.current) {
      case 'IDLING':
        animation.idle();
        break;
      case 'HUNGRY':
        animation.hunger();
    }

    if (gameState.dieTime === gameState.clock) {
      tamagochiGets.newDieToken();
    }

    if (gameState.hungryTime === gameState.clock) {
      tamagochiGets.hungry();
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
    newDieToken: () => {
      if (gameState.dieTokens.length >= 4) {
        setGameState(previous => {
          return {...previous, current: 'DEAD'};
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
            detailLeft: 570,
          });
          break;
        case 465:
          setSpriteState({
            eyesLeft: 570,
            headLeft: 570,
            bodyLeft: 570,
            detailLeft: 570,
          });
          break;
        default:
          // I set a default for when I return from other positions (other animations):
          setSpriteState({
            eyesLeft: 465,
            headLeft: 382,
            bodyLeft: 570,
            detailLeft: 570,
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
            detailLeft: 458,
          });
          break;
        case 194:
          setSpriteState({
            eyesLeft: 570,
            headLeft: 6,
            bodyLeft: 274,
            detailLeft: 570,
          });
          break;
        default:
          setSpriteState({
            eyesLeft: 260,
            headLeft: 194,
            bodyLeft: 420,
            detailLeft: 458,
          });
      }
    },
  };

  // button handlers:
  const togglePlay = () => {
    setGameState(previous => {
      if (!gameState.play) {
        return {...previous, play: true};
      } else {
        return {...previous, play: false};
      }
    });
  };

  const handleFeed = () => {
    gameState.current === 'HUNGRY' &&
      setGameState(previous => {
        return {...previous, current: 'POOPY'};
      });
  };

  const handlePoop = () => {
    gameState.current === 'POOPY' &&
      setGameState(previous => {
        return {...previous, current: 'IDLING'};
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
