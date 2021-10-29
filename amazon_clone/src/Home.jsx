import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/71FiqkRe6hL._SX3000_.jpg" alt="home_backdrop" />

                <div className="home_row">
                    <Product 
                        id='1234'
                        title='Cracking the Coding Interview: 189 Programming Questions and Solutions'
                        image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg' 
                        price='24.49' 
                        rating={5} />

                    <Product 
                        id='6734'
                        title='All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light – Ad-Supported'
                        image='https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SL1000_.jpg'
                        price='139.99' 
                        rating={2} />
                    
                </div>
                <div className="home_row">
                    <Product
                        id='4567'
                        title='Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones - Triple Black'
                        image='https://images-na.ssl-images-amazon.com/images/I/51JbsHSktkL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
                        price='329.00'
                        rating={5} />

                    <Product
                        id='7699'
                        title='2021 Apple 10.2-inch iPad (Wi-Fi, 256GB) - Space Gray'
                        image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg'
                        price='478.99'
                        rating={5} />
                    <Product
                        id='7653'
                        title='Apple Watch Series 7 GPS, 41mm Midnight Aluminum Case with Midnight Sport Band - Regular'
                        image='https://m.media-amazon.com/images/I/71gg8mPlAuL._AC_SL1500_.jpg'
                        price='399.99'
                        rating={5} />
                </div>
                <div className="home_row">
                    <Product
                        id='0987'
                        title='SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model)'
                        image='https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
                        price='527.99'
                        rating={5} />
                </div>
            </div>
        </div>

    );
}

export default Home;
