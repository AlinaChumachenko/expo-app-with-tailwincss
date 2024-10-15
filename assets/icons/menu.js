import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={styles.Menu}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    Menu:{
        height:30,
        width:30
    }
})