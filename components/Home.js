import React, {useState} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, Modal, Button } from 'react-native'
import { topDelivery, topNav, slide, customOrder, menu, menuModal } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'

import StatusBar from './StatusBar'


const ITEM = [
    {name:'Red Velvet', price:'2.95', url: require('../assets/image/RedVelvet.png')},
    {name:'Devil', price:'3.00', url: require('../assets/image/Devil.png')},
    {name:'Classic Vanilla', price:'2.80', url: require('../assets/image/ClassicVanilla.png')},
    {name:'Raspberry Cinnamon', price:'2.95', url: require('../assets/image/RaspberryCinnamon.png')},
    {name:'Mint Chocolate', price:'2.80', url: require('../assets/image/MintChocolate.png')},
    {name:'Blueberry White Chocolate', price:'2.95', url: require('../assets/image/BlueberryWhiteChocolate.png')}
]


const Home = ({navigation}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    name: '',
    price: '',
    url: ''
  })
  const showModal = () => {
    setIsOpen(true);
  }

  const handlePress = (i) => {
    setIsOpen(true);
    setModalInfo({
        name: i.name,
        price: i.price,
        url: i.url
    });
  }

  const Item = ({item}) => (
    item.map(i => 
        <>
            <TouchableOpacity 
                    key={i.name} 
                    style={menu.item} 
                    onPress={()=>handlePress(i)}
            >
                <Image source={i.url}
                    style={menu.itemImage} />
                <Text style={menu.itemText}>{i.name}</Text>
                <Text style={menu.itemText}>${i.price}</Text>
            </TouchableOpacity>
        </>
    )
  )

  const MenuModal = () => (
    <Modal 
        animationType='slide' 
        visible={isOpen} 
        transparent={true}
    >
        <View style={menuModal.modalContainer}>
            <TouchableOpacity 
                style={menuModal.close}
                onPress={()=>setIsOpen(false)}>
                <Text style={{color:'#fff'}}>close</Text>
            </TouchableOpacity>
            <Image source={modalInfo.url} style={menuModal.modalImage} />
            <Text style={menuModal.menuInfo}>{modalInfo.name}</Text>
            <Text style={menuModal.menuInfo}>{modalInfo.price}</Text>
            <Text>-1+</Text>

            <Button title='Add to cart' />
        </View>
    </Modal>
  )

  return (
    <SafeAreaView>
        {/* <StatusBar /> */}
        <ScrollView>
            <View style={topDelivery.container}>
                <Text style={topDelivery.text}>
                    Order within 25km form city and pay only $12.50
                </Text>
                <Text style={topDelivery.text}>
                    FREE delivery for orders over $100!
                </Text>
            </View>
            <View style={topNav.container}>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={topNav.iconContainer}>
                    <Icon name="bars" style={topNav.icons} />
                </TouchableOpacity>
                <Text style={topNav.logo}>TINY Cupcakes</Text>
                <View style={topNav.iconContainer}>
                    <TouchableOpacity>
                        <Icon name="search" style={topNav.icons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="shopping-cart" style={topNav.icons} />
                    </TouchableOpacity>
                </View>
            </View>

            <ImageBackground source={require('../assets/image/bg_slider_banner.jpg')}>
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
            </ImageBackground>

            <View style={customOrder.container}>
                <TouchableOpacity>
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
                </TouchableOpacity>
                <TouchableOpacity>
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
                </TouchableOpacity>
            </View>

            <View style={menu.container}>
                <View style={menu.titleContainer}>
                    <Text style={menu.title}>Freshly Baked</Text>
                    <Image />
                </View>

                <View style={menu.categoryContainer}>
                    <View style={menu.category}>
                        <Image style={menu.categoryImageCupcake} source={require('../assets/image/RedVelvet.png')} />
                        
                        <Text style={menu.categoryText}>CUPCAKES</Text>
                    </View>
                    <View style={menu.category}>
                        <Image style={menu.categoryImageCake} source={require('../assets/image/cc_cake.png')} />
                        <Text style={menu.categoryText}>CAKES</Text>
                    </View>
                </View>

                <View style={menu.itemContainer}>
                    <Item item={ITEM} />
                </View>
                <MenuModal />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home