import { Platform, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;


export const topDelivery = StyleSheet.create({
    container:{
        backgroundColor:'#e795bb',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#1553a3',
        fontWeight:'bold'
    }
})

export const topNav = StyleSheet.create({
    container:{
        height:70,
        backgroundColor:'#1553a3',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    icons:{
        color:'#ffffff',
        fontSize:25
    },
    logo:{
        color:'#ffffff',
        fontSize:20
    },
    iconContainer:{
        color:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        width:60
    }
})

export const slide = StyleSheet.create({
    container:{
        height:250,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:20
    },
    textContainer:{
        flex:1
    },
    textTitle:{
        color:'#1553a3',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    textContent:{
        color:'#1553a3',
        fontSize:10
    },
    buttonContainer:{
        backgroundColor:'#1553a3',
        borderRadius:2,
        paddingTop:8,
        paddingBottom:8,
        width:100,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ffffff',
        fontSize:6,
        fontWeight:'bold'
    },
    imageContainer:{
        flex:1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:200,
        height:191
    }
})

export const customOrder = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:150,
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width: windowWidth /2,
        paddingLeft:10,
        paddingRight:10
    },
    textTitle:{
        fontSize:14,
        fontWeight:'bold',
        color:'#1553a3'
    },
    textContent:{
        fontSize:9,
        color:'#1553a3',
        marginTop:15,
        marginBottom:15
    }
})

export const menu = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    titleContainer:{
        marginTop:50,
        marginBottom:20
    },
    title:{
        color:'#1553a3',
        fontWeight:'bold',
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:'#1553a3'
    },
    categoryContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:200
    },
    category:{
        alignItems:'center'
    },
    categoryImageCupcake:{
        width:30,
        height:36
    },
    categoryImageCake:{
        width:40,
        height:35
    },
    categoryText:{
        color:'#e795bb',
        fontSize:10,
        fontWeight:'700'
    },
    itemContainer:{
        marginTop:25,
        marginBottom:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexWrap: 'wrap'
    },
    item:{
        width: windowWidth /2 - 20,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    itemImage:{
        width:120,
        height:155,
        marginBottom:5
    },
    itemText:{
        fontSize:17,
        textAlign: 'center'
    }
})

export const fonts = StyleSheet.create({
    fonts:{
        ...Platform.select({
            ios:{
                fontFamily:'American Typewriter'
            },
            android:{
                fontFamily:'Sunn Line Free'
            }
        })
    }
})