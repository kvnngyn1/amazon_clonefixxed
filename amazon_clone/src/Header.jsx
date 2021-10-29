import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className='header'>
            {/* logolink - search input bar - login - orders - membership - cart */}
            {/* png images from pngimg.com for logo images */}
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
                {/* logo - search button */}
            </div>

            <div className="header_nav">

                <div className="header_item">
                    <span className="header_itemLineOne">Hello, Guest</span>
                    <span className="header_itemLineTwo">Sign In</span>
                </div>

                <div className="header_item">
                    <span className="header_itemLineOne">Returns</span>
                    <span className="header_itemLineTwo">& Orders</span>

                </div>

                <div className="header_item">
                    <span className="header_itemLineOne">Your</span>
                    <span className="header_itemLineTwo">Prime</span>

                </div>

                <Link to="/checkout">
                    <div className="header_itemCart">
                        <ShoppingCartIcon />
                        <span className="header_itemLineTwo header_cartCount"> {cart?.length} </span>

                    </div>
                </Link>

            </div>

        </div>
    );
}

export default Header;
