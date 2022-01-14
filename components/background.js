import React from 'react';
import {View, Image} from 'react-native';
import {useContext} from '../context/context';

const Background = ({userBackground}) => {
  const {backgroundPaths, wH} = useContext();
  const bgPath = backgroundPaths[userBackground];

  return (
    <View>
      <Image style={{height: 0.7 * wH}} source={bgPath} />
    </View>
  );
};

export default Background;
