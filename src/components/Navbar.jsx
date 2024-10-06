import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
const Navbar = () => {
  return (
    <div className='navbar align-element bg-base-100'>
      <div className='flex-1'>
        <h4 className='hidden sm:flex font-bold mr-3'>
          {' '}
          Hallo! Willkommen auf{' '}
        </h4>

        <NavLink to='/' className='btn btn-primary text-xl tracking-wider '>
          ModeMacher
        </NavLink>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <NavLinks />
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className='bg-base-100 rounded-t-none p-2'>
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
