import React from 'react';

const Review = ({ review }) => {
    return (
        <section>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam eum provident repellendus beatae quos? Magni, dolorem odit. Iusto illo pariatur cum alias quod laborum provident esse, nam error hic.</p>
                    <div className='flex items-center mt-10'>
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                                <img src={review.img} alt='' />
                            </div>

                        </div>
                        <div>
                            <h3 className="text-xl">{review.name}</h3>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;