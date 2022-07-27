import React from 'react';
import { StyleSheet, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {theme} from '../../../constants';
import NavButton from './navButton.component';
import routes from '../../../navigation/routes';

function RightLeftButtons() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
    <View style={styles.container}>
        <NavButton 
            onPress={() => navigation.navigate(routes.LOGIN)}
            isActive={route.name === routes.LOGIN}
            title="login"
        />

        <NavButton 
            onPress={() => navigation.navigate(routes.REGISTER)}
            isActive={route.name === routes.REGISTER}
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