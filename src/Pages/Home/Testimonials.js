import React from 'react';
import quote from '../../assets/icons/quote.svg'
import user1 from '../../assets/images/people1.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [

        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: '',
            img: user1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            review: '',
            img: user1
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            review: '',
            img: user1
        },

    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonials;