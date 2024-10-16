import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Image } from 'react-native';
import Heart from '../assets/icons/heart'
import Star from '../assets/icons/star'
import Download from '../assets/icons/download'

const Card = ({Name, source}) => {
  return (
      <View style={tw`h-[250px] w-[300px] mr-5`}>
            <Image source={source} style={tw`w-[100%] h-[100%] rounded-xl`}/>
            <View style={tw`absolute w-[100%] h-[100%] bg-[rgba(000,000,000,0.3)] rounded-xl`}>
            </View>
                <View style={tw`absolute top-5 right-5`}><Heart/></View>
                <View style={tw`absolute bottom-5 left-5`}>
                    <View style={tw`flex-row`}>
                        <Star/><Star/><Star/><Star/><Star/>
                    </View>
                    <Text style={tw`text-white font-bold text-2xl`}>{Name}</Text>
                    <View style={tw`flex-row`}>
                        <Download/>
                        <Text style={tw`text-white`}>100k Download</Text>
                        
                </View>
                </View>
        </View>
    )
}
export default Card