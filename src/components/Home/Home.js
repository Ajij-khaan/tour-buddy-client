import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import Tours from '../Tours/Tours';



const Home = () => {

    return (
        <div>

            <Slider></Slider>
            <Tours></Tours>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;