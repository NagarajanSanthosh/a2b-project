import React, { useState } from 'react';
import Search from './Search';
import Offer from './Offer';
import Cart from './Cart';
import ImageAnimator from './ImageAnimator';
import Slider from './Slider';

const Navbar = () => {
    const [boolClick, setBoolClick] = useState(false);

    return (
        <div>
            <header className='flex items-center justify-between py-4 px-6'>
                <nav className='flex items-center'>
                    <Search />
                </nav>
                <div className='flex-grow text-center'>
                    <h1 className='text-xl font-bold'>MENU</h1>
                </div>
                <div className='flex items-center'>
                    <div className='ml-4'><Offer setboolClick={setBoolClick} /></div>
                    <div className='ml-4'><Cart /></div>
                </div>
            </header>
            <Slider />
            {boolClick && <ImageAnimator />}
            <h1>Hello</h1>
        </div>
    );
}

export default Navbar;
