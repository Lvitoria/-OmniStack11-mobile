import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from '../pages/Incidents'
import Detail from '../pages/Detail'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      {/* tira o cabeçario screenOptions={{ headerShown: false }} */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;