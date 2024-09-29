import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://rcmbusiness.gumlet.io/offer_banner_images/231208154938432801.jpeg?dpr=1.0&q=70&w=1440'
          alt=''
        />
        <div>
          {user ? (
            <h3>Hello, {user.email}</h3>
          ) : (
            <h3>Hello, Guest</h3> // Fallback if user is not logged in
          )}
          <h2 className='checkout__title'>
            Your Shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
              key={item.id} // Added key for list items
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
