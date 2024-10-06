import { FormInput, SubmitBtn } from '../components'
import { Form } from 'react-router-dom'
const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='text' label='Name' name='name' defaultValue='Daisy' />
        <div>
          <SubmitBtn text='login' />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          Gast
        </button>
      </Form>
    </section>
  )
}
export default Login
