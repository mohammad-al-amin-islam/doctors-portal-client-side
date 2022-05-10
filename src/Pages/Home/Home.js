import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import SpecialService from './SpecialService';

const Home = () => {
    return (
        <div className='px-9'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialService></SpecialService>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;