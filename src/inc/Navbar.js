import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Navbar = ({ toggleOpen }) => {
    return (
        <nav className='flex justify-between items-center 
                        sticky top-0 
                        h-46 shadow-md text-gray-100 
                        font-semibold text-xl
                        bg-stone-900
                        '
        >
            <Link to="/" className='pl-8 '>
                <Logo />
            </Link>

            {/*Wrapper Icon */}
            <div className='px-4 cursor-pointer md:hidden' onClick={toggleOpen}>

                {/* Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

            </div>

            {/* Link Navbar */}
            <div className='z-40 pr-8 hidden  md:block'>
                <Link to="/" className='px-4 py-2 ml-2 bg-stone-700 rounded-lg '>
                    Inicio
                </Link>
                <Link to="/about" className='px-4 py-2 ml-2  bg-transparent rounded-lg hover:bg-stone-700'>
                    Nosotros
                </Link>
                <Link to="/products" className='px-4 py-2 ml-2  bg-transparent rounded-lg hover:bg-stone-700'>
                    Productos
                </Link>
                <Link to="/contac" className='px-4 py-2 ml-2  bg-transparent rounded-lg hover:bg-stone-700'>
                    Contacto
                </Link>

            </div>

        </nav>
    )
}

export default Navbar