import React from 'react'
import { Form, Field } from 'react-final-form'
import CustomField from 'components/CustomField'
import Button from 'components/Button'
import { Grid, Column } from './styles'
import * as forms from 'utils/forms'

export default function FormRegister (props) {
  return (
    <Form {...props}>
      {({ handleSubmit, pristine, submitting, form, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid>
            <Column>
              <Field
                name='name'
                label='Nome'
                component={CustomField.ImageUploader}
                text='Carregue sua foto'
                {...forms.required}
              />
              <Button as='button'>
                Salvar
              </Button>
            </Column>
          </Grid>
        </form>
      )}
    </Form>
  )
}
