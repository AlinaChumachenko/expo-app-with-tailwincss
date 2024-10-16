import { View } from 'react-native'
import React from 'react'
import MiniCard from './MiniCard'


const MiniCards = () => {
  return (
    <View>
        <MiniCard source={require('../assets/images/frag.png')} Name="Frag"/>
        <MiniCard source={require('../assets/images/zooba.png')} Name="Zooba"/>
        <MiniCard source={require('../assets/images/subway.png')} Name="Subway"/>

    </View>
  )
}

export default MiniCards