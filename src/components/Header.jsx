import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const themes = {
  winter: 'winter',
  dark: 'black',
}
const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme' || themes.winter)
}

const Header = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())
  const handleTheme = () => {
    const { winter, dark } = themes
    const newTheme = theme === winter ? dark : winter
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className='bg-base-300 flex  justify-center a py-2 '>
      <div className='flex items-center'>
        {/**USER */}
        {/**LINKS */}

        <label className='swap swap-rotate mr-3'>
          <input type='checkbox' onChange={handleTheme} />
          <BsMoonFill className='swap-on h-4 w-4' />
          <BsSunFill className='swap-off h-4 w-4' />
        </label>
      </div>
      <div className='flex items-center'>
        <Link to='/login'>login</Link>
      </div>
    </header>
  )
}
export default Header
