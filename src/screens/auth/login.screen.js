import { StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';

import {FormWrapper, ScreenAuth, SubmitButton, FormField, RightLeftButtons} from './components';

const validationSchema = Yup.object().shape({
  userid: Yup.string().required().min(3).max(55).label("username or email") || Yup.string().required().email().label("username or email"),
  password: Yup.string().required().min(5).label("Password"),
})

function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScreenAuth>

      <RightLeftButtons />

      <FormWrapper
            initialValues={{userid: '', password: ''}}
            onSubmit={(values) => console.log(values)}
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
                //right = {<TextInput. />}
            />

            <SubmitButton title="Login" />
            
        </FormWrapper>

    </ScreenAuth>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})