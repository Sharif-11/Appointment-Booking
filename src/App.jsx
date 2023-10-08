import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import mainRouter from './routes/MainRoute';
import { useEffect, useState } from 'react';
import UserContext from './Contexts/UserContext';
import axios from 'axios';
import { rootUrl } from './utils/rootUrl';
import axiosApi from './Axios/axios';
function App() {
  const router = createBrowserRouter(mainRouter)
  const [user,setUser]=useState(null);
  useEffect(()=>{
   axiosApi.get(rootUrl+'user/login')
  .then(({data})=>{
    console.log(data);
      if(data.status){
        setUser(data.data)
        localStorage.setItem('token',data.data.token)
        
      }
  })
  .catch(()=>setUser(null))
  },[])
  return (
    <UserContext.Provider value={[user,setUser]}>
       <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </UserContext.Provider>
  )
}

export default App;
