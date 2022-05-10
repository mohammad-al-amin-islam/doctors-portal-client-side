import React from 'react';
import appointment from '../../assets/images/appointment.png'
import CommonButton from '../Shared/CommonButton';
const Contact = () => {
    return (
        <div className='text-center my-10 py-20' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='mb-5'>
                <h3 className='text-xl text-primary'>Contact Us</h3>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div className='lg:w-2/6 mx-auto p-5'>
                <input type="email" name="email" class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email Address" />
                <input type="text" name="text" class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Subject" />
                <textarea type="text" name="text" class="my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Message" />
                <CommonButton>Submit</CommonButton>
            </div>
        </div>
    );
};

export default Contact;