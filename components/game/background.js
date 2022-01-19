import React from 'react';
import {View, Image} from 'react-native';
import {PATHS, wH} from '../../helpers/constants';
import {useContext} from '../../context/context';

const Background = () => {
  const {userBackground} = useContext();
  const bgPath = PATHS[userBackground];

  return (
    <View style={{height: '78%'}}>
      <Image style={{alignSelf: 'center', height: 600}} source={bgPath} />
    </View>
  );
};

export default Background;
