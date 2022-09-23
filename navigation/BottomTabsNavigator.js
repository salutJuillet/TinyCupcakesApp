import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from '../components/Home'
import OrderStackNavigator from './OrderStackNavigator'

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
            <Tab.Screen 
                name='Main'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon:({color}) => (
                    <MaterialCommunityIcons name="cupcake" size={30} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name='Order'
                component={OrderStackNavigator}
                options={{
                    tabBarIcon:({color}) => (
                    <MaterialCommunityIcons name="book-open-variant" size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
  )
}

export default BottomTabsNavigator