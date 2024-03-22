import React from 'react';
import Search from './Search';
import Order from './Order';
import Cart from './Cart';
import Carousel from './Carousel';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <header className='navbar-container'>
                <nav className='navbar'>
                    <div className='left-items'>
                        <Search />
                    </div>
                    <div className='center-items'>
                        <h2><strong>M E N U</strong></h2>
                    </div>
                    <div className='right-items'>
                        <div className='ms-4'><Order /></div>
                        <div className='ms-4'><Cart /></div>
                    </div>
                </nav>
            </header>
           
        </div>
    );
}

export default Navbar;
