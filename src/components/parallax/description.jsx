import React from 'react';
import Paragraph2 from '../paragraph/paragraph2';
import Button from '../button/Button';

export const Description = () => {
    return (
        <div className='flex justify-center my-40'>
            <div className='w-[80%] md:w-[50%]'>
                <Paragraph2 paragraph='I create all kinds of websites for any need.' />
                <Button text='Download CV' />
            </div>
        </div>
    );
};

export default Description;