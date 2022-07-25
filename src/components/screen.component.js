import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

function Screen({style, children}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})