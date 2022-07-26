import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import { HomeScreen, HotelBookingScreen, HotelDetailsScreen } from '../screens';

import routes from './routes'
import { COLORS } from '../constants';

const Stack = createStackNavigator();

function MainNavigator() {
    return(
        <Stack.Navigator screenOptions={{headerBackground: COLORS.background}}>
            <Stack.Screen name={routes.HOME} component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name={routes.HOTEL_DETAILS} component={HotelDetailsScreen} />
            <Stack.Screen name={routes.HOTEL_BOOKING} component={HotelBookingScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;