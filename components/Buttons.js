import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { ScrollView } from 'react-native-web'
import Button from './Button'


const Buttons = () => {
  return (
    <View>
    <ScrollView horizontal style={tw`mb-3 p-4`} showsVerticalScrollIndicator={false}>
        <Button Title="Action"/>
        <Button Title="Adventure"/>
        <Button Title="Games"/>
        <Button Title="Puzzels"/>
        <Button Title="Mind map"/>
        <Button Title="Bank"/>
        <Button Title="Car race"/>
        <Button Title="Subway"/>
    </ScrollView>
    </View>
  )
}

export default Buttons