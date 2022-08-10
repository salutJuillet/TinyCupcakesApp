import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { light, dark } from './styles'

const Style01 = () => {

  const [darkmode, setDarkmode] = useState(false);
  const handleMode = () => {
    setDarkmode(!darkmode);
  }

  return (
    <View style={[darkmode ? dark.container : light.container]}>
        <Text style={[darkmode ? dark.mainText : light.mainText]}>
          메인입니다.
        </Text>
        
            <TouchableOpacity onPress={handleMode}>
                      <View style={[darkmode ? dark.buttonContainer : light.buttonContainer]}>
                        <Text style={[darkmode ? dark.buttonText : light.buttonText]}>
                          {darkmode ? '낮 모드로 전환' : '밤 모드로 전환'}
                        </Text>
                      </View>
            </TouchableOpacity>

    </View>
  )
}

export default Style01