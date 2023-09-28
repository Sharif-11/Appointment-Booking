import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Signup from './components/Signup';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path:"/home",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/admin",
          element:<Admin></Admin>
        },
        {
          path:"/appointment",
          element:<Appointment></Appointment>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/schedule",
          element:<Schedule></Schedule>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
