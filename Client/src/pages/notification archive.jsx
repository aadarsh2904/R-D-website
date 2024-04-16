import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'

import Footer from '../components/Footer/Footer'

const NotificationArchive = () => {

  const [data,setData]=useState('')
useEffect(()=>{
  const fetchData = async()=>{
  try {
    const res = await axios.get("http://localhost:5000/api/notificationpage");
     setData(res.data)
  } catch (error) {
    console.log(error)
  }
  }
  fetchData();
},[])
  return (
   <>
   <Navbar/>
   <div className="w-full ">
   <h1 className="text-4xl font-bold text-center w-full  py-6 bg-blue-600 max-md:text-3xl ">
     Notifications
   </h1>
   <hr className="w-full border-[1px] border-solid border-blue-700" />
   <div className=" w-full   ">
     <ul className="pl-[20%] max-md:pl-[10%] pt-8 pb-8 text-xl font-semibold text-start text-gray-700  w-[80%] max-sm:w-[95%] mx-auto">
        {Array.isArray(data) && data.map((notification, index) => (
              <li className="p-3" key={index}>
                <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
                <a target='_blank' className="hover:underline" href={notification.link}>{notification.notification}</a>
              </li>
            ))}
     </ul>
   </div>

   <Footer />
 </div></>
  )
}

export default NotificationArchive