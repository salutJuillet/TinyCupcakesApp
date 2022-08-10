import { Platform, StyleSheet } from 'react-native'


const light = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        paddingTop:170
    },
    mainText:{
        fontSize:40,
        textAlign:'center'
    },
    buttonContainer:{
        width:170,
        alignItems:'center',
        borderWidth:3,
        borderRadius:30,
        borderColor:'orange',
        marginTop:70,
        paddingTop:15,
        paddingBottom:15
    },
    buttonText:{
        fontSize:20
    }
})

const dark = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        paddingTop:170,
        backgroundColor:'#333333'
    },
    mainText:{
        fontSize:40,
        textAlign:'center',
        color:'#ffffff'
    },
    buttonContainer:{
        width:170,
        alignItems:'center',
        borderWidth:3,
        borderRadius:30,
        borderColor:'skyblue',
        backgroundColor:'skyblue',
        marginTop:70,
        paddingTop:15,
        paddingBottom:15,
        marginBottom:30
    },
    buttonText:{
        fontSize:20,
        color:'#ffffff'
    }
})


/***** TINY Cupcakes 앱 *****/
const topDelivery = StyleSheet.create({
    container:{
        backgroundColor:'#e795bb',
        marginTop:25,
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#1553a3',
        fontWeight:'bold'
    }
})

const topNav = StyleSheet.create({
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
        color:'#ffffff'
    },
    logo:{
        color:'#ffffff'
    },
    iconContainer:{
        color:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        width:30
    }
})

const slide = StyleSheet.create({
    container:{
        backgroundColor:'#fef7ea',
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

const customOrder = StyleSheet.create({
    container:{
        flexDirection:'row',
        // marginTop:30,
        // marginBottom:30,
        height:150,
        borderWidth:1,
        borderColor:'red'
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        height:'100%',
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

const menu = StyleSheet.create({
    container:{
        flex:1
    }
})

const fonts = StyleSheet.create({
    fonts:{
        ...Platform.select({
            ios:{
                fontFamily:'American Typewriter',
                android:{
                    fontFamily:'monospace'
                }
            }
        })
    }
})

export { light, dark, topDelivery, topNav, slide, customOrder, menu }