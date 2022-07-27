import { StyleSheet } from 'react-native'
import React,  { useState } from 'react'
import {TextInput} from 'react-native-paper'
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from '../../constants';
import {FormWrapper, ScreenAuth, SubmitButton, FormField, RightLeftButtons} from './components';
import { register } from '../../redux/actions/authActions';
import { Loading } from '../../components';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(55).label("user name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
})

function SignupScreen() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  
  function onSubmitHanlder(values) {
    setIsLoading(true)
    setTimeout(() => {
      dispatch(register('any', {
          name: 'John Smith', 
          id: "user1", 
          profileImg: '', 
          ...values
        }
      ))
      setIsLoading(false)
    }, 3000)
  }

  return (
    <ScreenAuth>

      <RightLeftButtons />

      <Loading visible={isLoading} />

      <FormWrapper
            initialValues={{username: '',email: '', password: ''}}
            onSubmit={onSubmitHanlder}
            validationSchema={validationSchema}
      >
            <FormField
                label="username"
                id="username"
                autoCapitalize="none"
                keyboardType="email-address" 
                textContentType="name"
                placeholder="Create your username"
            />

            <FormField
                label="E-mail"
                id="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address" 
                textContentType="emailAddress"
                placeholder="Enter your email"
            />

            <FormField
                label="password"
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisible}
                textContentType="password"
                placeholder={"Create your password                                    "}
                right={
                  <TextInput.Icon
                    name={() => 
                      <MaterialCommunityIcons 
                        name={passwordVisible ? "eye-off" :"eye"} 
                        size={28} 
                        color={COLORS.lightGray}
                      />
                    }   
                    onPress={() => setPasswordVisible(!passwordVisible)} 
                  />
                }
            />

            <SubmitButton title="Register" />
            
        </FormWrapper>

    </ScreenAuth>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})