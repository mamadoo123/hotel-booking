import React from 'react';
import {useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import MainNavigator from './mainNavigator';


function AppNav() {
    const isLogged = useSelector(state => state.auth.isLogged)
    
    return(
      <NavigationContainer>
        {
          !isLogged ?
          <AuthNavigator />
          :
          <MainNavigator />
        }
      </NavigationContainer>
    )
}

export default AppNav;