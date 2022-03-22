import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeText = () => {
    return (
        <div className='z-0'>
            {/* Title */}
            <div 
                className="text-2xl text-stone-800
                            text-center font-semibold 
                            mt-10 sm:text-4xl
                            "
            >
                <h3>Clock</h3>
            </div>

            <div className="grid grid-rows-1 p-10
                        lg:grid-rows-2
                        lg:grid-cols-2 gap-2
                        xl:p-10
                        "
            >

                {/* Image */}

                <div className="col-span-1 row-span-2 bg-clip-padding p-4">
                    <img className="rounded-lg w-1/1"
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="W3Schools.com"
                    />

                </div>

                {/* Text */}
                <div className="shadow-lg bg-white
                    mx-2 mb-6 px-4 py-2
                    rounded-lg col-span-1 
                    lg:col-span-1 
                    lg:row-span-2
                    lg:mx-1  py-6
                    xl:mx-4  py-12 px-12
                    2xl:mx-4 mt-2  py-2 px-12
                    "
                >
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
                        earum nostrum asperiores in modi recusandae alias ipsa qui dolorem ut
                        ullam reprehenderit, amet neque voluptas commodi non at inventore.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
                        earum nostrum asperiores in modi recusandae alias ipsa qui dolorem ut
                        ullam reprehenderit, amet neque voluptas commodi non at inventore.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
                        earum nostrum asperiores in modi recusandae alias ipsa qui dolorem ut
                        ullam reprehenderit, amet neque voluptas commodi non at inventore.
                    </div>
                    <Link to="/about" class="flex space-x-2 justify-end mt-3">
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 
                                    bg-stone-800 text-white font-medium text-xm 
                                    leading-tight uppercase rounded 
                                    shadow-md hover:bg-gray-900 hover:shadow-lg 
                                    focus:bg-gray-900 focus:shadow-lg focus:outline-none 
                                    focus:ring-0 active:bg-gray-900 active:shadow-lg 
                                    transition duration-150 ease-in-out
                                    "
                        >
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default WelcomeText