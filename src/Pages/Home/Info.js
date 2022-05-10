import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-9">
            <InfoCard descripton='Lorem Ipsum is simply dummy text of the pri' bgColor='bg-gradient-to-r from-primary to-secondary' img={clock} infoTitle='Opening Hours'></InfoCard>
            <InfoCard descripton='Brooklyn, NY 10036, United States' bgColor='bg-accent' img={marker} infoTitle='Visit Our location'></InfoCard>
            <InfoCard descripton='+000 123 456789' bgColor='bg-gradient-to-r from-primary to-secondary' img={phone} infoTitle='Contact us Now'></InfoCard>
        </div>
    );
};

export default Info;