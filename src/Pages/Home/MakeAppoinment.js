import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import CommonButton from '../Shared/CommonButton';

const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center my-7' style={{ backgroundImage: `url(${appointment})` }} >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h1 className='text-4xl text-white my-7'>Make an appointment Today</h1>
                <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <CommonButton>Get Started</CommonButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;