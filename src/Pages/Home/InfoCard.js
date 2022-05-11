import React from 'react';

const InfoCard = ({ img, descripton, bgColor, infoTitle }) => {
    return (
        <div className={`card lg:card-side bg-primary shadow-xl p-3 ${bgColor}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{infoTitle}</h2>
                <p>{descripton}</p>
            </div>
        </div>
    );
};

export default InfoCard;