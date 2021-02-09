import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://wallpaperaccess.com/full/1204217.jpg" alt=""   className="home__image"/>

                <div className="home__row">

                    <Product id={400} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    <Product id={401} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    <Product id={402} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    <Product id={403} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    

                </div>
                <div className="home__row">
                    <Product id={404} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    <Product id={405} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                    <Product id={406} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
                </div>

                <div className="home__row">

                    <Product id={407} title="The Chatson Books | How to write a proposal." price={29.99}  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>

                </div>
            </div>
            
        </div>


    )
}

export default Home
