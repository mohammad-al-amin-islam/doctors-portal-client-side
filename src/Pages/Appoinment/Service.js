import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title text-primary">{name}</h2>
                <p>{slots.length ?
                    <span>{slots[0]}</span>
                    :
                    <span className='text-red-500'>Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'services' : 'service'} available</p>
                <div class="card-actions justify-center">
                    <button className='btn btn-primary text-white' disabled={slots.length === 0}>Book Appoinments</button>
                </div>
            </div>
        </div>
    );
};

export default Service;