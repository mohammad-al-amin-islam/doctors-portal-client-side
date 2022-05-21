import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Looading from '../Shared/Looading'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L1lxQLTc38bFnonmsCIV7DHvBv2IikwBjZ8kzRxqt4VX6gLFUAftzZcs4Twa8if4VoQtEaTrnTMfis2zhMir93900E3CB0mXk');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`
    const { data: booking, isLoading } = useQuery(['paymentData', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `BEARER ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Looading></Looading>
    }
    return (
        <div>
            <h3 className="text-2xl text-secondary">Payment Area of {id}</h3>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Dear {booking.patientName}</p>
                    <h2 class="card-title">Pay for {booking.treatmentName}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{booking.date}</span> at {booking.slot}</p>
                    <p>You have to pay: ${booking.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;