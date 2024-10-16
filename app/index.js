import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Topbar from '../components/Topbar';
import Title from '../components/Title';
import Buttons from '../components/Buttons';
import FeaturedText from '../components/FeaturedText';
import Cards from '../components/Cards';
import TopActions from '../components/TopActions';
import MiniCards from '../components/MiniCards';


// export default function Index() {
//     return (
//       <ScrollView style={tw`flex-1 gap-5 p-5`}>
//         <Topbar/>
//         <Title/>
//         <Buttons/>
//         <FeaturedText/>
//         <Cards/>
//         <TopActions/>
//         <MiniCards/>
//       </ScrollView>
//     )
//   }

const index = () => {
  return (
    <ScrollView style={tw`flex-1 gap-5 p-5`}>
      <Topbar/>
      <Title/>
      <Buttons/>
      <FeaturedText/>
      <Cards/>
      <TopActions/>
      <MiniCards/>
    </ScrollView>
  )
}

export default index