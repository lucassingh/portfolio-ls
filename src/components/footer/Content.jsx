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
        <div className='flex justify-between items-end'>
            <p className='text-[#1c1c1c] text-xs'>Lucas Singh - ©copyright - All rights reserved</p>
            <h1 className='text-[7vw] text-[#1c1c1c] leading-[0.8] mt-10'>Stay Tuned!</h1>
        </div>
    )
}
