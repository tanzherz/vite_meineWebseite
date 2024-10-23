import { createSlice } from '@reduxjs/toolkit'
// import themes from 'daisyui/src/theming/themes'
import { toast } from 'react-toastify'
const themes = {
  winter: 'winter',
  black: 'black',
}

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = { username: action.payload }
      console.log('stateUser' + state.user)

      // localStorage.setItem('user', JSON.stringify(state.user))
      // console.log(action.payload)
    },
    logoutUser: (state) => {
      state.user = null
      // localStorage.clear()
      toast.success('Logged out')
    },

    toggleTheme: (state) => {
      const { winter, black } = themes
      state.theme = state.theme === winter ? black : winter
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions
export default userSlice.reducer
