import React from 'react';
import './Research.css';
import {motion} from 'framer-motion';

export default function Research () {
    return (
    <div>
     <div className='research w-full my-0.5 relative top-[26.5rem]'>
        <div class='py-4'>
            <div class='w-[40rem] text-7xl mx-auto '>
                <motion.h1 initial={{x:-1000}} animate={{x:100}} transition={{delay: 1.5, duration:1}} >Research at a glance</motion.h1>
            </div>
            <div class='px-8'>
                <div>
                <div className='absolute top-[10rem] left-[10rem] text-4xl text-blue-400'>
                    <motion.h21 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}} >PATENTS: </motion.h21>
                    <motion.h22 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>1500</motion.h22>
                    </div>
                    <div className='absolute top-[10rem] right-[10rem] text-4xl text-blue-400'>
                    <motion.h23 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>DESIGNS: </motion.h23>
                    <motion.h24 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>24</motion.h24>
                    </div>
                    </div>
                <div>
                    <div className='absolute top-[2rem] left-[45rem] w-4 h-[40rem] border-2-black'>

                    </div>
                <div className='absolute bottom-[20rem] left-[10rem] text-4xl text-blue-400'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>COPYRIGHTS</motion.h2>
                    </div>
                    <div className='absolute bottom-[20rem] right-[10rem] text-4xl text-blue-400'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>TRADEMARKS</motion.h2>
                    </div>
                    </div>
                <div className='absolute bottom-[6rem] left-[10rem] text-4xl text-blue-400 '>
                    <div className='flex'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}} className='px-20'>PROJECTS:600</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}} className='px-20'>No.of Projects: 200</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}} className='px-20'>Value: 6788</motion.h2>
                    </div>
                </div>
            </div>
        </div>
     </div>
     </div>
    );
}