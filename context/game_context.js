import React, {useState} from 'react';
import {
  getNextHungerTime,
  getNextPoopTime,
  getNextDieTime,
} from '../helpers/constants';
import {useSprite} from './sprite_context';

const GameContext = React.createContext();

export function GameProvider(props) {
  const {animation} = useSprite();

  const [gameState, setGameState] = useState({
    play: true,
    current: 'IDLING',
    clock: 1,
    hungryTime: -1,
    poopTime: -1,
    dieTime: -1,
    dieTokens: [],
  });

  // gameTick holds the game loop logic
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

    // this switch handles the animations
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

    // game logic according to state
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
      gameState.hungryTime + 5 <= gameState.clock
    ) {
      tamagochiGets.fed();
    }
    if (
      gameState.current === 'POOPING' &&
      gameState.poopTime + 5 <= gameState.clock
    ) {
      tamagochiGets.pooped();
    }
  };

  // function to handle game states:
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

  // button handlers:
  const togglePlay = () => {
    // if game state is DEAD the game is over so it will reset for a new game:
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
      // else it just pauses/plays
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

  const value = {
    gameState,
    setGameState,
    tamagochiGets,
    gameTick,
    togglePlay,
    handleFeed,
    handlePoop,
  };

  return <GameContext.Provider value={value} {...props} />;
}

export function useGameContext() {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('Game Context not provided');
  }
  return context;
}
