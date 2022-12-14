import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home } from '@screens/Home'
import { About } from '@screens/About'
import { MyPoke } from '@screens/MyPoke'

const Stack = createNativeStackNavigator()
export function AppRoutes() {
  return <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='About' component={About} />
    <Stack.Screen name='MyPoke' component={MyPoke} />
  </Stack.Navigator>
}