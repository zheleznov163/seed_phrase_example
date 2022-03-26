import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import * as Screens from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

export default () => (
  <Stack.Navigator screenOptions={options.default}>
    <Stack.Screen component={Screens.Preview} name="Preview" />
    <Stack.Screen component={Screens.GenerateSeed} name="GenerateSeed" />
  </Stack.Navigator>
);

const options = {
  default: {
    headerShown: false,
  },
};
