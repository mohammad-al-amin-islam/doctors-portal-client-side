import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            serviceName: 'Fluoride Treatment',
            serviceDetail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            serviceName: 'Cavity Filling',
            serviceDetail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            serviceName: 'Teeth Whitening',
            serviceDetail: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div className='text-center  my-20'>
            <div>
                <h3 className='text-xl text-primary font-bold'>Our Services</h3>
                <h1 className='text-3xl '>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;