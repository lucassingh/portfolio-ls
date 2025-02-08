import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wheater from './Wheater';
import CustomCursor2 from '../cursor/CustomCursor2';

export const Location = () => {

    const [isActive, setIsActive] = useState(false);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    });

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const getTimezone = (date) => {
        const offset = -date.getTimezoneOffset() / 60;
        return `GMT${offset >= 0 ? '+' : ''}${offset}`;
    };

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <motion.div
            onMouseOver={() => { setIsActive(true) }}
            onMouseLeave={() => { setIsActive(false) }}
            ref={ref} animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            className='w-full flex items-center flex-col p-8 rounded-lg border border-[#c3c3c3]'
        >
            <h2 className='text-center text-5xl'>Available in</h2>
            <div className='sm:w-3/4 w-full flex justify-between py-8'>
                <span className='sm:text-6xl text-2xl'>Buenos Aires </span>
                <span className='sm:text-6xl text-2xl'>Remotely</span>
            </div>
            <div className='flex flex-col sm:flex-row text-center items-center justfy-center py-8'>
                <span className='text-7xl sm:text-[250px] font-black'>
                    {formatTime(currentTime)}
                </span>
                <span className='text-2xl px-0 sm:px-6 '>{getTimezone(currentTime)}</span>
            </div>
            <div className='flex items-center justfy-center py-8'>
                <Wheater />
            </div>
            <CustomCursor2 isActive={isActive} />
        </motion.div>
    )
}

export default Location