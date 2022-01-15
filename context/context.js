import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Context = React.createContext();

export function ContextProvider(props) {
  // DYNAMIC GLOBALS:
  // game states:
  const [gameState, setGameState] = useState('IDLING');

  // user selected tamagochi:
  const [userTamagochi, setUserTamagochi] = useState('monkey');

  // user selected background
  const [userBackground, setUserBackground] = useState('mountain');

  // sprite positioning states for animations:
  const [spriteState, setSpriteState] = useState({
    bodyLeft: 570,
    headLeft: 570,
    eyesLeft: 570,
    detailLeft: 570,
  });

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

    dance: () => {
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
  const handler = {
    toggleDance: () => {
      if (gameState === 'IDLING') {
        setGameState('DANCING');
      } else {
        setGameState('IDLING');
      }
    },
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
    handler,
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
