import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div className='mt-16'>
            <div className="carousel w-full bg-gray-900">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="relative h-[650px] w-full">
                        <img src="/public/images/Banner-1.jpg" className="absolute top-0 left-0 w-full h-full opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="font-bold py-3 text-white">Hello, I'm Dr. X</h1>
                                <p className='py-3 text-white'>
                                    Nam vehicula malesuada lectus, interdum fringilla nibh. <br/> Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className='btn bg-[#4299E1] text-white font-bold'>Get an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/public/images/Banner-2.jpg" className="h-[650px] w-full opacity-40" />
                    {/* <h1 className='-ml-[60%] mt-[20%] text-white font-bold'>Hello, I'm Dr. X</h1> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/images/Banner-3.jpg" className="h-[650px] w-full opacity-40" />
                    {/* <h1 className='-ml-[60%] mt-[20%] text-white font-bold'>Hello, I'm Dr. X</h1> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='container1 mt-30 flex mx-auto my-3 items-center justify-center'>
                <div className='left w-1/4 py-3 mx-5'>
                    <img src="/public/images/med1.jpg" className='h-14 items-center justify-center mx-28'/>
                    <p className='font-bold text-xl text-gray-600 py-3'>Hearing Test & Aids</p>
                    <p className=''>This is a dummy text.Nam vehicula malesuada lectus, interdum fringilla nibh.</p>
                </div>
                <div className='middle w-1/4 mx-16'>
                    <img src="/public/images/med-2.jpg" className='h-14 mx-28'/>
                    <p className='font-bold text-xl text-gray-600 py-3'>Paediatric & Adult Audiology</p>
                    <p>This is a dummy text.Nam vehicula malesuada lectus, interdum fringilla nibh.</p>
                </div>
                <div className='right w-1/4 py-3'>
                    <img src="/public/images/med4.jpg" className='h-14 mx-28' />
                    <p className='font-bold text-xl text-gray-600 py-3'>Servicing of Hearing Instruments</p>
                    <p>This is a dummy text.Nam vehicula malesuada lectus, interdum fringilla nibh.</p>
                </div>

            </div>
            <div className='container2 mt-30 flex mx-auto items-center justify-center '>
                <div className='left w-1/2'>
                    <h1 className='text-gray-600 font-bold py-3'>About Dr X<br/></h1>
                    <p className='py-3 '> Nam vehicula malesuada lectus, interdum fringilla nibh. <br/> Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className='btn bg-[#285b85] text-white font-bold'>Know More</button>
                </div>
                <div className='right w-1/3 flex flex-col'>
                    
                    <img src="/public/images/doc1.png" className='w-300'/>
                </div>
            </div>
            <div className='container3 mt-30 flex mx-auto items-center justify-center '>
                 <div className='left w-1/3 flex flex-col'>
                    <img src="/public/images/doc2.png" className='w-300'/>
                </div>
                <div className='right w-3/4'>
                    <p className='text-gray-600 text-3xl font-bold py-3 mx-20'>Specialist hearing services are provided</p>
                    <p className='py-3 mx-20 '> Specialist hearing services are provided through our partners Audiomax who's vision is to maximise the quality of life of people with hearing impairment.</p>
                    <p className='font-bold text-lg text-gray-600 py-3 mx-36'>Hearing Test & Aids</p>
                    <p className='mx-36'>A hearing test is a diagnostic evaluation that determines an individual's ability to hear various frequencies and intensities, pinpointing any potential hearing loss or impairment. If hearing deficits are identified, aids such as hearing aids may be recommended. </p>
                    <p className='font-bold text-lg text-gray-600 py-3 mx-36'>Paediatric & Adult Audiology</p>
                    <p className='mx-36'>Paediatric Audiology addresses hearing and balance disorders in children, considering their unique developmental needs. In contrast, Adult Audiology focuses on auditory and balance issues in adults, often encompassing age-related hearing challenges.</p>
                    <p className='font-bold text-lg text-gray-600 py-3 mx-36'>Provision & Servicing of Hearing Instruments</p>
                    <p className='mx-36'>Provision of Hearing Instruments involves the recommendation, customization, and fitting of devices to enhance auditory experiences for those with hearing impairments. Servicing of Hearing Instruments encompasses maintenance, repairs, and adjustments to ensure optimal performance and longevity of these devices.</p>
                    <p></p>
                </div>
                
            </div>
            <div className='container-4 flex'>
            <div className='left w-1/3 mt-30 py-12 px-28'>
              <p className='text-gray-600 font-bold text-3xl py-3 flex'>Address Line #1</p>
              <p>123 Main Street</p>
              <p>Your City, State</p>
              <p>Country.</p>
              <p className='flex py-3 mb-0'>(123)456-7890 <br />(123)456-7899</p>
              <p>info@doctorX.me</p>
              <p>info@doctorX.me</p>
            </div>

                <div className='right w-2/3 mt-30 py-10 px-28'>
                    <div>
                         <p className='text-gray-600 font-bold text-3xl py-3'>Contact with Dr. X</p>
                         <p className='flex py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta i</p>
                    </div>
                    <div className='flex flex-col text-grey-600 bg-white rounded-xl'>
                       <input type='text' placeholder='Enter Your Email Address ' className='bg-white rounded p-2 my-1 shadow-sm border border-gray-400' />
                       <input type='text' placeholder='Enter Your Full Name ' className='bg-white rounded p-2 my-1 shadow-sm border border-gray-400' />
                       <input type='text' placeholder='Enter Your Message' className='bg-white rounded p-8 my-1 shadow-sm border border-gray-400' />
                       <button className='mt-2 bg-[#285b85] text-white py-2 px-4 rounded shadow-sm hover:bg-gray-900'>Submit</button>
                   </div>

                </div>
            </div>
        </div >
    );
};

export default Home;