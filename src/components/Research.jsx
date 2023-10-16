import React from 'react';
import './Research.css';
import {motion} from 'framer-motion';

export default function Research () {
    return (
     <div className='container'>
        <div class='content'>
            <div class='left-side'>
                <motion.h1 initial={{x:-1000}} animate={{x:100}} transition={{delay: 1.5, duration:1}}>Research at a glance</motion.h1>
            </div>
            <div class='right-side'>
                <div className='row'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>PATENTS</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>DESIGNS</motion.h2>
                </div>
                <div className='row'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>COPYRIGHTS</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>TRADEMARKS</motion.h2>
                </div>
                <div className='column'>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>PROJECTS:</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>No. of Projects:</motion.h2>
                    <motion.h2 initial={{y:1000}} animate={{y:-10}} transition={{delay: 1.5, duration:1.5}}>Value:</motion.h2>
                </div>
            </div>
        </div>
     </div>
    );
}