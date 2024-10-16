import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'


const Button = ({Title}) => {
  return (
    <View>
        <Text style={tw`bg-blue-500 mr-5 p-3 rounded-xl text-white hover:bg-blue-400 transition`}>
        {Title}
        </Text>
    </View>
  )
}

export default Button