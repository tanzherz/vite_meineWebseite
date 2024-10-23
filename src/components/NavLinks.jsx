import { NavLink } from 'react-router-dom'

const links = [
  { id: 1, url: '/', text: 'Katha´s Idee' },
  { id: 2, url: '/products', text: 'Produktpalette' },

  { id: 3, url: '/about', text: 'Über Katha:)' },
]
const NavLinks = () => {
  return (
    <ul className=' menu menu-horizontal justify-center px-2  align-element mx-0  '>
      {links.map((link) => {
        return (
          <li key={link.id} className='mr-2 sm:mr-4 '>
            <NavLink
              to={link.url}
              replace
              className={({ isActive }) =>
                isActive
                  ? 'border-x-4  border-secondary mx-0 px-2.5 rounded-ss-md rounded-ee-md text-lg sm:text-xl font-semibold tracking-wide text-base-300 focus:text-base-300'
                  : 'border-b-2 border-transparent text-lg sm:text-xl  text-neutral-content hover:text-base-300 focus:text-base-300'
              }
            >
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
