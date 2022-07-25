import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Screen } from '../../../components'

function ScreenAuth({children}) {
  return (
    <KeyboardAvoidingView
        style={{flex: 1, }}
        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback 
            onPress={() => {Keyboard.dismiss()}}
        >
            <Screen style={{alignItems: 'center'}}>
                {children}
            </Screen>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ScreenAuth

const styles = StyleSheet.create({})