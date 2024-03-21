import React, { useState } from 'react';
import Search from './Search';
import Offer from './Offer';
import Cart from './Cart';
import Carousel from './Carousel';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider';

const Navbar = () => {
    const [boolClick, setboolClick] = useState(false);

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
                        <div className='ms-4'><Offer setboolClick={setboolClick}/></div>
                        <div className='ms-4'><Cart /></div>
                        

                    </div>
                </nav>
            </header>
            <Carousel />
            {boolClick && <ImageSlider />}
        </div>
    );
}

export default Navbar;
