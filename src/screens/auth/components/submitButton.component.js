import { useFormikContext } from 'formik';
import React from 'react'
import { ButtonLarge } from '../../../components';

function SubmitButton({title}) {
  const {handleSubmit} =  useFormikContext()
  return <ButtonLarge title={title} onPress={handleSubmit} />
}

export default SubmitButton