import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenAuth from './components/screenContainer.component'

function LoginScreen() {
  return (
    <ScreenAuth>
        <Text>Login screen</Text>
    </ScreenAuth>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})