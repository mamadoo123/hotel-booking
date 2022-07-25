import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Paragraph } from '../../components'
import { COLORS, SIZES, theme } from '../../constants'

const TitleBodyComponent = () => {
  return (
    <View  style={{paddingHorizontal: SIZES.padding}}>
        <Text style={styles.heading}>Travel with no wory</Text>
        <Paragraph>
            You can now experience the next level travel experience for hotel bookings.
        </Paragraph>
    </View>
  )
}

export default TitleBodyComponent

const styles = StyleSheet.create({
    heading: {
        ...theme.FONTS.h1,
        color: COLORS.dark,
        marginBottom: SIZES.base,
    }
})