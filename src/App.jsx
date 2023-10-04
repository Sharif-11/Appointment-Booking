import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import mainRouter from './routes/MainRoute';
function App() {
  const router = createBrowserRouter(mainRouter)
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
