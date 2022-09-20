import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EntrancePage from './EntrancePage'
import Home from './Home';

const MainStack = createNativeStackNavigator();


const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName='EntrancePage'>
        <MainStack.Screen name='EntrancePage' component={EntrancePage} options={{headerShown:false}} />
        <MainStack.Screen name='Home' component={Home} options={{headerShown:false}} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator