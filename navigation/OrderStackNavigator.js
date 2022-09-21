import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrderPage from '../components/Order'
import Cart from '../components/Cart'

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
        <OrderStack.Screen name='OrderPage' component={OrderPage} />
        <OrderStack.Screen name='Cart' component={Cart} />
    </OrderStack.Navigator>
  )
}

export default OrderStackNavigator