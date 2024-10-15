import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Image } from 'react-native';
import Menu from '../assets/icons/menu'
import Bell from '../assets/icons/bell'
import Heart from '../assets/icons/heart'
import Download from '../assets/icons/download'

const index = () => {
  return (
    <View style={tw`flex-col gap-5 p-5`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Menu/>
        <Bell/>    
      </View> 
      {/* Title      */}
      <Text style={tw`text-5xl font-bold`}>Browse Games</Text>
      {/* Title      */}

      <View style={tw`flex-row gap-4`}>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>
        <Text style={tw`bg-blue-500 p-3 rounded-xl text-white`}>Button</Text>

      </View>

      <Text style={tw`text-xl font-bold`}>Featured Games</Text>

      <View>
        {/* Card */}
        <View style={tw`h-[250px] w-3/4`}>
        <Image source={require('../assets/images/freeFire.png')} style={tw`w-[100%] h-[100%] rounded-xl`}/>
        <View style={tw`absolute w-[100%] h-[100%] bg-[rgba(000,000,000,0.3)] rounded-xl`}></View>
        <View style={tw`absolute top-5 right-5`}><Heart/></View>
        <View style={tw`absolute bottom-5 left-5`}>
            <Text style={tw`text-white font-bold text-2xl`}>Free Fire</Text>
            <View style={tw`flex-row`}>
                <Download/>
                <Text style={tw`text-white`}>100k Download</Text>
            </View>
        </View>
        {/* Card */}
        </View>
      </View>


    </View>
  )
}

export default index