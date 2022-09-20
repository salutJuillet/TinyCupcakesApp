import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import BottomTabsNavigator from './BottomTabsNavigator';
import Collections from './Collections'
import About from './About'
import Contact from './Contact'
import StoreLocation from './StoreLocation'

const Drawer = createDrawerNavigator();

const MainPage = () => {
  return (
    <Drawer.Navigator initialRouteName='BottomTabsNavigator'>
        <Drawer.Screen name='BottomTabsNavigator' component={BottomTabsNavigator} options={{drawerLabel:'Home'}} />
        <Drawer.Screen name='Collections' component={Collections} options={{drawerLabel:'COLLECTIONS'}} />
        <Drawer.Screen name='About' component={About} options={{drawerLabel:'ABOUT'}} />
        <Drawer.Screen name='Contact' component={Contact} options={{drawerLabel:'CONTACT'}} />
        <Drawer.Screen name='StorLocation' component={StoreLocation} options={{drawerLabel:'STORE LOCATION'}} />
    </Drawer.Navigator>
  )
}

export default MainPage