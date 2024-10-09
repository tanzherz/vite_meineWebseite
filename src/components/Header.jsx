import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../user/userSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userState.user)

  const dispatch = useDispatch()

  const handleLogout = () => {
    navigate('/login')
    dispatch(logoutUser())
  }

  return (
    <header className=' bg-primary text-secondary'>
      <div className='align-element flex justify-center sm:justify-end py-2'>
        <div className=' flex items-center'>
          {user ? (
            <div className=' flex gap-x-2 sm:gap-x-8'>
              <p className='text-sm sm:text-base capitalize'>
                {' '}
                Hallo {user.username}
              </p>
              <button
                className='btn btn-xs btn-outline btn-secondary'
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
      </div>
    </header>
  )
}
export default Header
