import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS, theme } from '../constants';

function Paragraph({children, style, ...otherProps}) {
  return (
    <Text
        style={[styles.text, style]}
        {...otherProps}    
    >
        {children}
    </Text>
  )
}

export default Paragraph;

const styles = StyleSheet.create({
    text:{
        ...theme.FONTS.body3,
        color: COLORS.dark,
    }
})