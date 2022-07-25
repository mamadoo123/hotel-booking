import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { images, SIZES } from '../../constants'

function TopImage() {
  return (
    <View style={styles.imageWrapper}>
        <Image 
            source={images.onboard}
            style={styles.image}
            resizeMode="contain"
        />
    </View>
  )
}

export default TopImage

const styles = StyleSheet.create({
    imageWrapper:{
        marginLeft: -80,
        marginBottom: SIZES.base * 3,
    },
    image:{
        height: SIZES.height * 0.6,
        width: SIZES.width,
    }
})