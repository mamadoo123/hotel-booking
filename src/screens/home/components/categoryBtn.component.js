import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

import {theme} from '../../../constants'

const CategoryBtn = ({name, isActive, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={{...styles.heading, color: isActive ? theme.COLORS.dark : theme.COLORS.lightGray}}>
                {name}
            </Text>
            
            { isActive && <View style={styles.activeIndicator} />}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryBtn

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    heading: {
        ...theme.FONTS.h3,
        marginBottom: theme.SIZES.base,
        textAlign: 'center',
    },
    activeIndicator:{
        position: 'absolute',
        bottom: -5,
        left: theme.SIZES.width * 0.15,
        width: theme.SIZES.base,
        height: theme.SIZES.base,
        borderRadius: theme.SIZES.base * 0.5,
        backgroundColor: theme.COLORS.green
    }
})