import { Hero1, Hero2 } from '../components'
import Hero3 from '../components/Hero3'

import { redirect } from 'react-router-dom'
// import { store } from '../store'
import { toast } from 'react-toastify'

export const loader = (store) => () => {
  const user = store.getState().userState.user

  if (!user) {
    toast.warn('Logge Dich bitte ein')
    return redirect('/login')
  }
  return null
}

const Landing = () => {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </>
  )
}
export default Landing
