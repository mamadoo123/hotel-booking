import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Screen, Logo } from '../../../components'
import { SIZES } from '../../../constants'

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
                <Logo style={{position:'relative', marginBottom: SIZES.base * 5}} />
                {children}
            </Screen>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ScreenAuth

const styles = StyleSheet.create({})