import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { id: 1, url: '/', text: 'Katha´s Idee' },
  { id: 2, url: '/products', text: 'Produktpalette' },

  { id: 3, url: '/about', text: 'Über Katha:)' },
]
const NavLinks = () => {
  const location = useLocation()
  return (
    <div className='flex align-element '>
      {links.map((link) => {
        const isActive = location.pathname === link.url
        return (
          <li key={link.id} className='mr-2 sm:mr-4'>
            <NavLink
              to={link.url}
              replace
              className={({ isActive }) =>
                isActive
                  ? 'border-x-4  border-secondary mx-0 px-2.5 rounded-ss-md rounded-ee-md text-base font-semibold tracking-wide text-base-300 focus:text-base-300'
                  : 'border-b-2 border-transparent text-base text-neutral-content hover:text-base-300 focus:text-base-300'
              }
              // end={link.url === '/'}
              // className={
              //   isActive
              //     ? ' bg-primary text-secondary ' // Aktiv: blauer Text und blauer Rand
              //     : ' text-base-300 hover:text-secondary ' // Inaktiv: Schwarz, bei Hover/Fokus Blau
              // }
              // onFocus={() => console.log('Link focused')} // Fokus explizit setzen
              // onClick={() => console.log('Link clicked')}
            >
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}
export default NavLinks
