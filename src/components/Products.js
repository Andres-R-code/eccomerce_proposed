import React from 'react';
import Coursel from '../inc/Coursel';
import Banner from '../components/Banner';
import Alert from '../components/Alert';
import Footer from "../inc/Footer";

const Product = () => {
    return (
        <div>
            <Banner />
            <Alert />
            < Coursel />
            
            <div class="grid grid-cols-1 m-auto sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/watch-picture-id1300469111?k=20&m=1300469111&s=612x612&w=0&h=kCAXTSoHEReQXVqn4A0sNBsPr-i8HXmYeIORp9l1PYQ="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/wristwatch-picture-id175412203?k=20&m=175412203&s=612x612&w=0&h=oJH68Hx7J5cBIcQnJi7NVh0A5vLY5pvmquxkn2HxRNc="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/classic-women-gold-watch-white-dial-brown-leather-strap-isolate-white-picture-id1137734425?k=20&m=1137734425&s=612x612&w=0&h=zrRKYri3He_gzQpUpgz1TmPwqZ9sJwGSOsYkJl-4kEo="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/antique-wall-clock-picture-id175603135?k=20&m=175603135&s=612x612&w=0&h=ME1DsQKInM3MJhfFBSXtL2hOByZHB7ekW_Wj3KxwhYg="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/mens-wristwatch-picture-id118803311?k=20&m=118803311&s=612x612&w=0&h=_Et1nTjInxFUS0O2XHROlRKT8E7EcqfMG-3enBCkJIk="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/elite-watch-picture-id185326304?k=20&m=185326304&s=612x612&w=0&h=OXREc7so4gk4fC64yQX3PxlWNi96IqX0zNrtRQoFFsg="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/elite-watch-picture-id185326304?k=20&m=185326304&s=612x612&w=0&h=OXREc7so4gk4fC64yQX3PxlWNi96IqX0zNrtRQoFFsg="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/smartwatch-digital-clock-on-white-picture-id518820558?k=20&m=518820558&s=612x612&w=0&h=ZuzhZRMNP1P0zx-u_cR-sC5GFBVeFS2oX8I7RIUzOHU="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Porduct  */}
                <div className="py-6 m-4">
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover">
                            <img className="rounded-lg w-1/1"
                                src="https://media.istockphoto.com/photos/pocket-watch-picture-id141248080?k=20&m=141248080&s=612x612&w=0&h=ndJmYM0S7UK6RFMogyEkv_S3dFOrTyxA3bBCc3ija_k="
                                alt="W3Schools.com"
                            />
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                            <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</div>
                            <div className="flex item-center mt-2">
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-stone-700" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>
                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-stone-700 font-bold text-xl">$220</h1>
                                <button className="px-3 py-2 bg-stone-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Product