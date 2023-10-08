import React,{useState} from 'react';
import {Outlet,Link,useLocation} from 'react-router-dom'
const AdminAppointment = () => {
    const location=useLocation().pathname.split('/')[3]||'create'
    const [currentRoute,setCurrentRoute]=useState(location);
    console.log(location);
    const activeClass="tab tab-lifted tab-active w-[33.33%]"
    const inactiveClass="tab tab-lifted  w-[33.33%]"
    return (
         <div>
        <div className="tabs tabs-boxed w-[100%]">
         <Link to='/admin/admin-appointment/create'
         onClick={()=>setCurrentRoute('create')}
          className={currentRoute==="create" ? activeClass:inactiveClass}>Create Appointment</Link> 
         <Link to='/admin/admin-appointment/start-close' 
         onClick={()=>setCurrentRoute('start-close')}
         className={currentRoute==="start-close" ? activeClass:inactiveClass}>Start/Close Appointment</Link> 
         <Link to='/admin/admin-appointment/delete' 
         onClick={()=>setCurrentRoute('delete')}
         className={currentRoute==="delete" ? activeClass:inactiveClass}>Delete Appointment</Link>
       </div> 
       <Outlet/>
         </div>
    );
};

export default AdminAppointment;