import React from 'react';
import Navbar from './navbar';
import Navbar2 from './navbar_2';

const Homepage = () => {
    return (
    <>
    <div className='d-none d-sm-block'>
    <Navbar/>
    </div>
    <div className='d-block d-sm-none'>
        <Navbar2/>
        </div>
       
    </>
    );
}

export default Homepage;
