import { useFormikContext } from 'formik'
import React from 'react'
import { AppTextInput, Paragraph } from '../../../components';

import ErrorMessage from './ErrorMessage'

function FormField({id, otherStyle,...otherProps}) {
    const {setFieldTouched, errors, touched, setFieldValue, values} = useFormikContext();
    return (
    <>
        <Paragraph>{id}</Paragraph>

        <AppTextInput
            onChangeText={ (val) => setFieldValue(id, val)}
            onBlur = {() => setFieldTouched(id)}
            value={values[id]}
            otherStyle={otherStyle}
            {...otherProps}
        />

        <ErrorMessage error={errors[id]} show={touched[id]} />
    </>
  )
}

export default FormField