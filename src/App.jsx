import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  About,
  Impressum,
  Datenschutz,
  Error,
  HomeLayout,
  Landing,
  Login,
  SingleProduct,
  Products,
} from './pages'

import { loader as homeLayoutLoader } from './pages/HomeLayout'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    loader: homeLayoutLoader(store),
    children: [
      { index: true, element: <Landing /> },
      { path: '/products/:id', element: <Products /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}
export default App
