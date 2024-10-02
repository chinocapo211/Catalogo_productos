import React from 'react';
import { NavigationContainer } from '@react/native';
import { createStackNavigator } from '@react/stack';
import Home from './screens/Home';
import Productos from './screens/productos';
import Detalle from './screens/detalle';
import Contacto from './screens/contacto';

const AppStack = createStackNavigator();

  function AppNavigator() {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Productos" component={Productos} />
          <AppStack.Screen name="Detalle" component={Detalle} />
          <AppStack.Screen name="Contacto" component={Contacto} />
      </AppStack.Navigator>
    );
  }
 
export default function App() {
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
}