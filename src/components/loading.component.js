import { StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { animations, theme } from '../constants'

function Loading({ visible = false}) {
    
    if(!visible) return null;
    
    return (
        <AnimatedLottieView 
            autoPlay
            loop
            source={animations.loading}
            style={{height: theme.SIZES.height, width: theme.SIZES.width,}}
        />
    )
}

export default Loading

const styles = StyleSheet.create({})