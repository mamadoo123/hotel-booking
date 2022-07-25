import { StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup';

import {FormWrapper, ScreenAuth, SubmitButton, FormField, RightLeftButtons} from './components';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(55).label("user name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
})

function SignupScreen() {
  return (
    <ScreenAuth>

      <RightLeftButtons />

      <FormWrapper
            initialValues={{username: '',email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
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
                secureTextEntry={true}
                textContentType="password"
                placeholder="Create your password"
            />

            <SubmitButton title="Register" />
            
        </FormWrapper>

    </ScreenAuth>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})