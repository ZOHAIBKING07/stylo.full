import React from 'react'
import Carousel from "../components/Carousel";
import Products1 from "../components/Products1";
import Discounts from "../components/Discounts";
import Chart from "../components/Chart";
import Products2 from "../components/Products2";
import Products3 from "../components/Products3";
import Discounts2 from '../components/Discounts2';
import Carousel2 from '../components/Carousel2';
import Discounts3 from '../components/Discounts3';
import Products4 from '../components/Products4';



const Home = () => {
    return (
        <div>
            <Carousel />
            <Products1 />
            <Discounts />
            <Discounts2/>
            <Chart />
            <Products2 />
            <Carousel2 />
            <Discounts3/>
            <Products4 />
            <Products3 />

        </div>
    )
}

export default Home
