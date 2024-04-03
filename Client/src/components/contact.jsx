import React from 'react'


const contact = () => {
    return (
        <div id='contact' className='relative  w-full pb-16 bg-blue-200'>
            <h1 className='text-5xl text-center font-bold pt-16 text-blue-800'>Contact Us</h1>
            <div className='flex flex-row flex-wrap w-[100%]  pt-16  '>

                {/* phone */}
                <div id='phone' className='flex flex-col w-[22%] mx-auto border-2 border-black hover:border-4 hover:border-blue-600 hover:bg-blue-300 shadow-md p-1 items-center bg-white rounded-lg'>
                    <h2 className='text-center text-2xl font-bold '>Phone</h2>

                    <div className='flex flex-row py-4 '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </span>
                        <span className='pl-2'>+91-9080873221</span>
                    </div>

                    <div className='flex flex-row py-2  '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </span>
                        <span className='pl-2'>+91-9080873245</span>
                    </div>

                </div>
                <div id='email' className='flex flex-col items-center w-[22%] border-2 border-black hover:border-4 hover:border-blue-600 hover:bg-blue-300 shadow-md p-1 mx-auto bg-white rounded-lg'>
                    <h2 className='text-center text-2xl font-bold '>Email</h2>

                    <div className='flex flex-row py-4 '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </span>
                        <span className='pl-2'>arrnd@iiti.ac.in</span>
                    </div>

                    <div className='flex flex-row py-2 '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </span>
                        <span className='pl-2'>rndsection@iiti.ac.in</span>
                    </div>
                </div>

                <div id='address' className='flex flex-col w-[40%] mx-auto border-2 border-black hover:border-4 hover:border-blue-600 hover:bg-blue-300 shadow-md p-1 items-center bg-white rounded-lg'>
                    <h2 className='text-2xl text-center font-bold'>Address</h2>

                    <div className='flex flex-row  p-1 mx-auto '>
                        <div className='flex flex-row py-2 ml-4'>
                            <span className='py-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </span>
                            <p className='pl-2 py-2'>
                                Indian Institute Of Technology, Indore
                                Simrol,Khandwa Road
                                Indore-453552</p>
                        </div>
                        <iframe className='border-2 rounded-xl w-[20rem] h-[15rem] ml-0' id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=IIT%20Indore%20Simrol+(IIT%20Indore)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default contact