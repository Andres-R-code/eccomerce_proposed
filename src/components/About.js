import React from 'react';
import Banner from '../components/Banner';
import Alert from '../components/Alert';
import Footer from "../inc/Footer";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div >
            <Banner />
            <Alert />

            {/* Banner */}
            <div className='my-10 grid grid-cols-1 grid-rows-1 lg:grid-cols-2'>
                <div className='col-span-2  p-8 bg-stone-800 text-gray-100  shadow-lg sm:col-span-1'>
                    <div className='grid grid-rows-2'>
                    <h className="text-2xl font-semibold row-span-1  
                                lg:text-4xl p-3 
                                xl:text-5xl mt-3 max-height-auto 
                            "
                    >
                        Nos apasiona ayudar a nuestros clientes a transformar su vida
                    </h>
                    <h 
                        className="
                                text-xl row-span-1 pt-2 
                                lg:text-2xl p-3 
                                xl: 
                                "
                    >
                        Tenemos la mejor tecnologia a nuestro alcance
                    </h>
                    </div>
                </div>
                <div className='col-span-2  shadow-lg sm:col-span-1'>
                    <Link to="/about">
                            <img 
                            className="" 
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                            alt="" />
                    </Link>
                </div>
            </div>

            {/* ContainerCore Ages */}
            <div className="grid grid-rows-1 pt-4  md:grid-cols-3 gap-4 mx-2"
            >
                {/* Card 1 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/about">
                            <img 
                            className="rounded-t-lg " 
                            src="https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=20&m=832632796&s=612x612&w=0&h=x16eCudsPf__avBXdI9qNhnYYi4V8O1o4TcXgSq0yKI=" 
                            alt="" />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-semibold mb-2">2020</h5>
                            <div className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/about">
                            <img 
                                className="rounded-t-lg" 
                                src="https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?k=20&m=1226241649&s=612x612&w=0&h=l_kyD4vTzc3ljKwHV3HzaDDt8Hq-kCRCsyNIVVu2eLA=" 
                                alt="" />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-semibold mb-2">2021</h5>
                            <div clasName="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-span-1 flex justify-center mb-4 p-10">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <Link to="/about">
                            <img 
                            className="rounded-t-lg" 
                            src="https://media.istockphoto.com/photos/drone-hoovers-over-city-in-high-angle-view-picture-id831440460?k=20&m=831440460&s=612x612&w=0&h=z_mmp6RFnUZkYtK7tZGTrkYPso6-EqJsRZzSZyMocRk=" 
                            alt="" 
                        />
                        </Link>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-semibold mb-2">2022</h5>
                            <div className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About