import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnBoardingScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>OnBoardingScreen</Text>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})