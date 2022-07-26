import { StyleSheet } from 'react-native'
import {TextInput} from 'react-native-paper'
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Yup from 'yup';

import {FormWrapper, ScreenAuth, SubmitButton, FormField, RightLeftButtons} from './components';
import { COLORS } from '../../constants';
import { login } from '../../redux/actions/authActions';

const validationSchema = Yup.object().shape({
  userid: Yup.string().required().min(3).max(55).label("username or email") || Yup.string().required().email().label("username or email"),
  password: Yup.string().required().min(5).label("Password"),
})

function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch()
  
  function onSubmitHanlder(values) {
    console.log('values -> ', values);
    dispatch(login('any', {name: 'John Smith', id: "user1", profileImg: '', ...values}))
  }

  return (
    <ScreenAuth>

      <RightLeftButtons />

      <FormWrapper
            initialValues={{userid: '', password: ''}}
            onSubmit={onSubmitHanlder}
            validationSchema={validationSchema}
      >
            <FormField
                label="username or E-mail"
                id="userid"
                autoCapitalize="none"
                placeholder="danielbronks123@gmail.com"
            />

            <FormField
                label="password"
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisible}
                textContentType="password"
                placeholder="Create your password"
                right={
                  <TextInput.Icon
                    name={() => 
                      <MaterialCommunityIcons 
                        name={passwordVisible ? "eye" :"eye-off"} 
                        size={28} 
                        color={COLORS.lightGray}
                        //style={{position: 'absolute', right: -30, top: -10}} 
                      />
                    }   
                    onPress={() => setPasswordVisible(!passwordVisible)} 
                  />
                }
            />

            <SubmitButton title="Login" />
            
        </FormWrapper>

    </ScreenAuth>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})