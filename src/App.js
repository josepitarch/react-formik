import './App.css'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Requerido'
  } else if(values.name.length < 5) {
    errors.name = 'El nombre es demasiado corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if(values.lastname.length < 5) {
    errors.lastname = 'El apellido es demasiado corto'
  }

  if(!values.email) {
    errors.email = 'Requerido'
  } else if(values.email.length < 5) {
    errors.email = 'El email es demasiado corto'
  }

  return errors
}

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: ''}}
      validate={ validate }
      onSubmit={ values => console.log(values) }
    >
      <Form>
        <TextInput name='name' label='Nombre'/>
        <label>Nombre</label>
        <Field name='name' type='text'/>
        <ErrorMessage name='name'/>
        <label>Apellido</label>
        <Field name='lastname' type='text'/>
        <ErrorMessage name='lastname'/>
        <label>Email</label>
        <Field name='email' type='email'/>
        <ErrorMessage name='email'/>
        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>

        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
