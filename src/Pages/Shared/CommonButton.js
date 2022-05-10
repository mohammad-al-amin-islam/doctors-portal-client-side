import React from 'react';

const CommonButton = ({ children }) => {
    return (
        <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default CommonButton;