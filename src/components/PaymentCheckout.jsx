import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import CustomField from './Formik/CustomField';
import CustomForm from './Formik/CustomForm';

const PaymentCheckout = () => {
    return (
        <div className='my-[10%] mx-[5%]'>
            <div className="card mx-auto">
                <div className="card-body">
                    <form action="">
                        <div className='text-center'>
                            <h2 className='font-bold text-xl'>Payment Checkout</h2>
                            <div className="flex flex-col w-full justify-between gap-4 lg:flex-row">
                                <div className="grid card flex-grow mt-[5%] h-auto rounded-box">
                                    <div className="text-left">
                                        <h2 className='mb-[2%] font-bold'>Problem Description</h2>
                                        <textarea className="textarea textarea-success textarea-lg bg-transparent w-full" placeholder="Problem Description"></textarea>
                                    </div>
                                </div>
                                <div className="grid card flex-grow mt-[5%] h-auto rounded-box">
                                    <div className="booking-card">
                                        <h2 className='mb-[2%] font-bold text-left'>Booking Summary</h2>

                                        <ul className="flex gap-4">
                                            <li><span className='font-bold'>Date :</span><span>14 Nov 2023</span></li>
                                            <li><span className='font-bold'>Time :</span><span>10:00 AM</span></li>
                                        </ul>

                                        <div className='flex justify-between'>
                                            <span>Consulting Fee</span>
                                            <span>$100</span>
                                        </div>

                                        <div className='flex justify-between'>
                                            <span>Booking Fee</span>
                                            <span>$10</span>
                                        </div>
                                        <hr />
                                        <div className='flex justify-between'>
                                            <span className='font-bold'>Total</span>
                                            <span>$110</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="focus:outline-none btn bg-success glass text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Proceed to Payment</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-white">
                                    <h3 className="font-bold text-lg">Payment</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className='focus:outline-none btn bg-success glass text-white'>Proceed to Payment</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentCheckout;
