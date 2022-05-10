import React from 'react';
import chair from '../../assets/images/chair.png'
// style={{ backgroundImage: `url(${chair})`, }}
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white/[.85]" style={{ backgroundImage: `url(${chair})`, backgroundBlendMode: 'overlay' }} >
            <div class="hero-content flex-col lg:flex-row-reverse">
                < img src={chair} alt='chair' class="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-20'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div >
        </div>
    );
};

export default Banner;