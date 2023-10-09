import axios from 'axios';
import { useEffect, useState } from 'react';
import {rootUrl} from '../../utils/rootUrl'
import Appointment from './Appointment';
const Appointments = () => {
    const [appointments,setAppointments]=useState([])
    useEffect(()=>{
        axios.get(rootUrl+'patient/appointments',{withCredentials:true})
         .then(({data})=>data.status && setAppointments(data.data))
         .catch(()=>setAppointments([]))
    },[])
    
    return (
        <div className='m-12 py-3'>
            <h1 className=' text-center my-[24px]'>Upcoming Appointments</h1>
            <div className='w-full my-auto flex flex-wrap p-8 border border-red-500'>
               {
                appointments.map((appointment,idx)=><Appointment key={idx}
                   {...appointment}
                />
                )
               }
            </div>
        </div>
    );
};

export default Appointments;