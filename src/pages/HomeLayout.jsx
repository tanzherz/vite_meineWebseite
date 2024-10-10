import { Outlet } from 'react-router-dom'
import { Navbar, Header } from '../components'

import { redirect } from 'react-router-dom'
// import { store } from '../store'
import { toast } from 'react-toastify'

export const loader = (store) => () => {
  // console.log(request)
  // const params = new URL(request.url).searchParams
  // const search = params.get('siegel')

  // const params = Object.fromEntries([
  //   ...new URL(request.url).searchParams.entries(),
  // ])
  // console.log(params)

  const user = store.getState().userState.user

  if (!user) {
    toast.warn('Logge Dich bitte ein')
    return redirect('/login')
  }
  return null
}

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='align-element'>
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
