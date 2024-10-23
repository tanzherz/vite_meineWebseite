import { Outlet } from 'react-router-dom'
import { Navbar, Header, Footer } from '../components'

const HomeLayout = () => {
  return (
    <main className=' '>
      <Header />
      <Navbar />

      <section className='align-element'>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}
export default HomeLayout
