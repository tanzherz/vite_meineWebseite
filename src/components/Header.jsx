import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../user/userSlice'
import { useDispatch } from 'react-redux'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { toggleTheme } from '../user/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userState.user)

  const dispatch = useDispatch()

  const handleLogout = () => {
    navigate('/login')
    dispatch(logoutUser())
  }

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <header className='w-screen text-primary  '>
      <div className='align-element flex justify-center sm:justify-end py-2'>
        <div className=''>
          {user ? (
            <div className='flex gap-x-2 sm:gap-x-8'>
              <p className='text-sm sm:text-base capitalize'>
                {' '}
                Hallo {user.username}
              </p>
              <button
                className='btn btn-xs btn-outline btn-primary'
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='flex items-center'>
              <Link to='/login'>login</Link>
            </div>
          )}
        </div>
        <div className='flex align-middle ml-2 sm:ml-6'>
          {' '}
          <label className='swap swap-rotate mr-6'>
            <input type='checkbox' onChange={handleTheme} />
            <BsMoonFill className='swap-on h-4 w-4' />
            <BsSunFill className='swap-off h-4 w-4' />
          </label>
        </div>
      </div>
    </header>
  )
}
export default Header
