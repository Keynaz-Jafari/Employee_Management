import { createBrowserRouter,RouterProvider } from "react-router-dom"
import UserProvider from '../context/userContext'
 
import Login from "../pages/login/login"
import Dashboard from '../pages/dashboard/dashboard'


export default function App() {
  const router = createBrowserRouter([{
    path:'/login',
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }])
  return (
    <>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
    </>


  )
}