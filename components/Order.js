import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const Order = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>Order Page</Text>
        <Button title='Go to cart' onPress={()=>navigation.navigate('Cart')} />
    </SafeAreaView>
  )
}

export default Order