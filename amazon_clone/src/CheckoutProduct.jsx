import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();


    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
          
        });
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title"> {title} </p>

                <p className="checkoutProduct_price"> {price} </p>

                <small>$</small>
                <strong>{price}</strong>
                
                <div className="checkoutProduct_rating"> 
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐️</p>
                ))} 
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
                
            </div>
        </div>
    );
}

export default CheckoutProduct;
