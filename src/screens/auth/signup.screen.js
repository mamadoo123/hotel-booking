import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenAuth from './components/screenContainer.component'
import { Logo } from '../../components'

function SignupScreen() {
  return (
    <ScreenAuth>
      <Logo />
      
    </ScreenAuth>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})