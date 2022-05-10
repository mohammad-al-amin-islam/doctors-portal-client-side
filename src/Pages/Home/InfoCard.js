import React from 'react';

const InfoCard = ({ img, descripton, bgColor, infoTitle }) => {
    return (
        <div class={`card card-side bg-primary shadow-xl pl-3 ${bgColor}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{infoTitle}</h2>
                <p>{descripton}</p>
            </div>
        </div>
    );
};

export default InfoCard;