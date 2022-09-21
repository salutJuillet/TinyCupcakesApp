import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MainStackNavigator from './MainStackNavigator'
import OrderStackNavigator from './OrderStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#fef7ea',
        // tabBarStyle:{height:60},
        // tabBarLabelStyle:{position:'relative', top:-5},
        tabBarBackground:()=>(
          <View style={{backgroundColor:'#1553a3', flex:1}} />
        )
       }}>
            <Tab.Screen name='Main'
                options={{
                    headerShown: false,
                    tabBarIcon:({color}) => (
                    <MaterialCommunityIcons name="cupcake" size={30} color={color} />
                    )
                }}>
                { () => <MainStackNavigator /> }
            </Tab.Screen>

            <Tab.Screen name='Order'
                options={{
                    tabBarIcon:({color}) => (
                    <MaterialCommunityIcons name="book-open-variant" size={30} color={color} />
                    )
                }}>
                { () => <OrderStackNavigator /> }
            </Tab.Screen>
        </Tab.Navigator>
  )
}

export default BottomTabsNavigator