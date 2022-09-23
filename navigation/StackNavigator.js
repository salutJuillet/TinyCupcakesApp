import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EntrancePage from '../components/EntrancePage'
import BottomTabsNavigator from './BottomTabsNavigator';

const MainStack = createNativeStackNavigator();


const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName='EntrancePage'>
        <MainStack.Screen name='EntrancePage' component={EntrancePage} options={{headerShown:false}} />
        <MainStack.Screen name='BottomTabs' component={BottomTabsNavigator} options={{headerShown:false}} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator