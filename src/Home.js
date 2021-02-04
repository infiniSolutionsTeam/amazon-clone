import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img src="https://wallpaperaccess.com/full/1204217.jpg" alt=""   className="home__image"/> */}

                <div className="home__row">

                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>

                </div>
                <div className="home__row">

                    <Product/>
                    <Product/>
                    <Product/>


                </div>

                <div className="home__row">

                    <Product/>


                </div>
            </div>
            
        </div>


    )
}

export default Home
