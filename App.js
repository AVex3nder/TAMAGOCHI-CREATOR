/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GameMain from './components/gameMain';
import NavBar from './components/navBar';
import SelectionForm from './components/selectionForm';
import {ContextProvider} from './context/context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <NavBar />
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" component={SelectionForm} />
          <Stack.Screen name="Game" component={GameMain} />
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
