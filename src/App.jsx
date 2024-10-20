import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  About,
  Error,
  HomeLayout,
  Landing,
  Login,
  SingleProduct,
  Products,
} from './pages'

import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(store),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      { path: 'products/:id', element: <SingleProduct /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
