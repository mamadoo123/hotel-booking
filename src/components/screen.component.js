import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

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
        backgroundColor: COLORS.background,
        flex: 1,
        paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0,
    }
})