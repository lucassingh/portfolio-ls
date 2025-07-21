import React from 'react';
import Paragraph2 from '../paragraph/paragraph2';
import Button from '../button/Button';

export const Description = () => {

    const handleClick = (event) => {
        console.log('entro')
        event.preventDefault();
        window.open(
            'https://drive.google.com/file/d/1FRIXpYuzGNwvyaEU0DXo_cvTtB2RqD3e/view?usp=sharing',
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <div className='flex justify-center my-40'>
            <div className='w-[80%] md:w-[50%]'>
                <Paragraph2 paragraph='I create all kinds of websites for any need.' />
                <div className='relative z-30'>
                    <Button onClick={handleClick} text='Download CV' />
                </div>
            </div>
        </div>
    );
};

export default Description;
