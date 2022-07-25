import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {theme} from '../../../constants';
import NavButton from './navButton.component';

const RightLeftButtons = () => {
  return (
    <View style={styles.container}>
        <NavButton 
            onPress={() => {}}
            isActive={false}
            title="login"
        />

        <NavButton 
            onPress={() => {}}
            isActive={true}
            title="Sign Up"
        />
    </View>
  )
}

export default RightLeftButtons

const styles = StyleSheet.create({
    container:{
        width: theme.SIZES.width,
        flexDirection: 'row',
        marginVertical: theme.SIZES.base,
    },
})