import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import { LoginScreen, OnBoardingScreen, SignupScreen } from '../screens';

import routes from './routes'

const Stack = createStackNavigator();

function AuthNavigator() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={routes.ONBOARDING} component={OnBoardingScreen} />
            <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
            <Stack.Screen name={routes.REGISTER} component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;