import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'


const FeaturedText = () => {
  return (
    <View>
      <Text style={tw`font-bold text-xl mb-3`}>Featured Games</Text>
    </View>
  )
}

export default FeaturedText