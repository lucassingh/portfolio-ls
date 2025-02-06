import React from 'react'
import FooterLinks from './FooterLinks'
import CallToAction from '../cta/CallToAction'

export default function Content() {
    return (
        <div className='bg-[#c3c3c3] py-8 px-12 w-full h-full flex flex-col justify-between'>
            <FooterLinks />
            <CallToAction />
            <Section2 />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex sm:justify-between justify-center items-end'>
            <h1 className='text-[12vw] sm:text-[5vw] text-[#1c1c1c] leading-[0.8] mt-10'>Stay Tuned!</h1>
            <p className='no-copy text-[#1c1c1c] text-[2vw] sm:text-[0.7vw]'>Lucas Singh - ©copyright - All rights reserved</p>
        </div>
    )
}
