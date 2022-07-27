import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ButtonMedium, Screen } from '../../components'
import TitleBodyComponent from './titleBody.component'
import TopImage from './topImage.component'
import routes from '../../navigation/routes'

function OnBoardingScreen({navigation}) {
  return (
    <Screen style={styles.screen}>

        <TopImage />
        
        <TitleBodyComponent />

        <View style={styles.btnWrapper}>
            <ButtonMedium 
                title="Next"
                onPress={() => navigation.navigate(routes.LOGIN)}
            />
        </View>
    </Screen>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnWrapper: {
        marginTop: 'auto'
    }
})