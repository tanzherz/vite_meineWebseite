import { Form, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'

const Login = () => {
  const user = useSelector((state) => state.userState.user)
  // console.log(user.username)

  const [person, setPerson] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPerson(e.target.value)
    dispatch(loginUser(person))
  }

  const handleLogin = () => {
    if (person === '') {
      toast.error('Bitte trage Deinen Namen ein')
      return redirect('/login')
    }
    navigate('/')
    dispatch(loginUser(person))
  }
  console.log('Benutzer' + user)

  return (
    <section className='h-screen grid place-items-center'>
      <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <div className='form-control'>
          <label className='input input-bordered flex items-center gap-2'>
            Passwort
            <input
              type='text'
              name='Passwort'
              label='Passwort'
              value={person}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* <div>
          <SubmitBtn text='login' handleLogin={handleLogin} />
        </div> */}
        <button
          type='submit'
          className='btn btn-secondary btn-block'
          onClick={handleLogin}
        >
          Login
        </button>
      </Form>
    </section>
  )
}
export default Login
