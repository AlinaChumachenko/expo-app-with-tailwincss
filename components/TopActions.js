import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'


const TopActions = () => {
  return (
    <View style={tw`flex-row justify-between items-center mb-3`}>
        <Text style={tw`text-2xl font-bold`}>Top Action Games</Text>
        <Text style={tw`text-xl font-bold text-green-500`}>See All</Text>
      </View>
  )
}

export default TopActions