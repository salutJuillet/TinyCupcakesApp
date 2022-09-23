import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar } from 'react-native';

import StackNavigator from './StackNavigator'
import Collections from '../components/Collections'
import About from '../components/About'
import Contact from '../components/Contact'
import StoreLocation from '../components/StoreLocation'

const statusbarHeight = StatusBar.currentHeight + 60;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='StackNavigator'
      screenOptions={{
        drawerLabel:'Home',
        drawerLabelStyle:{color:'#ffffff', fontSize:22},
        drawerContentStyle:{backgroundColor:'#1553a3'},
        drawerContentContainerStyle:{
          paddingTop: statusbarHeight,
        }
      }}
    >
        <Drawer.Screen
            name='StackNavigator' 
            component={StackNavigator} 
            options={{headerShown: false}}
        />
        <Drawer.Screen name='Collections' component={Collections} options={{drawerLabel:'COLLECTIONS'}} />
        <Drawer.Screen name='About' component={About} options={{drawerLabel:'ABOUT'}} />
        <Drawer.Screen name='Contact' component={Contact} options={{drawerLabel:'CONTACT'}} />
        <Drawer.Screen name='StorLocation' component={StoreLocation} options={{drawerLabel:'STORE LOCATION'}} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator