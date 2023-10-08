import React from 'react';

const Slot = ({startTime,endTime,bookingStartTime,bookingEndTime,isStart=true}) => {
    return (
        <div className='card my-3 shadow-xl w-[40%]'>
            <p className='font-[700] text-lg'>Service Time</p>
            <p className='text-md text-[green]  italic'>{startTime} - {endTime}</p>
            <p className='font-[700] text-lg's>Booking Time</p>
            <p className='text-md italic text-[green]'>{bookingStartTime} - {bookingEndTime}</p>
            <button disabled={!isStart} className='btn btn-info mt-5'>Create Appointment</button>
        </div>
    );
};

export default Slot;