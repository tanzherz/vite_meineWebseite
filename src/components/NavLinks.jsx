import { NavLink } from 'react-router-dom'

const links = [
  { id: 1, url: '/', text: 'Katha´s Idee' },
  { id: 2, url: '/products', text: 'Produktpalette' },

  { id: 3, url: '/about', text: 'Über Katha:)' },
]
const NavLinks = () => {
  return (
    <div className='flex align-element '>
      {links.map((link) => {
        return (
          <li key={link.id} className='mr-2 sm:mr-4'>
            <NavLink
              to={link.url}
              // className='w-full  text-base-300'
              // style={({ isActive }) => ({
              //   borderBottom: isActive ? '4px solid #3b82f6' : 'none', // Nur die Unterstreichung für aktive Links
              //   backgroundColor: '#2e0454',
              //   color: isActive ? '#4be696' : '#aaa0a0', // Textfarbe
              //   textDecoration: 'none', // Entfernt die standardmäßige Unterstreichung
              //   padding: '2px 0px', // Optionales Padding oben und unten
              //   borderRadius: '0',
              // })}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-blue-500 text-blue-500 hover:bg-transparent focus:bg-transparent' // Entfernt Hover und Focus Hintergründe
                  : 'border-b-2 border-transparent text-black hover:bg-transparent focus:bg-transparent'
              }
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
