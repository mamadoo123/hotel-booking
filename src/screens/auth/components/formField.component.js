import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik'

import { AppTextInput, Paragraph } from '../../../components';
import ErrorMessage from './errorMessage.component'

import { SIZES } from '../../../constants';

function FormField({id, label, otherStyle,...otherProps}) {
    const {setFieldTouched, errors, touched, setFieldValue, values} = useFormikContext();
    return (
    <>
        <View style={styles.labelWrapper}>
            <Paragraph style={styles.label}>
                {label}
            </Paragraph>
        
        </View>

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

export default FormField;

const styles = StyleSheet.create({
    labelWrapper:{
        alignSelf: 'flex-start',
        paddingHorizontal: SIZES.padding,
    },
    label:{
        textAlign: 'left',
        textTransform: 'capitalize'
    }
})