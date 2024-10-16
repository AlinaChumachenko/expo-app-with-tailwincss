import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Menu from '../assets/icons/menu'
import Bell from '../assets/icons/bell'

const Topbar = () => {
  return (
      <View style={tw`flex-row justify-between items-center mb-3`}>
        <Menu/>
        <Bell/>    
      </View> 
  )
}

export default Topbar