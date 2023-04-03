import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div>
        <div className='home'>
            <div className='home__container'>
            <img src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt='' className='home__image'/>
            <div className='home__row'>
            <Product title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                price={20}
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="123"
            />

            </div>
            <div className='home__row'>
            <Product price={20}
                title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="12"/>
            <Product 
                price={20}
                title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="12689"/>
            

            </div>
            <div className='home__row'>
            <Product price={20}
            title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="1234"/>
            <Product price={20}
            title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="12345"/>
            <Product price={20}
            title="All Out Ultra Power+ Floral Fragrance (Single Refill) 45ML"
                rating={5}
                image="https://m.media-amazon.com/images/I/71ydSGWH1oL._SX679_.jpg"
                id="123456"/>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Home