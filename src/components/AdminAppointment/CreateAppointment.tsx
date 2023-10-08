import React,{useState,useEffect} from 'react';
import Slot from '../Slot/Slot';
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
import {useNavigate} from 'react-router-dom'
const CreateAppointment = () => {
    const [slots,setSlots]=useState([])
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate()
    useEffect(()=>{
        setLoading(true)
      axios.post(rootUrl+'doctor/slots',{},{withCredentials:true})
           .then(({data})=>data.status ? setSlots(data.data): setSlots([]))  
           .catch(()=>setSlots([]))
    setLoading(false)
    },[])
    const createAppointment=async (id)=>{
await axios.post(rootUrl+'doctor/appointment',{slotId:id},{withCredentials:true})
     .then(({data})=>{
            if(data.status){
                 navigate('/admin/admin-appointment/start-close')

            }
     })
    }
    return (
        <div>
            <p className='text-center font-[700] text-xl'>Slots Available today</p>
          <div className='flex justify-between flex-wrap mx-8'>
            {
                slots.map((slot,idx)=><Slot id={idx} {...slot} createAppointment={()=>createAppointment(slot.id)}/>)
            }
          </div>
        </div>
    );
};

export default CreateAppointment;