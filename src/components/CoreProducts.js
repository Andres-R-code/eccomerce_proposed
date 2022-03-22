import React from "react";
import { Link } from 'react-router-dom';

const CoreProducts = () => {
    return (
        <>
            {/* Title */}
            <div
                className="text-2xl text-stone-800
                            text-center  font-semibold 
                            mt-10 sm:text-4xl"
            >
                <h3>Productos principales</h3>
            </div>

            {/* ContainerCore products */}
            <div className="grid grid-rows-1 pt-4  md:grid-cols-3 gap-4 mx-2"
            >
                {/* Card 1 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/products">
                            <img 
                            className="rounded-t-lg " 
                            src="https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                            alt="" 
                            />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Rolex</h5>
                            <div className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                            <Link to="/products">
                                <div
                                    type="button" 
                                    className=" 
                                            inline-block px-6 py-2.5 bg-stone-800 
                                            text-white font-medium text-xm leading-tight 
                                            uppercase rounded shadow-md hover:bg-stone-700 
                                            hover:shadow-lg focus:bg-stone-700 focus:shadow-lg 
                                            focus:outline-none focus:ring-0 active:bg-blue-800 
                                            active:shadow-lg transition duration-150 ease-in-out
                                            "
                                >
                                    Comprar
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/products">
                            <img 
                                className="rounded-t-lg" 
                                src="https://images.unsplash.com/photo-1504155231981-7b401a7b71d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                                alt="" />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Rolex</h5>
                            <div clasName="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                            <Link to="/products">
                                <div 
                                    type="button" 
                                    className=" 
                                            inline-block px-6 py-2.5 bg-stone-800 
                                            text-white font-medium text-xm leading-tight 
                                            uppercase rounded shadow-md hover:bg-stone-700 
                                            hover:shadow-lg focus:bg-stone-700 focus:shadow-lg 
                                            focus:outline-none focus:ring-0 active:bg-blue-800 
                                            active:shadow-lg transition duration-150 ease-in-out
                                            "
                                >
                                    Comprar
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/products">
                            <img 
                            className="rounded-t-lg" 
                            src="https://images.unsplash.com/photo-1520895653685-c739b6db8fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlbG9qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                        />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Rolex</h5>
                            <div className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                            <Link to="/products">
                                <div 
                                    type="button" 
                                    className=" 
                                                inline-block px-6 py-2.5 bg-stone-800 
                                                text-white font-medium text-xm leading-tight 
                                                uppercase rounded shadow-md hover:bg-stone-700 
                                                hover:shadow-lg focus:bg-stone-700 focus:shadow-lg 
                                                focus:outline-none focus:ring-0 active:bg-blue-800 
                                                active:shadow-lg transition duration-150 ease-in-out
                                            "
                                >
                                    Comprar
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex space-x-2 justify-center mb-10">
                        <Link to="/products">
                        <div
                            type="button"
                            className="
                                        inline-block px-6 py-2.5 
                                        bg-stone-800 text-white font-medium text-xm 
                                        leading-tight uppercase rounded 
                                        shadow-md hover:bg-stone-700 hover:shadow-lg 
                                        focus:bg-gray-900 focus:shadow-lg focus:outline-none 
                                        focus:ring-0 active:bg-gray-900 active:shadow-lg 
                                        transition duration-150 ease-in-out
                                    "
                        >
                                Ver más
                        </div>
                        </Link>
                    </div>
        </>
    );
};

export default CoreProducts;
