import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { theme } from '../../../constants'

const NavButton = ({onPress, isActive, title}) => {
  return (
    <TouchableOpacity 
        // style={{
        //     ...styles.button, 
        // }} 
        onPress={onPress}
    >
        <View 
            style={{
                ...styles.button,
                borderBottomColor: isActive ? theme.COLORS.green : theme.COLORS.white, 
                borderBottomWidth: isActive ? 3 : 0,
            }}
        >
            <Text style={{
                ...styles.title,
                color: isActive ? theme.COLORS.dark : theme.COLORS.lightGray,
            }}
            >
                {title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default NavButton

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: theme.COLORS.white,
        justifyContent: 'center',
        marginVertical: theme.SIZES.base,
        padding: theme.SIZES.padding,
        width: theme.SIZES.width * 0.5,
    },
    title:{
        ...theme.FONTS.h2,
        textTransform: 'capitalize',
    }
})