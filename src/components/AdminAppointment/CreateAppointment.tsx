import React,{useState,useEffect} from 'react';
import Slot from '../Slot/Slot';
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
const CreateAppointment = () => {
    const [slots,setSlots]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setLoading(true)
      axios.post(rootUrl+'doctor/slots',{},{withCredentials:true})
           .then(({data})=>data.status ? setSlots(data.data): setSlots([]))  
           .catch(()=>setSlots([]))
    setLoading(false)
    },[])
    return (
        <div>
            <p className='text-center font-[700] text-xl'>Slots Available today</p>
          <div className='flex justify-between flex-wrap mx-8'>
            {
                slots.map((slot,idx)=><Slot id={idx} {...slot}/>)
            }
          </div>
        </div>
    );
};

export default CreateAppointment;