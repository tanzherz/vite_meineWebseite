import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const handleTheme = () => {
    dispatch(toggleTheme())
  }
  return (
    <div className='navbar  align-element bg-base-100'>
      <div className='flex-1'>
        <h4 className='hidden sm:flex font-bold mr-3'>
          {' '}
          Hallo! Willkommen auf{' '}
        </h4>

        <NavLink
          to='/'
          className='btn btn-secondary text-xl  font-bold tracking-wider '
        >
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
      <div>
        {' '}
        <label className='swap swap-rotate mr-6'>
          <input type='checkbox' onChange={handleTheme} />
          <BsMoonFill className='swap-on h-4 w-4' />
          <BsSunFill className='swap-off h-4 w-4' />
        </label>
      </div>
    </div>
  )
}
export default Navbar
