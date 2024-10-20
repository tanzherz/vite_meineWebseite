import { Outlet } from 'react-router-dom'
import { Navbar, Header } from '../components'

const HomeLayout = () => {
  return (
    <main className='border-2 border-red-600 '>
      <Header />
      <Navbar />
      <section className='align-element'>
        <Outlet />
      </section>
    </main>
  )
}
export default HomeLayout
