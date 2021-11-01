import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';
import Tours from '../Tours/Tours';



const Home = () => {

    return (
        <div>

            <Slider></Slider>
            <Tours></Tours>
            <Banner></Banner>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;