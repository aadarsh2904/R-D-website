import React, { useState } from 'react';




export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <div className="bg-[url('/abhinandan1.jpg')] bg-cover bg-center bg-no-repeat bg-">

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
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#2596be] rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-normal text-center text-gray-700">
                        {" "}
                        Or login using{" "}
                        <a
                            href="#"
                            className="font-medium text-[#2596be] hover:text-black"
                        >
                            <p className='inline'>Institute email-id </p>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline ml-1 mb-1 "
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    />
                                </svg>
                            
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
