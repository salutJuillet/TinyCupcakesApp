import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>Cart Page</Text>
        <Button title='back to order list' onPress={()=>navigation.navigate('OrderPage')} />
    </SafeAreaView>
  )
}

export default Cart