import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Style02 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Icon name='user' size={85} color='#aaaaaa' />
            </View>

            <Div>
                <Text style={{fontSize:18, marginTop:15, marginBottom:5}}>현주예</Text>
                <Text style={{fontSize:16, borderBottomWidth:1, width:170}}>React Native Developer</Text>
            </Div>
            <Div>
                <Text style={{fontSize:13, marginBottom:10}}>
                    사랑의 동산에는 구할 이상 봄바람이다.
                </Text>
                <Text style={{fontSize:13, marginBottom:10}}>    
                    청춘의 것은 구하기 든 위하여 것이
                </Text>
                <Text style={{fontSize:13, marginBottom:10}}>
                    얼마나 것이다. 보라, 봄바람이다.
                </Text>
            </Div>

        </View>
    </View>
  )
}

const Div = (props) => {
    return(
        <View style={[styles.div, props.style]}>
            {props.children}
        </View>
    )
}
const TextCenter = (props) => {
    return(
        <Text style={[styles.TextCenter, props.style]}>
            {props.children}
        </Text>
    )
}



const bucolor = '#2196f3'

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    height:1000
  },
  cardImageContainer:{
    backgroundColor:'#ffffff',
    marginLeft:25,
    marginTop:25,
    width:120,
    height:120,
    borderColor:'#999999',
    borderWidth:1,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardContainer:{
    backgroundColor: bucolor,
    width:300,
    height:400,
    marginTop:25,
    borderTopRightRadius:100,
    borderBottomRightRadius:100,
    borderWidth:5,
    borderColor:'#0069c0'
  },

  boxContainer:{
    position:'relative'
  },
  box:{
    borderWidth:2,
    width:100,
    height:100,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
  box1:{
    top:0,
    left:0
  },
  box2:{
    top:0,
    left:100
  },
  box3:{
    top:0,
    left:200
  },
  box4:{
    top:100,
  },

  div:{
    width:220,
    height:100,
    marginLeft:25
  },
  TextCenter:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2
  }
})

export default Style02