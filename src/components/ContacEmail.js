import React from 'react';
import emailjs from '@emailjs/browser';

const ContacEmail = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_pn3onnx', e.target, 'KQZuDdbJz6iFFxMIg')

            .then((result) => {
                alert("Correo enviado con extito, en breve nos contactaremos contigo! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()


    }
    return (

        <>
            {/* Title */}
            <div className="text-2xl text-stone-800
                                text-center  font-semibold 
                                mt-10 sm:text-4xl"
            >
                <h3>Contactanos</h3>
            </div>

            <div className='grid grid-cols-1 grid-rows-1 gap-2 lg:grid-cols-2'>

                <div className='col-span-2 m-6 p-8 
                            bg-white rounded-lg 
                            shadow-lg sm:col-span-1
                            '
                >
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

                
                    <div 
                        className="
                                    m-10 max-w-30
                                    p-6 rounded-lg 
                                    shadow-lg bg-white
                                    col-span-2  xl:col-span-1  
                                "
                        >
                        <form onSubmit={sendEmail}>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="
                                                        form-control block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                            rounded
                                                            transition
                                                            ease-in-out
                                                            m-0
                                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                                        "
                                    name="name"
                                    id="exampleInput7"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="email"
                                    className="form-control block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    name="email"
                                    id="exampleInput8"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    className="
                                                        form-control
                                                        block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white 
                                                        focus:border-blue-600 focus:outline-none
                                                                                    "
                                    name="message"
                                    id="exampleFormControlTextarea13"
                                    rows="3"
                                    placeholder="Message"
                                >
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="
                                            w-full
                                            px-6
                                            py-2.5
                                            bg-stone-800
                                            text-white
                                            font-medium
                                            text-xm
                                            leading-tight
                                            uppercase
                                            rounded
                                            shadow-md
                                            hover:bg-stone-700 hover:shadow-lg
                                            focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0
                                            active:bg-stone-800 active:shadow-lg
                                            transition
                                            duration-150
                                            ease-in-out
                                            "
                                value="Enviar mensagem"
                            >
                                Send
                            </button>
                        </form>
                    </div>
        </div>
        </>
    )
}

export default ContacEmail