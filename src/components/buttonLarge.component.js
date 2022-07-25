import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {theme} from '../constants/index';

const ButtonLarge = ({title, style, onPress}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLarge;

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: theme.COLORS.green,
        borderRadius: theme.SIZES.radius * 2,
        justifyContent: 'center',
        marginVertical: 10,
        padding: theme.SIZES.padding,
        width: theme.SIZES.width - theme.SIZES.padding,
    },
    title:{
        ...theme.FONTS.h2,
        color: theme.COLORS.white,
        textTransform: 'capitalize',
    }
})