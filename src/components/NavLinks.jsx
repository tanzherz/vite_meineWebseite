import { NavLink } from 'react-router-dom'

const links = [
  // { id: 1, url: '/', text: 'ModeMacher' },
  { id: 2, url: 'about', text: 'über mich' },
]
const NavLinks = () => {
  return (
    <div className='flex '>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.url} className='capitalize btn-ghost '>
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}
export default NavLinks
