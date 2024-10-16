import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Card from './Card';

const Cards = () => {
  return (
    <View>
    <ScrollView horizontal style={tw`mb-3`} showsVerticalScrollIndicator={false}>
    <Card source={require('../assets/images/freeFire.png')} Name="Free Fire"/>
    <Card source={require('../assets/images/angryBirds.png')} Name="Angry Birds"/>
    <Card source={require('../assets/images/altosAdventure.png')} Name="Altos Adventure"/>
    <Card source={require('../assets/images/zoobaGame.png')} Name="Zooba Game"/>
    </ScrollView>
    </View>
  )
}

export default Cards