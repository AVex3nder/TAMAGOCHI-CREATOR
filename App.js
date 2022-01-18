/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import GameMain from './components/game/gameMain';
import SelectionForm from './components/form/selectionForm';
import {ContextProvider} from './context/context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen
            name="Form"
            component={SelectionForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={GameMain}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);
