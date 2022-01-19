import React, {useState} from 'react';

const SpriteContext = React.createContext();

export function SpriteProvider(props) {
  // user choice related states:
  const [userTamagochi, setUserTamagochi] = useState(null);
  const [userBackground, setUserBackground] = useState(null);

  // sprite positioning states for animations:
  const [spriteState, setSpriteState] = useState({
    bodyLeft: 570,
    headLeft: 570,
    eyesLeft: 570,
    bodyTop: null,
  });

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
        // I set a default for when I return from other positions (other animations):
        default:
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

  const value = {
    userTamagochi,
    setUserTamagochi,
    userBackground,
    setUserBackground,
    spriteState,
    setSpriteState,
    animation,
  };

  return <SpriteContext.Provider value={value} {...props} />;
}

export function useSprite() {
  const context = React.useContext(SpriteContext);
  if (!context) {
    throw new Error('Sprite Context not provided');
  }
  return context;
}
