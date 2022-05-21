import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <p>{slots.length ?
                    <span>{slots[0]}</span>
                    :
                    <span className='text-red-500'>Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'services' : 'service'} available</p>
                <p><small>price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn modal-button btn-primary text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;