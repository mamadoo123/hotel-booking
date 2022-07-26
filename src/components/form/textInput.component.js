import { StyleSheet, View } from 'react-native'
import {TextInput} from 'react-native-paper'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants';

function AppTextInput({icon, style, ...otherProps }) {
  return (
    <View style={[styles.conatiner, style]} >
        <TextInput 
            placeholderTextColor={COLORS.lightGray}
            {...otherProps} 
            underlineColorAndroid="transparent"
            theme={{ 
                colors: { 
                    text: COLORS.dark, 
                    primary: COLORS.white, 
                    placeholder: COLORS.lightGray, 
                    background: "transparent" 
                }, 
            }} 
        />
    </View>
  );
}

export default AppTextInput

const styles = StyleSheet.create({
    conatiner:{
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 2,
        elevation: 7,
        flexDirection: 'row',
        marginVertical: SIZES.base * 2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        width: SIZES.width - SIZES.padding,
        height: SIZES.base * 8,
    },
    text:{
        ...FONTS.body2,
        color: COLORS.dark,
    },
})