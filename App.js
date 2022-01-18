/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GameMain from './components/game/gameMain';
import SelectionForm from './components/form/selectionForm';
import {ContextProvider} from './context/context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
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
