import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { images, SIZES } from '../constants'

function Logo({style}) {
  return (
    <View style={[styles.logoCotainer, style]}>
        <Image
          source={images.logo}
          style={styles.logo}
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logoCotainer:{
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        top: SIZES.padding * 2, 
        width: 60,
    },
    logo:{
        height:'100%',
        width: '100%',
    },
})