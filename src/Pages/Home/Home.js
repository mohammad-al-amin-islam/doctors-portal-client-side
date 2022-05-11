import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import SpecialService from './SpecialService';
import Testimonials from './Testimonials';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialService></SpecialService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;