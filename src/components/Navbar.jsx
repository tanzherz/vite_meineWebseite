// import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className='bg-primary w-screen'>
      <div className='navbar  align-element justify-center border-20 border-secondary'>
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar
