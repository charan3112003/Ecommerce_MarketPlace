import React from 'react';
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        // Remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className='CheckoutProduct'>
            <img className='checkoutProduct__image' src={image} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p> // Add a key prop for list items
                    ))}
                </div>
                <button type="button" onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
