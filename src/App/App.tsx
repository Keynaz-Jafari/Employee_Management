import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "../pages/login"


export default function App() {
  const router = createBrowserRouter([{
    path:'/login',
    element:<Login/>
  }])
  return (
<RouterProvider router={router}/>
  )
}