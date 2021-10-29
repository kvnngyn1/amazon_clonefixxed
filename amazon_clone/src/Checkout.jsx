import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

// import CurrencyFormat from "react-currency-format"

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_cart">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-prime-banner2.jpg" alt="amazon ad" />

                <div className="checkout_title">
                    <h2>Your Shopping Cart</h2>

                    {/* render shopping items here */}
                    <CheckoutProduct
                        id='1234'
                        title='Cracking the Coding Interview: 189 Programming Questions and Solutions'
                        image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'
                        price='24.49'
                        rating={5}
                    />
                    <CheckoutProduct
                        id='1234'
                        title='Cracking the Coding Interview: 189 Programming Questions and Solutions'
                        image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'
                        price='24.49'
                        rating={5}
                    />
                    {/* {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))} */}
                </div>

            </div>

            <div className="checkout_continue">
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;
