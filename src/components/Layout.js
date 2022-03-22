import React, { useState, useEffect } from 'react';
import Navbar from '../inc/Navbar';
import MenuResponsive from './MenuResponsive';

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hiddenMenu = () => {
            if (window.innerWidth > 768 && isOpen)
                setIsOpen(false);
        };

        window.addEventListener("resize", hiddenMenu);

        return () => {
            window.removeEventListener("resize", hiddenMenu)
        };
    });

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <div className='z-40'>
                <Navbar toggleOpen={toggleOpen} />
                {isOpen && <MenuResponsive toggleOpen={toggleOpen} />}
                {children}
            </div>
        </div>

    );
}


export default Layout