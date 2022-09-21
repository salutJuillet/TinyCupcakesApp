import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'

import BottomTabsNavigator from './BottomTabsNavigator';
import Collections from '../components/Collections'
import About from '../components/About'
import Contact from '../components/Contact'
import StoreLocation from '../components/StoreLocation'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='BottomTabsNavigator'
    >
        <Drawer.Screen name='BottomTabsNavigator' component={BottomTabsNavigator} options={{drawerLabel:'Home'}} />
        <Drawer.Screen name='Collections' component={Collections} options={{drawerLabel:'COLLECTIONS'}} />
        <Drawer.Screen name='About' component={About} options={{drawerLabel:'ABOUT'}} />
        <Drawer.Screen name='Contact' component={Contact} options={{drawerLabel:'CONTACT'}} />
        <Drawer.Screen name='StorLocation' component={StoreLocation} options={{drawerLabel:'STORE LOCATION'}} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator