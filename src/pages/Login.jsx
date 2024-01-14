import React, { useState } from 'react';




export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <div className="bg-[url('/abhinandan1ed.jpg')] bg-cover bg-center bg-no-repeat bg-">

            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-sm shadow-current max-[1020px]:max-w-[90%] lg:max-w-xl">
                    <img
                        src="iiti logo1.jpg"
                        className=" h-24 w-24 m-auto mb-2 "
                        alt="IITI logo"
                        loading="lazy" />
                    <h1 className="text-3xl font-semibold text-center text-[#2596be] ">
                        Faculty Login | R&D Section
                    </h1>
                    <form className="mt-6" >
                        <div className="mb-2">
                            <label
                                for="email"

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <button type='submit' className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <h2 className='text-center'>OR</h2>
                    <button className='w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-600'>
                        <p className='text-center'>Login using Institute Id
                            <svg viewBox="0 0 48 48" className='h-5 w-5 inline ml-2'>

                                <clipPath id="g">
                                    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </clipPath>
                                <g class="colors" clip-path="url(#g)">
                                    <path fill="#FBBC05" d="M0 37V11l17 13z" />
                                    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                </g>
                            </svg>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}
