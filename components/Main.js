import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { topDelivery, topNav, slide, customOrder, menu } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const deliveryMain = () => {
  return (
    <View>
        <View style={topDelivery.container}>
            <Text style={topDelivery.text}>
                Order within 25km form city and pay only $12.50
            </Text>
            <Text style={topDelivery.text}>
                FREE delivery for orders over $100!
            </Text>
        </View>
        <View style={topNav.container}>
            <View style={topNav.iconContainer}>
                <Icon name="bars" style={topNav.icons} />
            </View>
            <Text style={topNav.logo}>TINY Cupcakes</Text>
            <View style={topNav.iconContainer}>
                <Icon name="search" style={topNav.icons} />
                <Icon name="shopping-cart" style={topNav.icons} />
            </View>
        </View>

        <View style={slide.container}>
            <View style={slide.textContainer}>
                <Text style={slide.textTitle}>A little joy for every occation</Text>
                <Text style={slide.textContent}>A birthday. A wedding. A team-building exravaganza.</Text>
                <Text style={slide.textContent}>Whatever your occation looks like, Tiny Cupcakes can make a big splash.</Text>
                <TouchableOpacity>
                    <View style={slide.buttonContainer}>
                        <Text style={slide.buttonText}>EXPLORE CUPCAKES</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={slide.imageContainer}>
                <Image source={require('../assets/image/cc_catering_cupcakes.png')} style={slide.image} />
            </View>
        </View>

        <View style={customOrder.container}>
            <ImageBackground source={require('../assets/image/bg_custom_order_pink.jpg')}>
                <View style={customOrder.textContainer}>
                    <Text style={customOrder.textTitle}>
                        Custom Cupcake Collection
                    </Text>
                    <Text style={customOrder.textContent}>
                        17 FLAVOURS TO CHOOSE FROM
                    </Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../assets/image/bg_custom_order_white.jpg')}>
                <View style={customOrder.textContainer}>
                    <Text style={customOrder.textTitle}>
                        Custom Cake Collection
                    </Text>
                    <Text style={customOrder.textContent}>
                        YOUR WAY - SIMPLE, SPECIAL OR CUSTOM
                    </Text>
                </View>
            </ImageBackground>
        </View>

        <View style={menu.container}>
            <Text>menu</Text>
        </View>
    </View>
  )
}

export default deliveryMain