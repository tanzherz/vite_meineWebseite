import { Outlet } from 'react-router-dom'
import { Navbar, Header } from '../components'

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
