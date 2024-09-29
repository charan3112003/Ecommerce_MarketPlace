import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            src='https://1.bp.blogspot.com/-TGL73JgYC14/VpjJ35gj9cI/AAAAAAAACSI/prHyITVi9jQ/s1600/May-Event-1.jpg' alt=''/>

            <div className='home__row'>
                <Product
                 id="4903850"
                title="The Marketing Plan Book" price={298}
                image="https://rcmbusiness.gumlet.io/PROD_IMAGES/230523105308516401.jpg"
                rating={5}/>
                <Product 
                id="2345678"
                title="Nutricharge S & F" price={3150}
                rating={4}
                image="https://www.nutricharge.in/assets/images/product/Nutricharge%20S%20&%20F-min.jpg" />
            
              
            </div>
            <div className='home__row'>
            <Product 
            id="1684464"
            title="Cavigo Herbal Tooth paste 50 g" price={28}
            image="https://rcmbusiness.gumlet.io/PROD_IMAGES/240529113003757203.jpg?w=1440&dpr=1.3" 
            rating={4}/>
            <Product 
            id="48641862"
            title="Nysa Sensation Cream Bar 100 g" price={50}
            image="https://rcmbusiness.gumlet.io/PROD_IMAGES/240603135331546301.jpg?dpr=1.0&q=70&w=480"
            rating={4} />
            <Product 
            id="462525"
            title="Rcm Edible Coconut Oil bottle,250 ml" price={142}
            image="https://rcmbusiness.gumlet.io/PROD_IMAGES/240531095608559401.jpg?w=480&dpr=1.3"
            rating={4} />
                
            </div>
            <div className='home__row'>
            <Product 
            id="66752"
            title="Harit Sanjivani Garden Gold,500 g" price={120}
            image="https://rcmbusiness.gumlet.io/PROD_IMAGES/240702161223135801.jpg?w=480&dpr=1.3"
            rating={4}/>
                
            </div>
        </div>
    </div>
  );
}

export default Home;