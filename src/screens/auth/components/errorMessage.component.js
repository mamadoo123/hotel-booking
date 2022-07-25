import { StyleSheet } from 'react-native'
import React from 'react'
import { Paragraph } from '../../../components';

function ErrorMessage({error, show}) {
  
    if(!show || !error) return null;
  
    return (
        <Paragraph style={styles.error}>
            {error}
        </Paragraph>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error:{
        color: 'red'
    }
})