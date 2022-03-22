import React from 'react'
import { Link } from 'react-router-dom'

const MenuResponsive = ({toggleOpen}) => {
    return (
        <div className='grid grid-rows-3 text-left 
        shadow-md
                    text-gray-100 z-20 sticky top-0
                        font-semibold
                        bg-stone-900' onClick={toggleOpen}
        >
            <Link to="/" className='p-4 hover:bg-stone-700'>
                    Home
                </Link>
                <Link to="/about" className='p-4 hover:bg-stone-700'>
                    About
                </Link>
                <Link to="/products" className='p-4 hover:bg-stone-700'>
                    Products
                </Link>
                <Link to="/contac" className='p-4 hover:bg-stone-700'>
                    Contac
                </Link>
        </div>
    )
}

export default MenuResponsive