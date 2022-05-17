import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Looading from '../Shared/Looading';


const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatDate = format(date, 'PP');

    // useEffect(() => {
    //     fetch(`https://nameless-scrubland-24240.herokuapp.com/available?date=${formatDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatDate]);

    const { data: services, isLoading, refetch } = useQuery(['available', formatDate], () => fetch(`https://nameless-scrubland-24240.herokuapp.com/available?date=${formatDate}`).then(res => res.json())
    )

    if (isLoading) {
        return <Looading></Looading>
    }
    return (
        <div className='mt-5'>
            <h4 className='text-xl text-center text-secondary'>Available Appoinment {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }

            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;